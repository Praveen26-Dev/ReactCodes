import { useEffect, useState } from "react";
import sellerController from "../../controller/sellerController";
import { useSellerProduct } from "../../context/SellerProductContext";

const ProductManufacturerInfoStep = ({ onNext }) => {
  const { productId } = useSellerProduct();

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* ---------- Load existing info ---------- */

  useEffect(() => {
    if (!productId) return;

    const loadInfo = async () => {
      try {
        const data =
          await sellerController.getProductManufacturerInfo(productId);

        if (data?.content) {
          setContent(data.content);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load manufacturer info");
      }
    };

    loadInfo();
  }, [productId]);

  /* ---------- Save ---------- */

  const saveInfo = async () => {
    if (!productId) {
      setError("Product ID missing");
      return;
    }

    if (!content.trim()) {
      setError("Manufacturer info cannot be empty");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // ✅ SEND DTO OBJECT (MATCHES BACKEND)
      await sellerController.saveProductManufacturerInfo(
        productId,
        { content }
      );

      setSuccess("Manufacturer info saved successfully");

      setTimeout(() => {
        onNext();
      }, 500);
    } catch (err) {
      console.error(err);
      setError("Failed to save manufacturer info");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- Render ---------- */

  return (
    <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-950 p-6 max-w-3xl">
      <h2 className="text-lg font-semibold text-white">
        From the Manufacturer
      </h2>

      <textarea
        rows={8}
        placeholder="Write manufacturer description, materials, quality details..."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          setSuccess("");
        }}
        className="w-full rounded-md bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
      />

      <div className="flex items-center gap-4">
        <button
          onClick={saveInfo}
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

export default ProductManufacturerInfoStep;
