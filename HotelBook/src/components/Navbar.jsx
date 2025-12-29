import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // 🔐 Auth state (single source)
  const user = JSON.parse(localStorage.getItem("authUser"));

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/");
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-xl text-white py-4 shadow-xl"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.04 }}
          className="text-xl sm:text-2xl font-extrabold tracking-wide text-yellow-400 drop-shadow-md"
        >
          <Link to="/">HotelEase</Link>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base md:text-lg font-medium">
          {["Home", "About", "Rooms", "Contact"].map((item, i) => (
            <Link key={i} to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              <motion.li
                whileHover={{ scale: 1.1, color: "#facc15" }}
                className="cursor-pointer relative group transition"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </motion.li>
            </Link>
          ))}
        </ul>

        {/* Desktop Buttons (AUTH AWARE) */}
        <div className="hidden md:flex gap-3 items-center">
          {user ? (
            <>
              <span className="font-medium">Hi, {user.name}</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
                >
                  Login
                </motion.button>
              </Link>

              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
                >
                  Sign Up
                </motion.button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <motion.svg
              whileTap={{ scale: 0.8 }}
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <motion.path
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <motion.path
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl w-full text-center py-5"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium">
              {["Home", "About", "Rooms", "Contact"].map((item, i) => (
                <Link
                  key={i}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.li
                    whileHover={{ scale: 1.1, color: "#facc15" }}
                    className="transition"
                  >
                    {item}
                  </motion.li>
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 mt-3">
                {user ? (
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
                  >
                    Logout
                  </motion.button>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        className="px-4 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
                      >
                        Login
                      </motion.button>
                    </Link>

                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
                      >
                        Sign Up
                      </motion.button>
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
