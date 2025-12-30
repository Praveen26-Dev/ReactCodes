const categories = [
  "All",
  "Mobiles",
  "Laptops",
  "TV & Appliances",
  "Audio",
  "Wearables",
  "Smart Home",
  "Gaming",
];

const CategoryBar = () => {
  return (
    <div className="bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 text-sm overflow-x-auto">
        {categories.map((item) => (
          <span
            key={item}
            className="text-gray-300 hover:text-yellow-400 cursor-pointer transition whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
