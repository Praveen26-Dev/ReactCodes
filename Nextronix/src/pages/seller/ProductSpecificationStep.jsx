import { useEffect, useState } from "react";
import sellerController from "../../controller/sellerController";
import { useSellerProduct } from "../../context/SellerProductContext";

const ProductSpecificationStep = ({ onNext }) => {
  const { productId } = useSellerProduct();

  const [specs, setSpecs] = useState([
    { specKey: "", specValue: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* ---------- Load existing specs ---------- */

  useEffect(() => {
    if (!productId) return;

    const loadSpecs = async () => {
      try {
        const data =
          await sellerController.getProductSpecifications(productId);

        if (Array.isArray(data) && data.length > 0) {
          setSpecs(
            data.map((s) => ({
              specKey: s.specKey ?? "",
              specValue: s.specValue ?? "",
            }))
          );
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load specifications");
      }
    };

    loadSpecs();
  }, [productId]);

  /* ---------- Handlers ---------- */

  const updateSpec = (index, field, value) => {
    const updated = [...specs];
    updated[index][field] = value;
    setSpecs(updated);
    setSuccess(""); // clear old success
  };

  const addRow = () => {
    setSpecs([...specs, { specKey: "", specValue: "" }]);
  };

  const removeRow = (index) => {
    setSpecs(specs.filter((_, i) => i !== index));
  };

  const saveSpecs = async () => {
    if (!productId) {
      setError("Product ID missing");
      return;
    }

    // 🔑 FILTER EMPTY ROWS
    const cleanedSpecs = specs.filter(
      (s) => s.specKey.trim() && s.specValue.trim()
    );

    if (cleanedSpecs.length === 0) {
      setError("Please add at least one specification");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await sellerController.saveProductSpecifications(
        productId,
        cleanedSpecs
      );

      setSuccess("Specifications saved successfully");

      // small delay so user sees success
      setTimeout(() => {
        onNext();
      }, 500);
    } catch (err) {
      console.error(err);
      setError("Failed to save specifications");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- Render ---------- */

  return (
    <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-950 p-6 max-w-3xl">
      <h2 className="text-lg font-semibold text-white">
        Product Specifications
      </h2>

      {specs.map((spec, index) => (
        <div key={index} className="flex gap-3">
          <input
            type="text"
            placeholder="Specification name"
            value={spec.specKey}
            onChange={(e) =>
              updateSpec(index, "specKey", e.target.value)
            }
            className="flex-1 rounded-md bg-zinc-900 border border-zinc-700 px-3 py-2 text-white"
          />

          <input
            type="text"
            placeholder="Specification value"
            value={spec.specValue}
            onChange={(e) =>
              updateSpec(index, "specValue", e.target.value)
            }
            className="flex-1 rounded-md bg-zinc-900 border border-zinc-700 px-3 py-2 text-white"
          />

          <button
            onClick={() => removeRow(index)}
            className="text-red-400 hover:text-red-300"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={addRow}
        className="text-sm text-indigo-400 hover:text-indigo-300"
      >
        + Add Specification
      </button>

      <div className="flex items-center gap-4">
        <button
          onClick={saveSpecs}
          disabled={loading}
          className="rounded-md bg-indigo-600 px-6 py-2 text-white disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save & Continue"}
        </button>

        {error && (
          <span className="text-sm text-red-500">{error}</span>
        )}
        {success && (
          <span className="text-sm text-green-500">
            {success}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductSpecificationStep;
