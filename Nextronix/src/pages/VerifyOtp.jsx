import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axiosInstance";
import '../App.css'
const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const phoneNo = params.get("phone");

  const [emailOtp, setEmailOtp] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");

  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // 🔹 Verify Email OTP
  const verifyEmailOtp = async () => {
    try {
      setLoading(true);
      setMsg("");

      await api.post(
        `/auth/verify-email-otp?email=${email}&otp=${emailOtp}`
      );

      setEmailVerified(true);
      setMsg("Email verified successfully. Now verify phone OTP.");

    } catch (err) {
      setMsg(err.response?.data?.message || "Email OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Verify Phone OTP
  const verifyPhoneOtp = async () => {
    try {
      setLoading(true);
      setMsg("");

      await api.post(
        `/auth/verify-phone-otp?phoneNo=${phoneNo}&otp=${phoneOtp}`
      );

      setMsg("Verification complete! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);

    } catch (err) {
      setMsg(err.response?.data?.message || "Phone OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔒 Safety check
  if (!email || !phoneNo) {
    navigate("/register");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-2">
          Verify OTP
        </h2>

        <p className="text-center text-sm text-gray-500 mb-4">
          OTP sent to your Email & Mobile
        </p>

        {msg && (
          <p className="text-center mb-4 text-blue-600 text-sm">
            {msg}
          </p>
        )}

        {/* EMAIL OTP */}
        <div className="mb-4">
          <label className="text-sm font-medium">Email OTP</label>
          <input
            type="text"
            value={emailOtp}
            onChange={(e) => setEmailOtp(e.target.value)}
            disabled={emailVerified}
            className="w-full border p-2 mt-1"
          />

          {!emailVerified && (
            <button
              onClick={verifyEmailOtp}
              disabled={loading}
              className="w-full bg-black text-white py-2 mt-2"
            >
              {loading ? "Verifying..." : "Verify Email OTP"}
            </button>
          )}
        </div>

        {/* PHONE OTP */}
        <div>
          <label className="text-sm font-medium">Phone OTP</label>
          <input
            type="text"
            value={phoneOtp}
            onChange={(e) => setPhoneOtp(e.target.value)}
            disabled={!emailVerified}
            className="w-full border p-2 mt-1"
          />

          <button
            onClick={verifyPhoneOtp}
            disabled={!emailVerified || loading}
            className={`w-full py-2 mt-2 text-white ${
              emailVerified
                ? "bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? "Verifying..." : "Verify Phone OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
