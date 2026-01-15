import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import buyerController from "../../controller/buyerController";
import VariantSelector from "../../components/buyer/VariantSelector";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
 
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isUnavailable, setIsUnavailable] = useState(false);

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
    variants = [],
    pricing = {},
  } = data;

  const selectedPricing =
    selectedVariant && pricing[selectedVariant.id];

    const percentOff =
  selectedPricing
    ? Math.round((selectedPricing.discount / selectedPricing.mrp) * 100)
    : 0;


const handleAddToCart = async () => {
  if (!user) {
    navigate("/login");
    return;
  }

  if (!selectedVariant) {
    alert("Please select a variant");
    return;
  }

  try {
    await buyerController.addToCart({
      userId: user.id,
      productId: data.productId,
      variantId: selectedVariant.id,
      quantity: 1
    });

    alert("Added to cart 🛒");
  } catch (err) {
    console.error(err);
    alert("Failed to add to cart");
  }
};


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

        {/* MAIN IMAGE */}
        <div className="col-span-4 bg-[#1a1414] border border-white/10 rounded-lg flex items-center justify-center">
          <img
            src={selectedImage}
            alt={name}
            className="h-[600px] object-contain"
          />
        </div>

        {/* BUY BOX */}
        <div className="col-span-6 pl-6">
          <div className="bg-[#1a1414] border border-white/10 rounded-lg p-4 space-y-4">

            <h1 className="text-xl text-white">{name}</h1>
            <p className="text-sm text-gray-400">Brand: {brandName}</p>
            <p className="text-sm text-gray-300">{description}</p>

            <VariantSelector
              attributes={attributes}
              variants={variants}
              selectedAttributes={selectedAttributes}
              setSelectedAttributes={setSelectedAttributes}
              setSelectedVariant={setSelectedVariant}
              setIsUnavailable={setIsUnavailable}
            />

            {isUnavailable && (
              <p className="text-red-400 text-sm">
                This combination is currently unavailable
              </p>
            )}

            {selectedVariant && selectedPricing && (
              <>
                {/* Final Price */}
                {/* MRP + Discount */}
               <div className="flex items-center gap-3">
                  <div className="text-2xl font-semibold text-[#ffd814]">
                    ₹ {Math.round(selectedPricing.finalPrice).toLocaleString()}
                  </div>

                  {percentOff > 0 && (
                    <div className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                      {percentOff}% OFF
                    </div>
                  )}
                </div>

                <div className="text-sm text-gray-400 flex gap-2">
                  <span className="line-through">
                    ₹ {Math.round(selectedPricing.mrp).toLocaleString()}
                  </span>
                  <span className="text-green-400">
                    You save ₹ {Math.round(selectedPricing.discount).toLocaleString()}
                  </span>
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
                    onClick={handleAddToCart}
                    className={`px-4 py-2 rounded w-full ${
                      selectedVariant.stock > 0
                        ? "bg-[#ffd814] text-black"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                  Add to Cart
                </button>


                  <button
                    disabled={selectedVariant.stock === 0}
                    className={`px-4 py-2 rounded w-full ${
                      selectedVariant.stock > 0
                        ? "bg-[#ff9900] text-black"
                        : "bg-gray-700 text-gray-400"
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

      {/* ========== DETAILS SECTION ========== */}
      <div className="grid grid-cols-12 gap-6 mt-8">

        {/* LEFT */}
        <div className="col-span-8 space-y-6">

          {/* FEATURES */}
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

          {/* SPECIFICATIONS */}
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
