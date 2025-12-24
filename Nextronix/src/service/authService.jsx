import axiosInstance from "../api/axiosInstance";

export const registerUser = (data) => {
  return axiosInstance.post("/auth/register", data);
};

export const verifyEmailOtp = (email, otp) => {
  return axiosInstance.post("/auth/verify-email-otp", null, {
    params: { email, otp },
  });
};

export const verifyPhoneOtp = (phoneNo, otp) => {
  return axiosInstance.post("/auth/verify-phone-otp", null, {
    params: { phoneNo, otp },
  });
};
