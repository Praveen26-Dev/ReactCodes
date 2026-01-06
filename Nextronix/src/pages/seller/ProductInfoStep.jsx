// src/seller/pages/ProductInfoStep.jsx
import { useState } from "react";
import sellerController from "../../controller/sellerController";
import { useSellerProduct } from "../../context/SellerProductContext";

const ProductInfoStep = ({ onNext }) => {
  const { categoryId, brandId, setProductId } = useSellerProduct();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= SLUG GENERATOR ================= */

  const generateSlug = () => {
    if (!name) return;
    const generated = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    setSlug(generated);
  };

  /* ================= CREATE PRODUCT ================= */

  const createProduct = async () => {
    if (!name.trim()) {
      setError("Product name is required");
      return;
    }

    if (!slug.trim()) {
      setError("Product slug is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        name,
        slug,
        description,
        categoryId,
        brandId,
      };

      console.log("Creating product:", payload);

      const product = await sellerController.createProduct(payload);

      console.log("Created product:", product);

      setProductId(product.id);
      onNext();
    } catch (err) {
      setError("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        space-y-6
        p-6
        rounded-xl
        bg-white/5
        backdrop-blur-md
        border border-white/10
        max-w-xl
      "
    >
      {/* Title */}
      <div>
        <h2 className="text-xl font-semibold text-white">
          Product Information
        </h2>
        <p className="text-sm text-gray-400">
          Enter basic details about your product
        </p>
      </div>

      {/* Product Name */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Product Name *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Iphone 15"
          className="
            w-full rounded-md px-4 py-2
            bg-[#1a1414]
            border border-white/10
            text-white
            placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-[#574724]
          "
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Product Slug *
        </label>

        <div className="flex gap-2">
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="iphone-15"
            className="
              flex-1 rounded-md px-4 py-2
              bg-[#1a1414]
              border border-white/10
              text-white
              placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-[#574724]
            "
          />

          <button
            type="button"
            onClick={generateSlug}
            className="
              px-4 py-2
              rounded-md
              bg-[#241b1b]
              text-gray-200
              border border-white/10
              hover:bg-[#2e2424]
              transition
            "
          >
            Generate
          </button>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description of the product"
          rows={4}
          className="
            w-full rounded-md px-4 py-2
            bg-[#1a1414]
            border border-white/10
            text-white
            placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-[#574724]
          "
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      {/* Action */}
      <div className="flex justify-end">
        <button
          onClick={createProduct}
          disabled={loading}
          className="
            px-6 py-2 rounded-md
            bg-[#574724]
            text-white
            font-medium
            hover:bg-[#6a5830]
            transition
            disabled:opacity-50
          "
        >
          {loading ? "Creating..." : "Save & Continue"}
        </button>
      </div>
    </div>
  );
};

export default ProductInfoStep;
