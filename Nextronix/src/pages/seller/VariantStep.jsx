import { useEffect, useState } from "react";
import { useSellerProduct } from "../../context/SellerProductContext";
import sellerController from "../../controller/sellerController";

export default function VariantStep({ onNext }) {
  const { productId, selectedAttributes } = useSellerProduct();

  // all attributes from backend
  const [attributes, setAttributes] = useState([]);

  // { attributeId: attributeValueId }
  const [selectedValues, setSelectedValues] = useState({});

  const [variants, setVariants] = useState([]);

  const [form, setForm] = useState({
    sku: "",
    price: "",
    stock: "",
  });

  /* ================= LOAD ATTRIBUTES ================= */

  useEffect(() => {
    sellerController
      .getAllAttributes()
      .then(setAttributes)
      .catch(console.error);
  }, []);

  /* ================= HANDLERS ================= */

  const handleFormChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleValueChange = (attributeId, valueId) => {
    setSelectedValues(prev => ({
      ...prev,
      [attributeId]: Number(valueId),
    }));
  };

  /* ================= CREATE VARIANT ================= */

  const createVariant = async () => {
    if (
      !form.sku ||
      !form.price ||
      !form.stock ||
      Object.keys(selectedValues).length !== selectedAttributes.length
    ) {
      alert("Select all attributes and fill all fields");
      return;
    }

    const payload = {
      sku: form.sku,
      price: Number(form.price),
      stock: Number(form.stock),
      attributes: selectedValues,
    };

    try {
      const res = await sellerController.createVariant(
        productId,
        payload
      );

      setVariants(prev => [...prev, res]);

      setForm({ sku: "", price: "", stock: "" });
      setSelectedValues({});
    } catch (err) {
      console.error(err);
      alert("Failed to create variant");
    }
  };

  /* ================= RENDER ================= */

  const usableAttributes = attributes.filter(attr =>
    selectedAttributes.includes(attr.id)
  );

  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-6">

      <h2 className="text-xl font-semibold text-white">
        Create Variants
      </h2>

      {/* ATTRIBUTE DROPDOWNS */}
      {usableAttributes.map(attr => (
        <div key={attr.id}>
          <label className="block text-sm text-gray-300 mb-1">
            {attr.name}
          </label>

          <select
            value={selectedValues[attr.id] || ""}
            onChange={(e) =>
              handleValueChange(attr.id, e.target.value)
            }
            className="w-full px-3 py-2 rounded bg-[#1a1414] text-white border border-white/10"
          >
            <option value="">Select {attr.name}</option>
            {attr.values.map(val => (
              <option key={val.id} value={val.id}>
                {val.value}
              </option>
            ))}
          </select>
        </div>
      ))}

      {/* FORM */}
      <input
        name="sku"
        value={form.sku}
        onChange={handleFormChange}
        placeholder="SKU"
        className="w-full px-3 py-2 rounded bg-[#1a1414] text-white border border-white/10"
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleFormChange}
        placeholder="Price"
        className="w-full px-3 py-2 rounded bg-[#1a1414] text-white border border-white/10"
      />

      <input
        name="stock"
        type="number"
        value={form.stock}
        onChange={handleFormChange}
        placeholder="Stock"
        className="w-full px-3 py-2 rounded bg-[#1a1414] text-white border border-white/10"
      />

      <button
        onClick={createVariant}
        className="px-4 py-2 bg-[#574724] text-white rounded hover:bg-[#6a5830]"
      >
        Add Variant
      </button>

      {/* CONTINUE */}
      {variants.length > 0 && (
        <div className="flex justify-end pt-4">
          <button
            onClick={onNext}
            className="px-6 py-2 bg-[#574724] text-white rounded hover:bg-[#6a5830]"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
