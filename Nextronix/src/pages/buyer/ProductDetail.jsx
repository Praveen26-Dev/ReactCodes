import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import buyerController from "../../controller/buyerController";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    buyerController.getProductPage(productId).then((res) => {
      setData(res);

      // set default main image
      const primary =
        res.images.find((i) => i.isPrimary)?.imageUrl ||
        res.images[0]?.imageUrl;

      setSelectedImage(primary);
    });
  }, [productId]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#120e0e] text-gray-400">
        Loading product...
      </div>
    );
  }

  const {
    product,
    images,
    attributes,
    features,
    specifications,
    breadcrumb,
    pricing
  } = data;

  // pick one pricing object (backend-driven)
  const selectedPricing = pricing
    ? Object.values(pricing)[0]
    : null;

  return (
    <div className="bg-[#120e0e] text-gray-200 px-6 py-4">

      {/* BREADCRUMB */}
      <div className="text-xs text-gray-400 mb-3">
        {breadcrumb.map((b, i) => (
          <span key={`${b.id}-${i}`}>
            {b.name}
            {i < breadcrumb.length - 1 && " > "}
          </span>
        ))}
      </div>

      {/* TOP GRID */}
      <div className="grid grid-cols-12 gap-4 mb-6">

        {/* THUMBNAILS */}
        <div className="col-span-1 space-y-2">
          {images.map((img, index) => {
            const isActive = selectedImage === img.imageUrl;

            return (
              <img
                key={img.id ?? `${img.imageUrl}-${index}`}
                src={img.imageUrl}
                alt=""
                onClick={() => setSelectedImage(img.imageUrl)}
                className={`w-14 h-14 object-cover rounded cursor-pointer border
                  ${
                    isActive
                      ? "border-[#d4b46a]"
                      : "border-white/10 hover:border-[#574724]"
                  }`}
              />
            );
          })}
        </div>

        {/* MAIN IMAGE */}
        <div className="col-span-5 bg-[#1a1414] border border-white/10 rounded-lg
                        flex items-center justify-center">
          <img
            src={selectedImage}
            alt={product.name}
            className="max-h-[380px] object-contain transition-opacity duration-200"
          />
        </div>

        {/* BUY BOX */}
        <div className="col-span-6">
          <div className="sticky top-4 bg-[#1a1414] border border-white/10 rounded-lg p-4 space-y-3">

            <h1 className="text-xl font-medium leading-snug text-white">
              {product.name}
            </h1>

            <div className="text-sm text-yellow-400">
              ⭐⭐⭐⭐☆ <span className="text-gray-400">(124 ratings)</span>
            </div>

            {/* PRICE (BACKEND-DRIVEN) */}
            {selectedPricing && (
              <div className="space-y-1">

                {selectedPricing.discountType === "PERCENT" &&
                  selectedPricing.discountValue > 0 && (
                    <span className="text-sm font-medium text-red-500">
                      -{selectedPricing.discountValue}%
                    </span>
                  )}

                <div className="text-3xl font-semibold text-[#d4b46a] tracking-tight">
                  ₹{selectedPricing.sellingPrice}
                </div>

                {selectedPricing.mrp > selectedPricing.sellingPrice && (
                  <div className="text-sm text-gray-400">
                    M.R.P.:{" "}
                    <span className="line-through">
                      ₹{selectedPricing.mrp}
                    </span>
                  </div>
                )}

                {selectedPricing.discount > 0 && (
                  <div className="text-sm text-green-400">
                    Extra ₹{selectedPricing.discount} off with offers
                  </div>
                )}

                <div className="text-xs text-gray-500">
                  Final price at checkout: ₹{selectedPricing.finalPrice}
                </div>
              </div>
            )}

            <div className="text-xs text-gray-400">
              Inclusive of all taxes
            </div>

            {/* ATTRIBUTES */}
            {Object.values(attributes).map((attr) => (
              <div key={attr.id}>
                <p className="text-xs text-gray-400 mb-1">
                  {attr.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {attr.values.map((v) => (
                    <button
                      key={`${attr.id}-${v.id}`}
                      className="px-3 py-1 text-xs border border-white/20 rounded
                                 hover:border-[#574724] hover:bg-[#241b1b]"
                    >
                      {v.value}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* ACTIONS */}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 py-2 bg-[#574724] text-white rounded
                                 hover:bg-[#6a5830]">
                Add to Cart
              </button>
              <button className="flex-1 py-2 border border-[#574724]
                                 text-[#d4b46a] rounded hover:bg-[#241b1b]">
                Buy Now
              </button>
            </div>

            <div className="text-xs text-green-400">
              In stock
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT THIS ITEM */}
      <section className="mb-6">
        <h2 className="text-base font-semibold text-white mb-2">
          About this item
        </h2>
        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
          {features.map((f, index) => (
            <li key={`${f.feature}-${index}`}>
              {f.feature}
            </li>
          ))}
        </ul>
      </section>

      {/* TECHNICAL DETAILS */}
      <section className="mb-6">
        <h2 className="text-base font-semibold text-white mb-2">
          Technical Details
        </h2>
        <div className="border border-white/10 rounded overflow-hidden text-sm">
          {specifications.map((spec) => (
            <div
              key={`${spec.specKey}-${spec.id}`}
              className="grid grid-cols-2 px-3 py-2 border-b border-white/10"
            >
              <span className="text-gray-400">{spec.specKey}</span>
              <span>{spec.specValue}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProductDetailPage;
