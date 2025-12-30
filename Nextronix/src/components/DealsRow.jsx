const DealsRow = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Deals of the Day
        </span>
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="min-w-[160px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:scale-105 transition"
          >
            <img
              src="https://images.unsplash.com/photo-1491927570842-0261e477d937"
              alt="deal"
              className="h-24 w-full object-cover rounded"
            />
            <p className="text-sm mt-3 text-gray-300">Up to 60% Off</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsRow;
