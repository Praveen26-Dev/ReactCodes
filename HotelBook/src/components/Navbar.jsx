import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md text-white py-4 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold">HotelEase</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base md:text-lg font-medium">
          <Link to="/"><li className="hover:text-yellow-400 transition">Home</li></Link>
          <li className="hover:text-yellow-400 transition">About</li>
          <li className="hover:text-yellow-400 transition">Rooms</li>
          <li className="hover:text-yellow-400 transition">Contact</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <Link to="/login">
            <button className="px-3 sm:px-4 py-1 sm:py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition text-sm sm:text-base">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-3 sm:px-4 py-1 sm:py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition text-sm sm:text-base">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md w-full text-center py-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <Link to="/"><li className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Home</li></Link>
            <li className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>About</li>
            <li className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Rooms</li>
            <li className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Contact</li>
            <div className="flex flex-col gap-3 mt-3">
              <Link to="/login">
                <button className="px-4 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition">
                  Sign Up
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
