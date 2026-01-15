import { useState } from "react";

const tables = [
  {
    id: 1,
    name: "T1",
    floor: "Ground",
    seats: 4,
    type: "Dine In",
    status: "blank",
  },
  {
    id: 2,
    name: "T2",
    floor: "Ground",
    seats: 4,
    type: "Dine In",
    status: "running",
    total: 320,
    time: "03:12",
  },
  {
    id: 3,
    name: "T3",
    floor: "Basement",
    seats: 6,
    type: "Dine In",
    status: "printed",
    total: 540,
    time: "08:22",
  },
  {
    id: 4,
    name: "T4",
    floor: "Basement",
    seats: 2,
    type: "Pick Up",
    status: "paid",
    total: 210,
    time: "12:05",
  },
  {
    id: 5,
    name: "T5",
    floor: "Ground",
    seats: 4,
    type: "Dine In",
    status: "blank",
  },
  {
    id: 6,
    name: "T6",
    floor: "Party Hall",
    seats: 10,
    type: "Delivery",
    status: "running",
    total: 180,
    time: "01:40",
  },
];

const colors = {
  blank: "#2a2a2a",
  running: "#229AC8",
  printed: "#facc15",
  paid: "#16a34a",
};

export default function TableView({ onSelectTable }) {
  return (
    <div className="h-screen bg-[#121212] text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Table View</h2>

      <div className="grid grid-cols-6 gap-4">
        {tables.map((t) => (
          <div
            key={t.id}
            onClick={() => onSelectTable(t)}
            className="cursor-pointer rounded-xl p-4 border border-gray-700 flex flex-col justify-between shadow-lg"
            style={{ backgroundColor: colors[t.status] }}
          >
            {/* Top Row */}
            <div className="flex justify-between text-sm opacity-90">
              <span className="font-semibold">{t.name}</span>
              <span>
                {t.floor} • {t.seats}
              </span>
            </div>

            {/* Middle (Bill & Time) */}
            {t.status !== "blank" && (
              <div className="text-center mt-4">
                <div className="text-xl font-bold">₹{t.total}</div>
                <div className="text-xs mt-1">{t.time}</div>
              </div>
            )}

            {/* Bottom (Order Type) */}
            <div className="text-xs mt-4 text-center opacity-90">
              {t.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
