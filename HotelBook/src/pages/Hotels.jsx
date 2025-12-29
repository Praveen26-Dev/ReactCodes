import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import HotelCard from "../components/HotelCard";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/hotels")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => console.error("API Error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 min-h-screen bg-gradient-to-br from-[#050d14] via-[#071a23] to-[#0a2633]">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Premium Hotels
        </h1>

        {loading && (
          <p className="text-center text-gray-400">
            Loading hotels...
          </p>
        )}

        {!loading && hotels.length === 0 && (
          <p className="text-center text-gray-400">
            No hotels available
          </p>
        )}

        {!loading && hotels.length > 0 && (
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Hotels;
