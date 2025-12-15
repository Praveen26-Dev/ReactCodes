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
      console.error("Fetch error:", error);
      setLoading(false);
    }
  };

  // ✅ DELETE FUNCTION
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await axios.delete(`http://localhost:3000/hotel/${id}`);
      // remove deleted item from UI instantly
      setHotelData(hotelData.filter(item => item.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    fetchHotelData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-700">
        🏨 Hotel Booking Details
      </h1>

      {loading ? (
        <p className="text-center text-xl text-gray-600">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-indigo-200 bg-white shadow-2xl rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
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
                  "Actions",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-5 py-4 text-left text-sm font-semibold uppercase border-r border-indigo-500 last:border-r-0"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {hotelData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-indigo-50" : "bg-white"
                  } hover:bg-indigo-100`}
                >
                  <td className="px-5 py-3 border">{item.name}</td>
                  <td className="px-5 py-3 border">{item.age}</td>
                  <td className="px-5 py-3 border">{item.phoneNo}</td>
                  <td className="px-5 py-3 border">{item.AdharNo}</td>
                  <td className="px-5 py-3 border">{item.city}</td>
                  <td className="px-5 py-3 border">{item.checkin}</td>
                  <td className="px-5 py-3 border">{item.checkout}</td>
                  <td className="px-5 py-3 border text-center">{item.people}</td>
                  <td className="px-5 py-3 border font-bold text-green-700">
                    ₹{item.total}
                  </td>

                  {/* 🔥 ACTION BUTTONS */}
                  <td className="px-5 py-3 border">
                    <div className="flex gap-3">
                      {/* UPDATE BUTTON (next step) */}
                      <button className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                        Update
                      </button>

                      {/* DELETE BUTTON */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
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
