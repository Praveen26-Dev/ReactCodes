import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { gsap } from "gsap";
import '../App.css'
const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power4.out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <section
  className="h-screen w-full relative flex flex-col justify-center items-center text-white"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG90ZWxzfGVufDB8fDB8fHww')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 text-center">
    <h1 className="text-6xl font-bold mb-4">Where Comfort Meets Luxury</h1>
    <p className="text-xl mb-6">Premium Hotels and Luxury Rooms Waiting For You</p>
    <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 duration-300">
      Explore Rooms
    </button>
  </div>
</section>

      {/* FEATURES SECTION */}
      <Features />

      <Footer />
    </>
  );
};

export default Home;
