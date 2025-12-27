import { createBooking, fetchBookings } from "../service/bookingService";

export const createBookingController = async (
  bookingData,
  user,
  navigate
) => {
  if (!user) throw new Error("User not logged in");

  const payload = {
    ...bookingData,
    userId: user.id,
    createdAt: new Date().toISOString(),
  };

  await createBooking(payload);
  navigate("/my-bookings");
};

export const getUserBookingsController = async (
  userId,
  setBookings,
  setLoading
) => {
  try {
    setLoading(true);
    const { data } = await fetchBookings();
    const userBookings = data.filter(
      (b) => b.userId === userId
    );
    setBookings(userBookings);
  } catch (error) {
    console.error("Failed to load bookings");
  } finally {
    setLoading(false);
  }
};
