import { NavLink } from "react-router-dom";

const menu = [
  { label: "Sell", path: "/sell" },
  { label: "Register", path: "/register" },
  { label: "Register Sessions", path: "/register-sessions" },
  { label: "Bill History", path: "/bill-history" },
  { label: "Customer Display", path: "/customer-display" }
];

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>POS</h2>

      {menu.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            ...styles.link,
            background: isActive ? "#1e40af" : "transparent"
          })}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: 240,
    background: "#0f172a",
    color: "#fff",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  logo: {
    marginBottom: 30
  },
  link: {
    padding: "12px 16px",
    borderRadius: 8,
    color: "#fff",
    textDecoration: "none",
    fontSize: 16
  }
};
