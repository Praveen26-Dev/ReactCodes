import axiosInstance from "../api/axiosInstance";

export const createUser = (userData) => {
  return axiosInstance.post("/users", userData);
};

export const fetchUsers = () => {
  return axiosInstance.get("/users");
};
