import Navbar from "../components/Navbar";
import '../App.css'
const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-black to-gray-900 text-white">
        <h1 className="text-5xl font-bold text-cyan-400">
          NEXTRONIX
        </h1>
        <p className="mt-4 text-lg">
          Your One-Stop Store for Smart Electronics
        </p>
        <button className="mt-6 bg-cyan-500 px-6 py-2 rounded hover:bg-cyan-600">
          Shop Now
        </button>
      </section>

      {/* CATEGORIES */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Shop by Category
        </h2>
        <ul className="flex justify-center gap-8 text-lg">
          <li>📱 Smartphones</li>
          <li>💻 Laptops</li>
          <li>🎧 Headphones</li>
          <li>⌚ Smart Watches</li>
          <li>📺 Smart TVs</li>
        </ul>
      </section>

      {/* WHY */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Nextronix?
        </h2>
        <ul className="space-y-2">
          <li>✔️ 100% Genuine Products</li>
          <li>✔️ Secure Payments</li>
          <li>✔️ Fast Delivery</li>
          <li>✔️ Warranty & Support</li>
        </ul>
      </section>
    </>
  );
};

export default Home;
