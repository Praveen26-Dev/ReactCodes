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

        {/* HOME LINK */}
        <Link
          to="/"
          className="text-gray-300 hover:text-yellow-400 transition font-medium"
        >
          Home
        </Link>

        {/* SEARCH BAR */}
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
            bg-gradient-to-r from-yellow-400 to-orange-500
            hover:brightness-110 transition"
          >
            🔍
          </button>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-5">

          {/* CART */}
          <Link
            to="/cart"
            className="relative text-xl text-gray-300 hover:text-yellow-400 transition"
          >
            🛒
            <span
              className="absolute -top-2 -right-3 text-xs font-bold px-1.5 py-0.5 rounded-full
              bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
            >
              2
            </span>
          </Link>

          {/* AUTH */}
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded-xl font-semibold text-black
                bg-gradient-to-r from-yellow-400 to-orange-500
                hover:scale-105 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Profile
              </Link>

              <button
                onClick={logout}
                className="px-4 py-2 rounded-xl font-semibold text-white
                bg-gradient-to-r from-red-500 to-rose-600
                hover:brightness-110 transition"
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
