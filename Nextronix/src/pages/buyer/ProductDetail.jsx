import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import buyerController from "../../controller/buyerController";
import VariantSelector from "../../components/buyer/VariantSelector";

export default function ProductDetail() {
  const { productId } = useParams();

  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isUnavailable, setIsUnavailable] = useState(false);

  const [zoom, setZoom] = useState({
    active: false,
    x: 50,
    y: 50
  });

  useEffect(() => {
    buyerController.getProductPage(productId).then((res) => {
      setData(res);

      const imgs = res.images || [];
      const primary =
        imgs.find((i) => i.isPrimary)?.imageUrl || imgs[0]?.imageUrl;

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
    name,
    description,
    brandName,
    breadcrumb = [],
    images = [],
    attributes = [],
    features = [],
    specifications = [],
    manufacturerInfo,
    variants = []
  } = data;

  return (
    <div className="bg-[#120e0e] text-gray-200 px-6 py-4">

      {/* BREADCRUMB */}
      <div className="text-xs text-gray-400 mb-3">
        {breadcrumb.map((b, i) => (
          <span key={b.id || i}>
            {b.name}
            {i < breadcrumb.length - 1 && " > "}
          </span>
        ))}
      </div>

      {/* ========== TOP SECTION ========== */}
      <div className="grid grid-cols-12 gap-4">

        {/* THUMBNAILS */}
        <div className="col-span-1 space-y-2">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.imageUrl}
              onClick={() => setSelectedImage(img.imageUrl)}
              className={`w-14 h-14 object-cover rounded cursor-pointer border ${
                selectedImage === img.imageUrl
                  ? "border-[#d4b46a]"
                  : "border-white/10"
              }`}
            />
          ))}
        </div>

        {/* MAIN IMAGE WITH AMAZON ZOOM */}
        <div className="col-span-5 relative z-20 h-[600px]">
          <div
            className="w-full h-full bg-[#1a1414] border border-white/10 rounded-lg relative overflow-visible"
            onMouseEnter={() => setZoom(z => ({ ...z, active: true }))}
            onMouseLeave={() => setZoom({ active: false, x: 50, y: 50 })}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              setZoom({ active: true, x, y });
            }}
          >
            {selectedImage && (
              <img
                src={selectedImage}
                alt={name}
                className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-200"
                style={{
                  transform: zoom.active ? "scale(2)" : "scale(1)",
                  transformOrigin: `${zoom.x}% ${zoom.y}%`
                }}
              />
            )}
          </div>
        </div>

        {/* BUY BOX */}
        <div className="col-span-6 relative z-10 pl-6">
          <div className="bg-[#1a1414] border border-white/10 rounded-lg p-4 space-y-4">

            <h1 className="text-xl font-medium text-white">{name}</h1>
            <p className="text-sm text-gray-400">Brand: {brandName}</p>
            <p className="text-sm text-gray-300">{description}</p>

            <VariantSelector
              attributes={attributes}
              variants={variants}
              selectedAttributes={selectedAttributes}
              setSelectedAttributes={setSelectedAttributes}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
              setIsUnavailable={setIsUnavailable}
            />

            {isUnavailable && (
              <p className="text-red-400 text-sm">
                This combination is currently unavailable
              </p>
            )}

            {selectedVariant && (
              <>
                <div className="text-xl text-[#ffd814] font-semibold">
                  ₹ {selectedVariant.price}
                </div>

                <p className="text-sm text-gray-400">
                  SKU: {selectedVariant.sku}
                </p>

                <p
                  className={`text-sm ${
                    selectedVariant.stock > 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {selectedVariant.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>

                <div className="flex gap-3 pt-4">
                  <button
                    disabled={selectedVariant.stock === 0}
                    className={`px-4 py-2 rounded w-full ${
                      selectedVariant.stock > 0
                        ? "bg-[#ffd814] text-black"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Add to Cart
                  </button>

                  <button
                    disabled={selectedVariant.stock === 0}
                    className={`px-4 py-2 rounded w-full ${
                      selectedVariant.stock > 0
                        ? "bg-[#ff9900] text-black"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Buy Now
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ========== DETAILS ========== */}
      <div className="grid grid-cols-12 gap-6 mt-8">

        {/* LEFT */}
        <div className="col-span-8 space-y-6">

          {features.length > 0 && (
            <div className="bg-[#1a1414] border border-white/10 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3">Highlights</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {specifications.length > 0 && (
            <div className="bg-[#1a1414] border border-white/10 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-3">Technical Details</h2>
              <div className="divide-y divide-white/10">
                {specifications.map((s, i) => (
                  <div key={i} className="grid grid-cols-3 py-2 text-sm">
                    <div className="text-gray-400">{s.specKey}</div>
                    <div className="col-span-2 text-gray-200">
                      {s.specValue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT */}
        <div className="col-span-4">
          {manufacturerInfo?.content && (
            <div className="bg-[#1a1414] border border-white/10 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2">
                About {brandName}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                {manufacturerInfo.content}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
