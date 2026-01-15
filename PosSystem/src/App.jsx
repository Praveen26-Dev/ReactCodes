import { useState } from "react";
import POS from "./pages/Pos";
import TableView from "./pages/TableView";
import './App.css'
export default function App() {
  const [selectedTable, setSelectedTable] = useState(null);

  // Each table has its own cart
  const [orders, setOrders] = useState({});

  const addItem = (tableId, item) => {
    setOrders((prev) => {
      const tableCart = prev[tableId] || [];
      const existing = tableCart.find((i) => i.name === item.name);

      let updatedCart;
      if (existing) {
        updatedCart = tableCart.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        updatedCart = [...tableCart, { ...item, qty: 1 }];
      }

      return { ...prev, [tableId]: updatedCart };
    });
  };

  const updateQty = (tableId, name, delta) => {
    setOrders((prev) => {
      const cart = prev[tableId] || [];
      const updated = cart
        .map((i) =>
          i.name === name ? { ...i, qty: i.qty + delta } : i
        )
        .filter((i) => i.qty > 0);

      return { ...prev, [tableId]: updated };
    });
  };

  if (!selectedTable) {
    return (
      <TableView
        onSelectTable={(t) => setSelectedTable(t)}
        orders={orders}
      />
    );
  }

  return (
    <POS
      table={selectedTable}
      cart={orders[selectedTable.id] || []}
      addItem={addItem}
      updateQty={updateQty}
      onBack={() => setSelectedTable(null)}
    />
  );
}
