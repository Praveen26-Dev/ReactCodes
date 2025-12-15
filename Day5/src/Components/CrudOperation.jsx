import React, { useEffect, useState } from "react";
import axios from "axios";
import './Tailwind.css'
const CrudOperation = () => {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHotelData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/hotel");
      setHotelData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotelData();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-700">
        🏨 Hotel Booking Details
      </h1>

      {loading ? (
        <p className="text-center text-xl text-gray-600">Loading data...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-indigo-200 bg-white shadow-2xl rounded-xl overflow-hidden">
            {/* TABLE HEAD */}
            <thead className="bg-linear-to-r from-indigo-600 to-blue-600 text-white">
              <tr>
                {[
                  "Name",
                  "Age",
                  "Phone",
                  "Aadhar",
                  "City",
                  "Check-In",
                  "Check-Out",
                  "People",
                  "Total ₹",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide border-r border-indigo-500 last:border-r-0"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {hotelData.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-indigo-50" : "bg-white"
                  } hover:bg-indigo-100 transition-all duration-200`}
                >
                  <td className="px-5 py-3 border border-indigo-100 font-medium text-gray-800">
                    {item.name}
                  </td>
                  <td className="px-5 py-3 border border-indigo-100">
                    {item.age}
                  </td>
                  <td className="px-5 py-3 border border-indigo-100">
                    {item.phoneNo}
                  </td>
                  <td className="px-5 py-3 border border-indigo-100">
                    {item.AdharNo}
                  </td>
                  <td className="px-5 py-3 border border-indigo-100">
                    {item.city}
                  </td>
                  <td className="px-5 py-3 border border-indigo-100">
                    {item.checkin}
                  </td>
                  <td className="px-5 py-3 border border-indigo-100">
                    {item.checkout}
                  </td>
                  <td className="px-5 py-3 border border-indigo-100 text-center font-semibold">
                    {item.people}
                  </td>
                  <td className="px-5 py-3 border border-indigo-100 text-green-700 font-bold">
                    ₹{item.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CrudOperation;
