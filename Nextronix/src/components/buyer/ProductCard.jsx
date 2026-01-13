import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // stop navigation
    console.log("Add to cart:", product.productId);
    // later → call cart API here
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.productId}`)}
      className="bg-[#1a1414] border border-white/10 rounded-xl
                 overflow-hidden cursor-pointer
                 hover:border-[#574724] hover:shadow-xl
                 transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="h-48 bg-[#241b1b] overflow-hidden">
        <img
          src={product.image || "/assets/no-image.png"}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* INFO */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-200 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-gray-400">
          {product.brand}
        </p>

        <p className="text-lg font-semibold text-[#d4b46a]">
          ₹{product.price}
        </p>

        {/* ADD TO CART */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#ffd814] text-black text-sm py-2 rounded
                     hover:bg-[#f7ca00] transition"
        >
          Add to Cart
        </button>

        {product.rating && (
          <p className="text-xs text-yellow-400 text-center">
            ⭐ {product.rating}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
