import { useEffect, useState } from "react";
import sellerController from "../../controller/sellerController";
import { useSellerProduct } from "../../context/SellerProductContext";

export default function AttributeSelectionStep({ onNext }) {
  const { selectedAttributes, setSelectedAttributes } = useSellerProduct();

  const [attributes, setAttributes] = useState([]);
  const [name, setName] = useState("");
  const [values, setValues] = useState("");
  const [error, setError] = useState("");

  /* ================= LOAD ATTRIBUTES ================= */

  useEffect(() => {
    loadAttributes();
  }, []);

  const loadAttributes = async () => {
    const data = await sellerController.getAllAttributes();
    setAttributes(data);
  };

  /* ================= TOGGLE ATTRIBUTE (ID ONLY) ================= */

  const toggleAttribute = (attrId) => {
    setSelectedAttributes(prev =>
      prev.includes(attrId)
        ? prev.filter(id => id !== attrId)
        : [...prev, attrId]
    );
  };

  /* ================= CREATE ATTRIBUTE ================= */

  const createAttribute = async () => {
    setError("");

    if (!name.trim()) {
      setError("Attribute name is required");
      return;
    }

    const valueList = values
      .split(",")
      .map(v => v.trim())
      .filter(Boolean);

    try {
      const payload = {
        name,
        values: valueList,
      };

      const created = await sellerController.createAttribute(payload);

      // 1️⃣ add to local list
      setAttributes(prev => [...prev, created]);

      // 2️⃣ auto-select newly created attribute (ID ONLY)
      setSelectedAttributes(prev => [...prev, created.id]);

      // 3️⃣ reset form
      setName("");
      setValues("");
    } catch (err) {
      console.error(err);
      setError("Failed to create attribute");
    }
  };

  /* ================= CONTINUE ================= */

  const handleNext = () => {
    if (selectedAttributes.length === 0) {
      alert("Select at least one attribute");
      return;
    }
    onNext();
  };

  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-6">

      <h2 className="text-xl font-semibold text-white">
        Attribute Selection
      </h2>

      {/* CREATE ATTRIBUTE */}
      <div className="space-y-3 border-b border-white/10 pb-4">
        <h3 className="text-sm text-gray-300">
          Create New Attribute
        </h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Attribute name (e.g. Color)"
          className="w-full px-3 py-2 rounded bg-[#1a1414] text-white border border-white/10"
        />

        <input
          value={values}
          onChange={(e) => setValues(e.target.value)}
          placeholder="Values (comma separated)"
          className="w-full px-3 py-2 rounded bg-[#1a1414] text-white border border-white/10"
        />

        <button
          onClick={createAttribute}
          className="px-4 py-2 bg-[#574724] text-white rounded hover:bg-[#6a5830]"
        >
          Create Attribute
        </button>

        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
      </div>

      {/* ATTRIBUTE LIST */}
      <div>
        <h3 className="text-sm text-gray-300 mb-2">
          Available Attributes
        </h3>

        <div className="space-y-2">
          {attributes.map(attr => {
            const selected = selectedAttributes.includes(attr.id);

            return (
              <button
                key={attr.id}
                onClick={() => toggleAttribute(attr.id)}
                className={`w-full px-4 py-3 rounded border text-left transition
                  ${
                    selected
                      ? "bg-[#574724] text-white border-[#574724]"
                      : "bg-[#1a1414] text-gray-300 border-white/10 hover:bg-[#241b1b]"
                  }`}
              >
                {attr.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTINUE */}
      <div className="flex justify-end pt-4">
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-[#574724] text-white rounded hover:bg-[#6a5830]"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
