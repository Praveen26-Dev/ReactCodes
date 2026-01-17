import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import buyerController from "../../controller/buyerController";

export default function CheckoutPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placing, setPlacing] = useState(false);
  const [orders, setOrders] = useState(null);

  const loadCart = async () => {
    const data = await buyerController.getCart(user.id);
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    loadCart();
  }, [user]);

  const total = items.reduce((sum, item) => {
    return sum + Number(item.price) * Number(item.quantity);
  }, 0);

  const placeOrder = async () => {
    setPlacing(true);
    const data = await buyerController.checkout(user.id);
    setOrders(data);
    setPlacing(false);
  };

  /* ================= ORDER CONFIRMATION ================= */

  if (orders) {
    return (
      <div className="min-h-screen bg-[#120e0e] p-10 text-white">
        <h1 className="text-2xl font-bold text-green-400 mb-6">
          Order Confirmed 🎉
        </h1>

        {orders.map(o => (
          <div key={o.id} className="border border-white/10 p-4 mb-4 rounded">
            <p>Product: {o.productId}</p>
            <p>Variant: {o.variantId}</p>
            <p>Qty: {o.quantity}</p>
            <p>Price: ₹{o.price}</p>
            <p className="text-green-400">{o.orderStatus}</p>
          </div>
        ))}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#120e0e] text-gray-400">
        Loading checkout...
      </div>
    );
  }

  /* ================= CHECKOUT UI ================= */

  return (
    <div className="bg-[#120e0e] min-h-screen px-6 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="col-span-8 space-y-4">
          <h1 className="text-xl text-white font-semibold mb-4">
            Review your order
          </h1>

          {items.map(item => (
            <div
              key={item.id}
              className="flex gap-4 bg-[#1a1414] border border-white/10 rounded-lg p-4"
            >
              <img
                src={item.image || "/assets/no-image.png"}
                className="w-24 h-24 object-contain bg-black rounded"
              />

              <div className="flex-1">
                <h3 className="text-white">{item.productName}</h3>
                <p className="text-gray-400">
                  Qty: {item.quantity}
                </p>
                <p className="text-[#ffd814]">
                  ₹ {item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="col-span-4">
          <div className="bg-[#1a1414] border border-white/10 rounded-lg p-6 space-y-4">
            <h2 className="text-white font-semibold">Payment Summary</h2>

            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>₹ {total}</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Shipping</span>
              <span className="text-green-400">FREE</span>
            </div>

            <hr className="border-white/10" />

            <div className="flex justify-between text-white text-lg font-bold">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>

            <button
              onClick={placeOrder}
              disabled={placing}
              className="w-full bg-[#ffd814] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400"
            >
              {placing ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
