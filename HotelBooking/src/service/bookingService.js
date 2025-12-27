import axiosInstance from "../api/axiosInstance";

export const createBooking = (bookingData) => {
  return axiosInstance.post("/bookings", bookingData);
};

export const fetchBookings = () => {
  return axiosInstance.get("/bookings");
};
