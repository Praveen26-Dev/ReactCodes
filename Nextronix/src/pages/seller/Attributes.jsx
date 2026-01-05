import { useEffect, useState } from "react";
import { sellerController } from "../../controller/sellerController";

const AttributePage = () => {
  const [attributes, setAttributes] = useState([]);

  const [name, setName] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [values, setValues] = useState([]);

  const [loading, setLoading] = useState(false);

  /* ================= LOAD ATTRIBUTES ================= */
  const loadAttributes = async () => {
    try {
      const data = await sellerController.getAttributes();
      setAttributes(data || []);
    } catch (err) {
      console.error("Failed to load attributes", err);
    }
  };

  useEffect(() => {
    loadAttributes();
  }, []);

  /* ================= ADD VALUE ================= */
  const addValue = () => {
    if (!valueInput.trim()) return;

    setValues([...values, valueInput.trim()]);
    setValueInput("");
  };

  /* ================= REMOVE VALUE ================= */
  const removeValue = (index) => {
    setValues(values.filter((_, i) => i !== index));
  };

  /* ================= CREATE ATTRIBUTE ================= */
  const createAttribute = async () => {
  if (!name.trim()) return;

  // 🔴 FRONTEND DUPLICATE CHECK
  const exists = attributes.some(
    (attr) => attr.name.toLowerCase() === name.toLowerCase()
  );

  if (exists) {
    alert("Attribute already exists");
    return;
  }

  try {
    setLoading(true);

    await sellerController.createAttribute({
      name,
      values,
    });

    setName("");
    setValues([]);
    setValueInput("");

    loadAttributes();
  } catch (err) {
    alert(err?.response?.data?.message || "Attribute creation failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Attribute Management</h1>

      {/* ===== CREATE ATTRIBUTE ===== */}
      <div className="border rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Create Attribute</h2>

        <input
          type="text"
          placeholder="Attribute name (e.g. Color)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        {/* Attribute Values */}
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Value (e.g. Black)"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            className="border p-2 flex-1"
          />
          <button
            onClick={addValue}
            className="bg-gray-800 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {/* Values List */}
        <div className="flex flex-wrap gap-2 mb-4">
          {values.map((val, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded flex items-center gap-2"
            >
              {val}
              <button
                onClick={() => removeValue(index)}
                className="text-red-500 font-bold"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <button
          onClick={createAttribute}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {loading ? "Creating..." : "Create Attribute"}
        </button>
      </div>

      {/* ===== ATTRIBUTE LIST ===== */}
      <div>
        <h2 className="text-lg font-semibold mb-4">All Attributes</h2>

        {attributes.map((attr) => (
          <div
            key={attr.id}
            className="border rounded p-3 mb-3"
          >
            <h3 className="font-semibold">{attr.name}</h3>
            <div className="text-sm text-gray-600 mt-1">
              {attr.values.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttributePage;
