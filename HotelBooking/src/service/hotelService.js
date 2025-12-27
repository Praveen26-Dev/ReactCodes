import axiosInstance from "../api/axiosInstance";

export const fetchHotels = () => {
  return axiosInstance.get("/hotels");
};

export const fetchHotelById = (id) => {
  return axiosInstance.get(`/hotels/${id}`);
};

