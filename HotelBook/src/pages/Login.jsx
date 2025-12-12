import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("hotelUser"));

    if (user && user.email === email && user.password === password) {
      alert(`Login Successful!\nWelcome, ${user.name}`);
      navigate("/");
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      navigate("/signup");
    }
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
      <AnimatePresence>
        <motion.div
          key="login-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-[90%] max-w-md 
            ${shake ? "shake-effect" : ""}`}
        >
          {/* Animated Heading */}
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center text-gray-800"
          >
            Login
          </motion.h2>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded border border-gray-300 bg-white/80 focus:outline-none"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 rounded border border-gray-300 bg-white/80 focus:outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="bg-yellow-400 p-3 rounded font-bold text-black hover:bg-yellow-500"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </AnimatePresence>

      {/* Shake animation */}
      <style>
        {`
          .shake-effect {
            animation: shake 0.4s ease-in-out;
          }

          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            50% { transform: translateX(8px); }
            75% { transform: translateX(-8px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
