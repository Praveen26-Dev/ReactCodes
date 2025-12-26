import React from "react";

const Cart = () => {
  // dummy cart data (backend se baad me aayega)
  const cartItems = [
    { id: 1, name: "Laptop", price: 60000, qty: 1 },
    { id: 2, name: "Headphones", price: 2000, qty: 2 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-3"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Qty: {item.qty}
                </p>
              </div>

              <p>₹ {item.price * item.qty}</p>
            </div>
          ))}

          <div className="flex justify-between mt-4 font-bold">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>

          <button className="w-full mt-4 bg-black text-white py-2 rounded">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
