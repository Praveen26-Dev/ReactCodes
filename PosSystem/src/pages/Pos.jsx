export default function POS({ table, cart, addItem, updateQty, onBack }) {

  const items = [
    { name: "Veg Burger", price: 120 },
    { name: "Cheese Burger", price: 150 },
    { name: "Momos", price: 100 },
    { name: "Spring Roll", price: 90 },
    { name: "Pasta", price: 140 },
    { name: "Noodles", price: 130 },
    { name: "Cold Coffee", price: 80 },
    { name: "Lassi", price: 70 },
  ];

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="h-screen flex flex-col bg-[#121212] text-white">

      {/* TOP BAR */}
      <div
        className="px-4 py-2 flex items-center justify-between border-b border-gray-700"
        style={{ background: "linear-gradient(90deg, #0f2d30, #229AC8, #4ade80)" }}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="px-3 py-1 bg-black/40 border border-white/20 rounded"
          >
            ← Tables
          </button>

          <div>
            <div className="text-lg font-bold">Table {table.name}</div>
            <div className="text-xs opacity-80">
              {table.floor} • {table.seats} Seats • {table.type}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-xs opacity-80">Running Time</div>
          <div className="text-lg font-bold">{table.time || "00:00"}</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs opacity-80">Bill</div>
            <div className="text-lg font-bold">₹{total}</div>
          </div>

          <span className="px-3 py-1 bg-black/40 border border-white/20 rounded text-xs">
            {table.status?.toUpperCase()}
          </span>

          <button className="px-3 py-1 bg-black/40 border border-white/20 rounded">
            KOT
          </button>
          <button className="px-3 py-1 bg-black/40 border border-white/20 rounded">
            Hold
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT */}
        <div className="w-2/3 bg-[#181818] border-r border-gray-700 flex">
          <div className="w-48 border-r border-gray-700 p-2 space-y-2">
            {["Fast Food", "Burgers", "Drinks", "Chinese", "Dessert"].map(c => (
              <div
                key={c}
                className="p-3 bg-[#222] rounded cursor-pointer hover:bg-[#229AC8]"
              >
                {c}
              </div>
            ))}
          </div>

          <div className="flex-1 p-3 grid grid-cols-5 gap-2 overflow-y-auto">
            {items.map(item => (
              <div
                key={item.name}
                onClick={() => addItem(table.id, item)}
                className="border border-gray-700 rounded p-2 text-sm text-center cursor-pointer bg-[#1f1f1f] hover:bg-[#229AC8]"
              >
                {item.name}
                <div className="text-xs text-gray-400">₹{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BILL */}
        <div className="w-1/3 bg-[#141414] p-4 flex flex-col border-l border-gray-700">

          <h2 className="font-bold text-lg mb-2">Current Order</h2>

          <div className="flex-1 space-y-2 overflow-y-auto">
            {cart.map(item => (
              <div
                key={item.name}
                className="flex justify-between items-center bg-[#1f1f1f] p-2 rounded"
              >
                <span>{item.name}</span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(table.id, item.name, -1)}
                    className="px-2 bg-gray-700 rounded"
                  >
                    −
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => updateQty(table.id, item.name, 1)}
                    className="px-2 bg-gray-700 rounded"
                  >
                    +
                  </button>
                </div>

                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-3 pt-3 space-y-2">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full bg-[#16a34a] text-white py-3 rounded hover:bg-[#22c55e]">
              Pay & Print
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
