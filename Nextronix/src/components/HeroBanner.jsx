import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-blue-900/40 blur-3xl"></div>

      <div className="relative px-8 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Next Gen
          </span>{" "}
          Electronics
        </h1>

        <p className="text-gray-300 max-w-xl mt-5 text-lg">
          Discover premium mobiles, laptops, TVs & home appliances.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-8 px-8 py-3 rounded-xl font-semibold text-black
          bg-gradient-to-r from-yellow-400 to-orange-500
          hover:scale-105 transition shadow-lg"
        >
          Shop Now →
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
