const Sidebar = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-3">
      <h3 className="text-lg font-bold text-white mb-3">Categories</h3>

      {[
        "Mobiles & Accessories",
        "Laptops & Computers",
        "TV & Entertainment",
        "Large Appliances",
        "Small Home Appliances",
        "Audio Devices",
        "Wearables",
        "Smart Home & IoT",
      ].map((item) => (
        <p
          key={item}
          className="text-gray-400 hover:text-yellow-400 cursor-pointer transition"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default Sidebar;
