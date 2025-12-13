import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { motion } from "framer-motion";
import "../App.css";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="h-screen w-full relative flex flex-col justify-center items-center text-white px-4 md:px-8 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
          >
            Where Comfort Meets Luxury
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-200"
          >
            Premium Hotels and Luxury Rooms Waiting For You
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-linear-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-yellow-400/40 duration-300 text-sm sm:text-base md:text-lg"
          >
            Explore Rooms
          </motion.button>
        </div>
      </section>

      <Features />
      <Footer />
    </>
  );
};

export default Home;
