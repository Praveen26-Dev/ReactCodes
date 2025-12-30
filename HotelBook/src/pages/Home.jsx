import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Features from "../components/Features";
import { motion } from "framer-motion";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedRooms from "../components/FeaturedRooms";
import GuestReviews from "../components/GuestReviews";
import FinalCTA from "../components/FinalCTA";

import "../App.css";
import { Link,useNavigate } from "react-router-dom";
const Home = () => {
  const navigate =useNavigate()
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="h-screen w-full relative overflow-hidden">

        {/* Sliding Background */}
        <motion.div
          className="absolute inset-0 flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "200%" }}
        >
          {[
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600",
          ].map((img, i) => (
            <div
              key={i}
              className="w-screen h-full flex-shrink-0"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Foreground Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Experience <span className="text-yellow-400">Luxury</span> <br />
              Beyond Stay
            </h1>

            <p className="mt-5 text-gray-200 text-lg md:text-xl">
              Handpicked premium hotels, designed for comfort and elegance
            </p>

            <div className="mt-6 flex justify-center gap-6 text-gray-300 text-sm md:text-base">
              <span>⭐ 4.8 Guest Rating</span>
              <span>🏨 120+ Premium Hotels</span>
              <span>🌍 40+ Cities</span>
            </div>
            <Link to='/rooms'>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/rooms")}
              className="mt-10 bg-yellow-400 text-black
                         px-12 py-4 rounded-xl font-bold
                         shadow-xl hover:shadow-yellow-400/50
                         transition text-base md:text-lg"
            >
              Discover Rooms
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <WhyChooseUs />

      {/* ================= SECTION 3 ================= */}
      <FeaturedRooms />

      {/* ================= SECTION 4 ================= */}
      <GuestReviews />

      {/* ================= SECTION 5 ================= */}
      <FinalCTA />
    </>
  );
};
export default Home;