import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ================= HERO / BANNER ================= */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nextronix Electronics
          </h1>
          <p className="text-gray-300 max-w-xl mb-6">
            Buy latest mobiles, laptops, headphones & smart gadgets at best prices.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard
            title="Mobiles"
            img="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          />
          <CategoryCard
            title="Laptops"
            img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          />
          <CategoryCard
            title="Headphones"
            img="https://images.unsplash.com/photo-1491927570842-0261e477d937?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lfGVufDB8fDB8fHww"
          />
          <CategoryCard
            title="Smart Watches"
            img="https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Trending Electronics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard
            title="iPhone 15 Pro"
            price="₹1,29,999"
            img="https://images.unsplash.com/photo-1709178295038-acbeec786fcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D"
          />
          <ProductCard
            title="Gaming Laptop"
            price="₹89,999"
            img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          />
          <ProductCard
            title="Wireless Headphones"
            price="₹3,999"
            img="https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ProductCard
            title="Smart Watch"
            price="₹7,999"
            img="https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </section>
    </div>
  );
};

/* ================= CATEGORY CARD ================= */
const CategoryCard = ({ title, img }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
    <img
      src={img}
      alt={title}
      className="h-40 w-full object-cover hover:scale-105 transition duration-300"
    />
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">Shop {title}</p>
    </div>
  </div>
);

/* ================= PRODUCT CARD ================= */
const ProductCard = ({ title, price, img }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
    <img
      src={img}
      alt={title}
      className="h-48 w-full object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-green-600 font-bold">{price}</p>
      <button className="mt-3 w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition">
        Add to Cart
      </button>
    </div>
  </div>
);

export default Home;
