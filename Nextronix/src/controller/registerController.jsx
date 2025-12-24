import {
  registerUser,
  verifyEmailOtp,
  verifyPhoneOtp,
} from "../service/authService";

export const handleRegister = async (
  formData,
  setLoading
) => {
  try {
    setLoading(true);
    await registerUser(formData);
    alert("Registered successfully. OTP sent to Email & Phone");
  } catch (error) {
    alert("Registration failed");
  } finally {
    setLoading(false);
  }
};

export const handleEmailVerify = async (
  email,
  otp,
  setEmailVerified
) => {
  try {
    const res = await verifyEmailOtp(email, otp);
    alert(res.data);
    setEmailVerified(true);
  } catch {
    alert("Invalid or expired Email OTP");
  }
};

export const handlePhoneVerify = async (
  phoneNo,
  otp,
  setPhoneVerified
) => {
  try {
    const res = await verifyPhoneOtp(phoneNo, otp);
    alert(res.data);
    setPhoneVerified(true);
  } catch {
    alert("Invalid or expired Phone OTP");
  }
};
