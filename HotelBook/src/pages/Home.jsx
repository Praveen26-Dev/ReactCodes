import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { gsap } from "gsap";
import '../App.css'

const Home = () => {
  const heroTitleRef = useRef(null);
  const heroParaRef = useRef(null);
  const heroBtnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(heroTitleRef.current, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(heroParaRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(heroBtnRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="h-screen w-full relative flex flex-col justify-center items-center text-white px-4 md:px-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG90ZWxzfGVufDB8fDB8fHww')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center max-w-3xl">
          <h1
            ref={heroTitleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            Where Comfort Meets Luxury
          </h1>

          <p
            ref={heroParaRef}
            className="text-lg sm:text-xl md:text-2xl mb-6"
          >
            Premium Hotels and Luxury Rooms Waiting For You
          </p>

          <button
            ref={heroBtnRef}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 duration-300 text-sm sm:text-base md:text-lg"
          >
            Explore Rooms
          </button>
        </div>
      </section>

      <Features />
      <Footer />
    </>
  );
};

export default Home;
