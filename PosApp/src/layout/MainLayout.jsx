import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const titles = {
  "/sell": "Sell",
  "/register": "Register",
  "/register-sessions": "Register Sessions",
  "/bill-history": "Bill History",
  "/customer-display": "Customer Display"
};

export default function MainLayout() {
  const location = useLocation();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar title={titles[location.pathname]} />

        <div style={{ flex: 1, padding: 20, background: "#f1f5f9" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
