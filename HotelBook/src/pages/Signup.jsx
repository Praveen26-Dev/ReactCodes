import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  // 🔹 Submit handler (JSON-SERVER BASED – FIXED)
  const onSubmit = async (data) => {
    const { confirmPassword, ...userData } = data;

    try {
      // 🔎 1. Check if email already exists
      const checkRes = await fetch(
        `http://localhost:5000/users?email=${userData.email}`
      );
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) {
        alert("Email already registered. Please login.");
        return;
      }

      // 📦 2. Save user to json-server
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        throw new Error("Failed to register");
      }

      const savedUser = await res.json();

      // 🔐 3. Save LOGIN STATE only (NO password)
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          id: savedUser.id,
          name: savedUser.name,
          email: savedUser.email,
        })
      );

      reset();
      navigate("/"); // ✅ HOME REDIRECT
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    }
  };

  // 🔹 Animation variants
  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
        url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-[90%] max-w-md"
      >
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-center text-gray-800"
        >
          Create Account
        </motion.h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <motion.input
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            placeholder="Full Name"
            {...register("name", { required: "Full Name is required" })}
            className="p-3 rounded border border-gray-300"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <motion.input
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            type="email"
            placeholder="Email Address"
            {...register("email", { required: "Email is required" })}
            className="p-3 rounded border border-gray-300"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <motion.input
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="p-3 rounded border border-gray-300"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <motion.input
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="p-3 rounded border border-gray-300"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}

          <motion.input
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            placeholder="Contact Number"
            {...register("contact", { required: "Contact is required" })}
            className="p-3 rounded border border-gray-300"
          />
          {errors.contact && (
            <p className="text-red-500">{errors.contact.message}</p>
          )}

          <motion.input
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            custom={5}
            placeholder="City"
            {...register("city", { required: "City is required" })}
            className="p-3 rounded border border-gray-300"
          />
          {errors.city && (
            <p className="text-red-500">{errors.city.message}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-yellow-400 p-3 rounded font-bold hover:bg-yellow-500"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
