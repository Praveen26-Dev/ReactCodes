import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import buyerController from "../controller/buyerController";

export default function CartPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= LOAD CART ================= */

  const loadCart = async () => {
    if (!user) return;

    try {
      const data = await buyerController.getCart(user.id);
      setItems(data);
    } catch (err) {
      console.error("Failed to load cart", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    loadCart();
  }, [user]);

  /* ================= CART ACTIONS ================= */

  const increase = async (item) => {
  await buyerController.addToCart({
    userId: user.id,
    productId: item.productId,
    variantId: item.variantId,
    quantity: 1
  });
  loadCart();
};

  const decrease = async (id) => {
    await buyerController.decreaseQty(id);
    loadCart();
  };

  const remove = async (id) => {
    await buyerController.removeFromCart(id);
    loadCart();
  };

  /* ================= TOTAL ================= */

  const total = items.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return sum + price * qty;
  }, 0);

  /* ================= STATES ================= */

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#120e0e] text-gray-400">
        Loading cart...
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#120e0e] text-gray-400">
        <p>Your cart is empty 🛒</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-[#ffd814] text-black px-6 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="bg-[#120e0e] min-h-screen px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

        {/* LEFT — CART ITEMS */}
        <div className="col-span-8 space-y-4">
          <h1 className="text-xl text-white font-semibold mb-4">
            Shopping Cart
          </h1>

          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-[#1a1414] border border-white/10 rounded-lg p-4"
            >
              <img
                src={item.image || "/assets/no-image.png"}
                className="w-28 h-28 object-contain bg-black rounded"
              />

              <div className="flex-1">
                <h3 className="text-white font-medium">
                  {item.productName}
                </h3>

                <p className="text-[#d4b46a] text-lg">
                  ₹ {Math.round(item.price).toLocaleString()}
                </p>

                <div className="flex items-center gap-4 mt-2">
                 <button
                    onClick={() => decrease(item.id)}
                    className="px-3 py-1 bg-gray-700 rounded"
                  >
                    −
                 </button>

                     <span className="w-6 text-center">{item.quantity}</span>

                  <button
                    onClick={() => increase(item)}
                    className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center"
                  >
                    +
                  </button>
                  
                  <button
                    onClick={() => remove(item.id)}
                    className="ml-4 text-red-400 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — PRICE SUMMARY */}
        <div className="col-span-4">
          <div className="bg-[#1a1414] border border-white/10 rounded-lg p-6 space-y-4">

            <h2 className="text-lg text-white font-semibold">
              Price Details
            </h2>

            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>₹ {Math.round(total).toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Shipping</span>
              <span className="text-green-400">FREE</span>
            </div>

            <hr className="border-white/10" />

            <div className="flex justify-between text-white text-lg font-semibold">
              <span>Total</span>
              <span>₹ {Math.round(total).toLocaleString()}</span>
            </div>

            <button className="w-full bg-[#ffd814] text-black py-3 rounded-lg font-semibold">
              Proceed to Checkout
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
