import { useEffect, useRef, useState } from "react";
import { getHotelsController } from "../controller/hotelController";
import HotelCard from "../components/HotelCard";
import SkeletonCard from "../components/SkeletonCard";
import { revealOnScroll } from "../animations/scrollAnimations";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    country: "",
    minPrice: "",
    rating: "",
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    getHotelsController(setHotels, setLoading, filters);
  }, [filters]);

  useEffect(() => {
    if (!loading && hotels.length) {
      revealOnScroll(sectionRef.current);
    }
  }, [loading, hotels]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto p-10">
      <h2 className="text-4xl font-bold mb-2">
        Discover Luxury Hotels
      </h2>
      <p className="text-gray-500 mb-8">
        Curated stays for unforgettable experiences
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10 bg-white p-4 rounded-xl shadow">
        <input
          name="country"
          placeholder="Country"
          onChange={handleChange}
          className="border px-4 py-2 rounded-lg"
        />
        <input
          name="minPrice"
          type="number"
          placeholder="Min Price"
          onChange={handleChange}
          className="border px-4 py-2 rounded-lg"
        />
        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Min Rating"
          onChange={handleChange}
          className="border px-4 py-2 rounded-lg"
        />
      </div>

      {/* Listing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
      </div>
    </div>
  );
};

export default Hotels;
