import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          Nextronix
        </Link>

        {/* SEARCH BAR */}
        <div className="flex-1 hidden md:flex">
          <input
            type="text"
            placeholder="Search electronics..."
            className="bg-white w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
          />
          <button className="bg-yellow-400 px-4 rounded-r-md hover:bg-yellow-500">
            🔍
          </button>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-6">

          {/* CART */}
          <Link
            to="/cart"
            className="relative hover:text-yellow-400 transition"
          >
            🛒
            <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full px-1.5">
              2
            </span>
          </Link>

          {/* AUTH */}
          {!token ? (
            <>
              <Link
                to="/login"
                className="hover:text-yellow-400 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="hover:text-yellow-400 transition"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
