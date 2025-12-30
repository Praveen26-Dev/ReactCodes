import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authController } from "../controller/authController";

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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await authController.register(form);
      navigate(`/verify-otp?email=${form.email}&phone=${form.phoneNo}`);
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
          theme: "filled_black",
          size: "large",
          width: 280,
        }
      );
    }
  }, []);

  const handleGoogleResponse = async (response) => {
    try {
      const jwt = await authController.googleLogin(response.credential);
      localStorage.setItem("token", jwt);
      navigate("/");
    } catch {
      setError("Google sign-up failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4
      bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      <div className="w-full max-w-sm
        bg-white/5 backdrop-blur-xl border border-white/10
        rounded-2xl shadow-2xl p-5 sm:p-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Create Account
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-1 mb-5 text-sm">
          Register to get started
        </p>

        {error && (
          <p className="text-red-400 text-center mb-3 text-sm">
            {error}
          </p>
        )}

        {/* ===== FORM ===== */}
        <form onSubmit={submitForm} className="space-y-3">
          <Input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <Input type="text" name="phoneNo" placeholder="Phone Number" onChange={handleChange} />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-xl font-semibold text-black
            bg-gradient-to-r from-yellow-400 to-orange-500
            hover:scale-105 transition disabled:opacity-60"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* ===== DIVIDER ===== */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-white/10" />
          <span className="px-3 text-gray-400 text-xs">OR</span>
          <div className="flex-1 border-t border-white/10" />
        </div>

        {/* ===== GOOGLE LINE + BUTTON ===== */}
        <div className="mt-2">
          <p className="text-center text-xs tracking-wide text-gray-400 mb-2">
            OR CONTINUE WITH
          </p>

          <div className="flex justify-center">
            <div id="googleSignUp"></div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Already have an account?{" "}
          <span
            className="text-yellow-400 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

/* ================= INPUT ================= */
const Input = ({ type, name, placeholder, onChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className="w-full px-4 py-2 rounded-xl
    bg-black/60 text-white placeholder-gray-400
    border border-white/10
    focus:outline-none focus:ring-2 focus:ring-yellow-400"
  />
);

export default Register;
