import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { createBookingController } from "../controller/bookingController";
import { pageEnterAnimation } from "../animations/pageAnimations";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const pageRef = useRef(null);

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  useEffect(() => {
    pageEnterAnimation(pageRef.current);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBookingController(
      { ...formData, hotelId: Number(id) },
      user,
      navigate
    );
  };

  return (
    <div
      ref={pageRef}
      className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6">
        Confirm Your Booking
      </h2>

      <input
        type="date"
        name="checkIn"
        onChange={handleChange}
        className="w-full border p-3 rounded mb-4"
      />
      <input
        type="date"
        name="checkOut"
        onChange={handleChange}
        className="w-full border p-3 rounded mb-4"
      />
      <input
        type="number"
        name="guests"
        min="1"
        onChange={handleChange}
        className="w-full border p-3 rounded mb-6"
      />

      <button className="w-full bg-green-600 text-white py-3 rounded-xl">
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
