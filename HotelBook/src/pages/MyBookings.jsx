import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BOOKINGS ================= */

  useEffect(() => {
    axios
      .get("http://localhost:3000/bookings")
      .then((res) => setBookings(res.data))
      .catch(() => alert("Failed to load bookings"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-28 px-4 min-h-screen bg-gradient-to-br from-[#071a23] to-[#020d13] text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold">My Bookings</h2>

            <button
              onClick={() => navigate("/")}
              className="
                px-6 py-3 rounded-xl
                bg-gradient-to-r from-cyan-400 to-emerald-400
                text-black font-semibold
                hover:scale-105 transition
              "
            >
              Back to Home
            </button>
          </div>

          {/* Loading */}
          {loading && (
            <p className="text-center text-gray-400">
              Loading your bookings...
            </p>
          )}

          {/* Empty State */}
          {!loading && bookings.length === 0 && (
            <div className="text-center mt-20">
              <p className="text-gray-400 mb-6">
                You haven’t booked any hotel yet 🏨
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold"
              >
                Explore Hotels
              </button>
            </div>
          )}

          {/* Bookings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="
                  bg-[#0b1f2a] rounded-2xl p-6
                  shadow-xl border border-white/10
                  hover:scale-[1.02] transition
                "
              >
                <h3 className="text-xl font-semibold mb-2">
                  {booking.hotelName}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  ₹{booking.price} / night
                </p>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-gray-400">Check In:</span>{" "}
                    {booking.checkIn}
                  </p>
                  <p>
                    <span className="text-gray-400">Check Out:</span>{" "}
                    {booking.checkOut}
                  </p>
                  <p>
                    <span className="text-gray-400">Guests:</span>{" "}
                    {booking.guests}
                  </p>
                  <p>
                    <span className="text-gray-400">ID Type:</span>{" "}
                    {booking.idType}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 text-green-400 font-semibold text-sm">
                  Booking Confirmed ✔
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookings;
