const products = [
  {
    title: "iPhone 15 Pro",
    price: "₹1,29,999",
    img: "https://images.unsplash.com/photo-1709178295038-acbeec786fcf",
  },
  {
    title: "Gaming Laptop",
    price: "₹89,999",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    title: "Smart TV",
    price: "₹45,999",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
  },
  {
    title: "Refrigerator",
    price: "₹32,999",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
];

const ProductGrid = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">
        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Trending Electronics
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

/* PRODUCT CARD */
const ProductCard = ({ title, price, img }) => (
  <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition overflow-hidden">
    <img
      src={img}
      alt={title}
      className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
    />
    <div className="p-5">
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-lg font-bold mt-1 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
        {price}
      </p>

      <button
        className="mt-4 w-full py-2 rounded-xl text-black font-semibold
        bg-gradient-to-r from-yellow-400 to-orange-500
        hover:scale-105 transition"
      >
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductGrid;
