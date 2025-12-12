import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0F172A] text-white text-center py-8 mt-16 relative overflow-hidden"
    >
      {/* Gold Top Border */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

      {/* Main Text */}
      <p className="text-gray-200 text-base sm:text-lg font-medium tracking-wide">
        © 2025 <span className="text-yellow-400 font-semibold">HotelEase</span>. All rights reserved.
      </p>

      {/* Made By Section */}
      <motion.p
        whileHover={{ scale: 1.1, color: "#facc15" }}
        transition={{ duration: 0.3 }}
        className="opacity-70 mt-2 text-sm sm:text-base tracking-wide cursor-pointer"
      >
        Made with ❤️ by <span className="font-semibold">Praveen Pandey</span>
      </motion.p>

      {/* Shine Effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "120%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
        className="absolute top-0 left-0 w-[120px] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </motion.footer>
  );
};

export default Footer;
