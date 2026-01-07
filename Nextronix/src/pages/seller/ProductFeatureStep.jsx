// src/seller/pages/ProductFeatureStep.jsx
import { useEffect, useState } from "react";
import sellerController from "../../controller/sellerController";
import { useSellerProduct } from "../../context/SellerProductContext";

export default function ProductFeatureStep({ onNext }) {
  const { productId } = useSellerProduct();

  const [features, setFeatures] = useState([""]);
  const [loading, setLoading] = useState(false);

  /* ================= LOAD EXISTING FEATURES ================= */

  useEffect(() => {
    if (!productId) return;

    sellerController
      .getFeatures(productId)
      .then((data) => {
        // backend returns List<ProductFeature>
        if (Array.isArray(data) && data.length > 0) {
          setFeatures(data.map((f) => f.feature));
        }
      })
      .catch(() => {});
  }, [productId]);

  /* ================= HANDLERS ================= */

  const handleChange = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const addFeature = () => {
    setFeatures((prev) => [...prev, ""]);
  };

  const removeFeature = (index) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  /* ================= SAVE FEATURES ================= */

  const handleSave = async () => {
    const cleaned = features
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    if (cleaned.length === 0) {
      alert("Add at least one feature");
      return;
    }

    try {
      setLoading(true);

      // 🔥 IMPORTANT: send List<String>, NOT object
      await sellerController.saveFeatures(productId, cleaned);

      onNext();
    } catch (err) {
      console.error(err);
      alert("Failed to save features");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-6">

      <h2 className="text-xl font-semibold text-white">
        Product Features
      </h2>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-2">
            <input
              value={feature}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
              placeholder={`Feature ${index + 1}`}
              className="flex-1 px-3 py-2 rounded bg-[#1a1414] text-white border border-white/10"
            />

            {features.length > 1 && (
              <button
                onClick={() => removeFeature(index)}
                className="px-3 py-2 bg-red-600/20 text-red-400 rounded hover:bg-red-600/30"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={addFeature}
        className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20"
      >
        + Add Feature
      </button>

      <div className="flex justify-end pt-4">
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-6 py-2 bg-[#574724] text-white rounded hover:bg-[#6a5830] disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save & Continue"}
        </button>
      </div>
    </div>
  );
}
