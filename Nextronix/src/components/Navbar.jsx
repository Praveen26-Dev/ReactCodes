import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // 🔥 live aut

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500
          bg-clip-text text-transparent"
        >
          Nextronix
        </Link>

        <Link
          to="/"
          className="text-gray-300 hover:text-yellow-400 transition font-medium"
        >
          Home
        </Link>

        {/* SEARCH */}
        <div className="flex-1 hidden md:flex max-w-xl">
          <input
            type="text"
            placeholder="Search electronics..."
            className="w-full px-4 py-2 rounded-l-xl bg-black/60 text-white
            placeholder-gray-400 border border-white/10
            focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            className="px-4 rounded-r-xl font-semibold text-black
            bg-gradient-to-r from-yellow-400 to-orange-500"
          >
            🔍
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* CART */}
          <Link to="/cart" className="relative text-xl text-gray-300 hover:text-yellow-400">
            🛒


          </Link>

          {/* AUTH */}
          {!user ? (
            <>
              <Link to="/login" className="text-gray-300 hover:text-yellow-400">
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded-xl font-semibold text-black
                bg-gradient-to-r from-yellow-400 to-orange-500"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-yellow-400 font-semibold">
                Hello, {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl font-semibold text-white
                bg-gradient-to-r from-red-500 to-rose-600"
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
