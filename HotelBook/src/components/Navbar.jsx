import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-5 bg-[#0F172A] text-white">
      <h1 className="text-3xl font-bold tracking-wide">Luxora Hotels</h1>

      <ul className="flex gap-10 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-yellow-400">Home</Link>
        </li>
        <li>
          <Link to="/signup" className="hover:text-yellow-400">Sign Up</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
        </li>
      </ul>

      <button className="bg-yellow-400 px-5 py-2 rounded-md font-semibold text-black hover:bg-yellow-500">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;
