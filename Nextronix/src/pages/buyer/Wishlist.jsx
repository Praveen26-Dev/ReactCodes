import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import buyerController from "../../controller/buyerController";

export default function Wishlist() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= LOAD WISHLIST ================= */

  const loadWishlist = async () => {
    try {
      const data = await buyerController.getWishlist(user.id);
      setItems(data || []);
    } catch (err) {
      console.error("Failed to load wishlist", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    loadWishlist();
  }, [user]);

  /* ================= ACTIONS ================= */

  // ✅ REMOVE FROM WISHLIST (API: /remove?userId=&productId=)
  const removeFromWishlist = async (productId) => {
    try {
      await buyerController.removeFromWishlist(user.id, productId);

      // update UI instantly
      setItems(prev =>
        prev.filter(item => item.productId !== productId)
      );
    } catch (err) {
      console.error("Remove wishlist failed", err);
    }
  };

  // ✅ ADD TO CART (API: /api/cart/add)
  const addToCart = async (item) => {
    try {
      setLoadingId(item.productId);

      await buyerController.addToCart({
        userId: user.id,
        productId: item.productId,
        variantId: item.variantId || null,
        quantity: 1,
      });

      // optional but good UX: remove from wishlist
      await removeFromWishlist(item.productId);

      navigate("/cart");
    } catch (err) {
      console.error("Add to cart failed", err);
    } finally {
      setLoadingId(null);
    }
  };

  /* ================= STATES ================= */

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#120e0e] text-gray-400">
        Loading wishlist...
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="bg-[#120e0e] min-h-screen px-6 py-8 text-white">
      <h1 className="text-2xl font-semibold mb-6">
        ❤️ My Wishlist
      </h1>

      {items.length === 0 && (
        <p className="text-gray-400">
          No items in wishlist
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1414] border border-white/10 rounded-lg p-4"
          >
            <img
              src={item.imageUrl || "/assets/no-image.png"}
              className="h-40 w-full object-contain bg-black rounded"
              alt={item.productName}
            />

            <h3 className="mt-2 text-sm">
              {item.productName}
            </h3>

            <div className="flex flex-col gap-2 mt-4">

              {/* ADD TO CART */}
              <button
                onClick={() => addToCart(item)}
                disabled={loadingId === item.productId}
                className="w-full bg-[#ffd814] text-black text-sm py-2 rounded font-medium hover:bg-yellow-400 disabled:opacity-60"
              >
                {loadingId === item.productId
                  ? "Adding..."
                  : "Add to Cart"}
              </button>

              {/* SECONDARY ACTIONS */}
              <div className="flex justify-between text-sm">
                <button
                  onClick={() => navigate(`/product/${item.productId}`)}
                  className="text-[#ffd814]"
                >
                  View
                </button>

                <button
                  onClick={() => removeFromWishlist(item.productId)}
                  className="text-red-400"
                >
                  Remove
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
