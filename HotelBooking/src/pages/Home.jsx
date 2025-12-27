import { useEffect, useRef } from "react";
import { heroIntroAnimation } from "../animations/heroAnimations";

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    heroIntroAnimation(heroRef.current);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501117716987-c8e3f6a3d180')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="hero-text text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {"Find Your Perfect Stay".split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-3">
              {word}
            </span>
          ))}
        </h1>

        <p className="text-lg text-gray-200 mb-10">
          Handpicked luxury hotels & resorts worldwide
        </p>

        <div className="hero-search bg-white text-black p-5 rounded-2xl shadow-xl">
          Search hotels by city, country & dates
        </div>
      </div>
    </section>
  );
};

export default Home;
