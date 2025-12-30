import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  /* ================= FORM STATE ================= */
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Full Name is required";

    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email format";
    }

    if (!form.password) {
      err.password = "Password is required";
    } else if (form.password.length < 6) {
      err.password = "Minimum 6 characters required";
    }

    if (!form.confirmPassword) {
      err.confirmPassword = "Confirm password is required";
    } else if (form.password !== form.confirmPassword) {
      err.confirmPassword = "Passwords do not match";
    }

    if (!form.contact.trim()) {
      err.contact = "Contact is required";
    } else if (!/^[0-9]{10}$/.test(form.contact)) {
      err.contact = "Enter 10 digit number";
    }

    if (!form.city.trim()) err.city = "City is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ================= SUBMIT ================= */
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const { confirmPassword, ...userData } = form;

    try {
      // 🔍 1. Check existing email
      const checkRes = await axios.get(
        `http://localhost:3000/users?email=${userData.email}`
      );

      if (checkRes.data.length > 0) {
        alert("Email already registered");
        return;
      }

      // 📦 2. Save user
      const res = await axios.post(
        "http://localhost:3000/users",
        userData
      );

      const savedUser = res.data;

      // 🔐 3. Save login state
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          id: savedUser.id,
          name: savedUser.name,
          email: savedUser.email,
        })
      );

      navigate("/");
    } catch (err) {
      alert("Signup failed");
    }
  };

  /* ================= ANIMATIONS ================= */
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
        url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <motion.h2
          variants={fieldVariants}
          className="text-3xl font-bold mb-6 text-center text-gray-800"
        >
          Create Account
        </motion.h2>

        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          {[
            ["name", "Full Name"],
            ["email", "Email Address"],
            ["password", "Password", "password"],
            ["confirmPassword", "Confirm Password", "password"],
            ["contact", "Contact Number"],
            ["city", "City"],
          ].map(([name, placeholder, type]) => (
            <motion.div key={name} variants={fieldVariants}>
              <input
                type={type || "text"}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="p-3 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[name]}
                </p>
              )}
            </motion.div>
          ))}

          <motion.button
            variants={fieldVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="bg-yellow-400 p-3 mt-4 rounded font-bold hover:bg-yellow-500"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
