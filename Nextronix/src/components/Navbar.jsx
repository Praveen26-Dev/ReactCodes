import { Link } from "react-router-dom";
import '../App.css'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h2 className="text-2xl font-bold text-cyan-400">
        NEXTRONIX
      </h2>

      <ul className="flex gap-6">
        <li>
          <Link className="hover:text-cyan-400" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-cyan-400" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link
            className="bg-cyan-500 px-4 py-1 rounded hover:bg-cyan-600"
            to="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
