import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { authController } from "../controller/authController";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const res = await authController.login(form);
      localStorage.setItem("token", res.token);
      navigate("/");

    } catch (err) {
      setError(
        err?.response?.data?.message ||
        "Login failed. Verify email & phone first."
      );
    } finally {
      setLoading(false);
    }
  };

  // 🔥 GOOGLE LOGIN
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const res = await authController.googleLogin(
        credentialResponse.credential
      );
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch {
      setError("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">
          Login
        </h2>

        {error && (
          <p className="text-center text-red-500 mb-3 text-sm">
            {error}
          </p>
        )}

        {/* LOGIN FORM */}
        <form onSubmit={submitLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-2"
          />

          {/* 🔥 FORGOT PASSWORD BUTTON */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            disabled={loading}
            className="w-full bg-black text-white py-2"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t" />
        </div>

        {/* GOOGLE LOGIN */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => setError("Google Login Failed")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
