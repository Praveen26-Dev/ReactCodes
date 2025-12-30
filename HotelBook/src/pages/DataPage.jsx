import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const DataPage = () => {
  const navigate = useNavigate();

  const [hotels, setHotels] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3000/hotels"),
      axios.get("http://localhost:3000/bookings"),
    ])
      .then(([hotelsRes, bookingsRes]) => {
        setHotels(hotelsRes.data);
        setBookings(bookingsRes.data);
      })
      .catch(() => alert("Failed to load data"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-28 px-4 min-h-screen bg-[#071a23] text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Data Overview</h2>

            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
            >
              Go to Home
            </button>
          </div>

          {loading && (
            <p className="text-center text-gray-400">Loading data...</p>
          )}

          {/* ================= HOTELS TABLE ================= */}
          {!loading && (
            <>
              <h3 className="text-xl font-semibold mb-4">Hotels Data</h3>

              <div className="overflow-x-auto mb-12">
                <table className="w-full border border-white/10 rounded-xl overflow-hidden">
                  <thead className="bg-[#0b1f2a] text-left">
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">City</th>
                      <th className="p-3">Price</th>
                      <th className="p-3">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotels.map((hotel) => (
                      <tr
                        key={hotel.id}
                        className="border-t border-white/10 hover:bg-white/5"
                      >
                        <td className="p-3">{hotel.id}</td>
                        <td className="p-3">{hotel.name}</td>
                        <td className="p-3">{hotel.city}</td>
                        <td className="p-3">₹{hotel.price}</td>
                        <td className="p-3">{hotel.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ================= BOOKINGS TABLE ================= */}
              <h3 className="text-xl font-semibold mb-4">Bookings Data</h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-white/10 rounded-xl overflow-hidden">
                  <thead className="bg-[#0b1f2a] text-left">
                    <tr>
                      <th className="p-3">Hotel</th>
                      <th className="p-3">Check In</th>
                      <th className="p-3">Check Out</th>
                      <th className="p-3">Guests</th>
                      <th className="p-3">ID Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr
                        key={booking.id}
                        className="border-t border-white/10 hover:bg-white/5"
                      >
                        <td className="p-3">{booking.hotelName}</td>
                        <td className="p-3">{booking.checkIn}</td>
                        <td className="p-3">{booking.checkOut}</td>
                        <td className="p-3">{booking.guests}</td>
                        <td className="p-3">{booking.idType}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DataPage;

