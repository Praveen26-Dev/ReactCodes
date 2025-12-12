import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("hotelUser", JSON.stringify(data));
    alert("Signup Successful!");
    reset();
    navigate("/");
  };

  // Stagger animation for input fields
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
          {[
            { name: "name", type: "text", placeholder: "Full Name" },
            { name: "email", type: "email", placeholder: "Email Address" },
            { name: "password", type: "password", placeholder: "Password" },
            { name: "age", type: "number", placeholder: "Age" },
            { name: "contact", type: "number", placeholder: "Contact Number" },
            { name: "city", type: "text", placeholder: "City" },
          ].map((field, i) => (
            <motion.input
              key={i}
              custom={i}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              {...register(field.name)}
              type={field.type}
              placeholder={field.placeholder}
              required
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="p-3 rounded border border-gray-300 
                         focus:outline-none bg-white/80 focus:border-yellow-500
                         transition-all duration-300"
            />
          ))}

          {/* Select input */}
          <motion.select
            custom={6}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            {...register("idProof")}
            required
            className="p-3 rounded border border-gray-300 
                       bg-white/80 focus:outline-none focus:border-yellow-500
                       transition-all duration-300"
          >
            <option value="">Select ID Proof</option>
            <option value="Aadhar">Aadhar Card</option>
            <option value="PAN">PAN Card</option>
            <option value="DL">Driving License</option>
            <option value="Voter">Voter ID</option>
          </motion.select>

          {/* Signup button */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            custom={7}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            type="submit"
            className="bg-yellow-400 p-3 rounded font-bold hover:bg-yellow-500 text-black"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
