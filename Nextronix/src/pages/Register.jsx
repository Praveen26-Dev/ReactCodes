import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authController } from "../controller/authController";
import "../App.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= NORMAL REGISTER ================= */

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await authController.register(form);

      navigate(
        `/verify-otp?email=${form.email}&phone=${form.phoneNo}`
      );
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= GOOGLE SIGN UP ================= */

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id:
          "765198013342-jnbbei9lc2juduuun7t22msvvndu7nu1.apps.googleusercontent.com",
        callback: handleGoogleResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("googleSignUp"),
        {
          theme: "outline",
          size: "large",
          width: 320,
        }
      );
    }
  }, []);

  const handleGoogleResponse = async (response) => {
    try {
      const jwt = await authController.googleLogin(
        response.credential // ID TOKEN
      );

      localStorage.setItem("token", jwt);
      navigate("/");
    } catch {
      setError("Google sign-up failed");
    }
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Register to get started
        </p>

        {error && (
          <p className="text-red-500 text-center mb-4 text-sm">
            {error}
          </p>
        )}

        {/* ===== NORMAL REGISTER FORM ===== */}
        <form onSubmit={submitForm} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="text"
            name="phoneNo"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg font-semibold"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* ===== DIVIDER ===== */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t" />
        </div>

        {/* ===== GOOGLE SIGN UP ===== */}
        <div className="flex justify-center">
          <div id="googleSignUp"></div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            className="text-black font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
