import React from "react";
import { FaWifi, FaSwimmer, FaConciergeBell } from "react-icons/fa";
import '../App.css'
const Features = () => {
  return (
    <section className="py-16 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <div className="p-8 bg-white shadow-xl rounded-2xl">
          <FaWifi size={50} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-2xl font-semibold">Free Wi-Fi</h3>
          <p className="mt-2 text-gray-600">Unlimited high-speed internet access</p>
        </div>

        <div className="p-8 bg-white shadow-xl rounded-2xl">
          <FaSwimmer size={50} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-2xl font-semibold">Swimming Pool</h3>
          <p className="mt-2 text-gray-600">Enjoy our premium outdoor pools</p>
        </div>

        <div className="p-8 bg-white shadow-xl rounded-2xl">
          <FaConciergeBell size={50} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-2xl font-semibold">Room Service</h3>
          <p className="mt-2 text-gray-600">24/7 room service available</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
