import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
      <Link to="/">Home</Link>{" | "}
      <Link to="/hotels">Hotels</Link>{" | "}
      <Link to="/login">Login</Link>{" | "}
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
