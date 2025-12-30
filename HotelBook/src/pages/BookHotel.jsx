import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const BookHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    idType: "",
  });

  /* ================= FETCH HOTEL ================= */

  useEffect(() => {
    axios
      .get(`http://localhost:3000/hotels/${id}`)
      .then((res) => setHotel(res.data))
      .catch(() => alert("Hotel not found"));
  }, [id]);

  /* ================= CONFIRM BOOKING ================= */

  const confirmBooking = async () => {
    if (!form.checkIn || !form.checkOut || !form.idType) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const booking = {
      hotelId: hotel.id,
      hotelName: hotel.name,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
      price: hotel.price,
      idType: form.idType,
    };

    await axios.post("http://localhost:3000/bookings", booking);

    setLoading(false);
    alert("Booking Confirmed 🎉");
    navigate("/my-bookings");
  };

  if (!hotel) return null;

  return (
    <>
      <Navbar />

      <div className="pt-28 px-4 min-h-screen bg-gradient-to-br from-[#071a23] to-[#020d13] text-white">
        <div className="max-w-2xl mx-auto bg-[#0b1f2a] p-8 rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <p className="text-gray-400 text-sm">
              ₹{hotel.price} / night
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Check In */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">
                Check In
              </label>
              <input
                type="date"
                className="w-full p-3 rounded-lg bg-[#081822] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                onChange={(e) =>
                  setForm({ ...form, checkIn: e.target.value })
                }
              />
            </div>

            {/* Check Out */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">
                Check Out
              </label>
              <input
                type="date"
                className="w-full p-3 rounded-lg bg-[#081822] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                onChange={(e) =>
                  setForm({ ...form, checkOut: e.target.value })
                }
              />
            </div>

            {/* Guests */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">
                Guests
              </label>
              <input
                type="number"
                min="1"
                value={form.guests}
                className="w-full p-3 rounded-lg bg-[#081822] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                onChange={(e) =>
                  setForm({ ...form, guests: e.target.value })
                }
              />
            </div>

            {/* ID TYPE */}
            <div>
              <label className="text-sm text-gray-300 mb-1 block">
                ID Proof Type
              </label>
              <select
                className="w-full p-3 rounded-lg bg-[#081822] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                onChange={(e) =>
                  setForm({ ...form, idType: e.target.value })
                }
              >
                <option value="">Select ID</option>
                <option value="Aadhar">Aadhar Card</option>
                <option value="PAN">PAN Card</option>
                <option value="Passport">Passport</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={confirmBooking}
            disabled={loading}
            className="
              w-full mt-8 py-4 rounded-xl
              bg-gradient-to-r from-cyan-400 to-emerald-400
              text-black font-bold text-lg
              hover:scale-[1.02] transition
              disabled:opacity-60
            "
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </div>
      </div>
    </>
  );
};

export default BookHotel;
