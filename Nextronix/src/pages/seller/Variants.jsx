import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sellerController } from "../../controller/sellerController";

const Variants = () => {
  const { productId } = useParams();

  const [variants, setVariants] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [attributeValues, setAttributeValues] = useState({});

  const [form, setForm] = useState({
    sku: "",
    price: "",
    stock: "",
    attributes: {},
  });

  /* ================= LOAD VARIANTS ================= */
  const loadVariants = async () => {
    try {
      const data =
        await sellerController.getVariantsByProduct(productId);
      setVariants(data || []);
    } catch (err) {
      console.error("Failed to load variants", err);
    }
  };

  /* ================= LOAD ATTRIBUTES ================= */
  const loadAttributes = async () => {
    try {
      const data = await sellerController.getAttributes();
      setAttributes(data || []);
    } catch (err) {
      console.error("Failed to load attributes", err);
    }
  };

  /* ================= LOAD ATTRIBUTE VALUES ================= */
  const loadAttributeValues = async (attributeId) => {
    try {
      // ⚠️ backend endpoint must exist
      const res = await fetch(
        `/api/attributes/${attributeId}/values`
      );
      const data = await res.json();

      setAttributeValues((prev) => ({
        ...prev,
        [attributeId]: data,
      }));
    } catch (err) {
      console.error("Failed to load attribute values", err);
    }
  };

  useEffect(() => {
    loadVariants();
    loadAttributes();
  }, [productId]);

  /* ================= HANDLE ATTRIBUTE CHANGE ================= */
  const handleAttributeChange = (attributeId, valueId) => {
    setForm((prev) => ({
      ...prev,
      attributes: {
        ...prev.attributes,
        [attributeId]: Number(valueId),
      },
    }));
  };

  /* ================= CREATE VARIANT ================= */
  const createVariant = async (e) => {
    e.preventDefault();

    if (!form.sku || !form.price || !form.stock) {
      alert("SKU, Price and Stock are required");
      return;
    }

    try {
      await sellerController.createVariant(productId, {
        sku: form.sku,
        price: Number(form.price),
        stock: Number(form.stock),
        attributes: form.attributes,
      });

      alert("Variant created");

      setForm({
        sku: "",
        price: "",
        stock: "",
        attributes: {},
      });

      loadVariants();
    } catch (err) {
      console.error(err);
      alert("Variant creation failed");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Manage Variants (Product ID: {productId})
      </h1>

      {/* ================= CREATE VARIANT ================= */}
      <form
        onSubmit={createVariant}
        className="bg-white p-6 rounded-lg shadow space-y-4 max-w-xl"
      >
        <h2 className="font-semibold text-lg">Add Variant</h2>

        <input
          type="text"
          placeholder="SKU"
          className="border p-2 rounded w-full"
          value={form.sku}
          onChange={(e) =>
            setForm({ ...form, sku: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-2 rounded w-full"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Stock"
          className="border p-2 rounded w-full"
          value={form.stock}
          onChange={(e) =>
            setForm({ ...form, stock: e.target.value })
          }
        />

        {/* ================= ATTRIBUTE SELECTORS ================= */}
        {attributes.map((attr) => (
          <div key={attr.id} className="space-y-1">
            <label className="text-sm font-medium">
              {attr.name}
            </label>

            <select
              className="border p-2 rounded w-full"
              onFocus={() => loadAttributeValues(attr.id)}
              onChange={(e) =>
                handleAttributeChange(attr.id, e.target.value)
              }
              defaultValue=""
            >
              <option value="">Select {attr.name}</option>

              {(attributeValues[attr.id] || []).map((val) => (
                <option key={val.id} value={val.id}>
                  {val.value}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create Variant
        </button>
      </form>

      {/* ================= VARIANT LIST ================= */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">SKU</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Active</th>
            </tr>
          </thead>
          <tbody>
            {variants.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No variants found
                </td>
              </tr>
            ) : (
              variants.map((v) => (
                <tr key={v.id} className="border-t">
                  <td className="p-3">{v.sku}</td>
                  <td className="p-3">{v.price}</td>
                  <td className="p-3">{v.stock}</td>
                  <td className="p-3">
                    {v.isActive ? "Yes" : "No"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Variants;
