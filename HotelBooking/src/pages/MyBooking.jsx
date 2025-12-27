import { useEffect, useState } from "react";
import { useAuth } from "../auth/authContext";
import { getUserBookingsController } from "../controller/bookingController";

const MyBooking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      getUserBookingsController(
        user.id,
        setBookings,
        setLoading
      );
    }
  }, [user]);

  if (loading) return <h2>Loading...</h2>;
  if (!bookings.length) return <h2>No bookings yet</h2>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        My Bookings
      </h2>

      {bookings.map((b) => (
        <div
          key={b.id}
          className="border p-4 mb-3 rounded"
        >
          <p>Hotel ID: {b.hotelId}</p>
          <p>Check-in: {b.checkIn}</p>
          <p>Check-out: {b.checkOut}</p>
          <p>Guests: {b.guests}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBooking;
