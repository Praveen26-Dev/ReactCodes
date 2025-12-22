import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import '../App.css'
const Navbar = () => {
  const navRef = useRef();
  const logoRef = useRef();
  const menuRef = useRef([]);
  const btnRef = useRef([]);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -70,
      opacity: 0,
      duration: 0.9,
      ease: "power4.out",
    });

    gsap.from(logoRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.7,
      delay: 0.2,
    });

    gsap.from(menuRef.current.filter(Boolean), {
      opacity: 0,
      y: -15,
      stagger: 0.15,
      duration: 0.5,
      delay: 0.4,
    });

    gsap.from(btnRef.current.filter(Boolean), {
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.5,
      delay: 0.6,
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 bg-[#333333] shadow-lg border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          ref={logoRef}
          className="text-2xl font-bold text-white tracking-wider"
        >
          <Link to="/">StayEase</Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
          {["Home", "Hotels", "Deals", "About"].map((item, index) => (
            <li
              key={item}
              ref={(el) => (menuRef.current[index] = el)}
              className="hover:text-amber-400 transition-colors duration-200"
            >
              <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            ref={(el) => (btnRef.current[0] = el)}
            className="px-4 py-2 rounded-md border border-gray-500 text-gray-200 hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
          >
            Login
          </button>

          <button
            ref={(el) => (btnRef.current[1] = el)}
            className="px-4 py-2 rounded-md bg-linear-to-r from-amber-400 to-yellow-500 text-black font-semibold hover:scale-105 transition-transform duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
