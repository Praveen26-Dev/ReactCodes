// src/seller/pages/CategoryStep.jsx
import { useState } from "react";
import sellerController from "../../controller/sellerController";
import { useSellerProduct } from "../../context/SellerProductContext";

const CategoryStep = ({ onNext }) => {
  const { setCategoryId } = useSellerProduct(); // ✅ GLOBAL CONTEXT

  const [inputId, setInputId] = useState("");
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= FETCH BREADCRUMB ================= */

  const fetchBreadcrumb = async () => {
    if (!inputId) return;

    try {
      setLoading(true);
      setError("");

      const data = await sellerController.getCategoryBreadcrumb(inputId);

      if (!data || data.length === 0) {
        setError("Invalid category ID");
        setBreadcrumb([]);
        return;
      }

      setBreadcrumb(data);
    } catch (err) {
      setError("Category not found");
      setBreadcrumb([]);
    } finally {
      setLoading(false);
    }
  };

  /* ================= SELECT CATEGORY ================= */

  const selectCategory = (category) => {
    setCategoryId(category.id); // ✅ saved globally
    onNext(); // jump to BrandStep
  };

  return (
    <div className="space-y-6 max-w-xl text-white">
      {/* Title */}
      <div className="text-white">
        <h2 className="text-xl font-semibold text-white-800">
          Enter Category ID
        </h2>
        <p className="text-sm text-white-500">
          Paste the category ID to confirm product category
        </p>
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <input
          type="number"
          placeholder="e.g. 12"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          onClick={fetchBreadcrumb}
          disabled={loading}
          className="px-4 py-2 bg-black text-white rounded-md disabled:opacity-50"
        >
          {loading ? "Loading..." : "Fetch"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {/* Breadcrumb as buttons */}
      {breadcrumb.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Select correct category:
          </p>

          <div className="flex flex-wrap gap-2">
            {breadcrumb.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat)}
                className={`
                  px-3 py-1.5 rounded-md text-sm border transition
                  ${
                    index === breadcrumb.length - 1
                      ? "bg-black text-white"
                      : "bg-black-100 hover:bg-blue-900"
                  }
                `}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryStep;
