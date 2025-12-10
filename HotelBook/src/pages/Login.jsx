import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false); // for animation

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("hotelUser"));

    if (user && user.email === email && user.password === password) {
      alert(`Login Successful!\nWelcome, ${user.name}`);
      setEmail("");
      setPassword("");
      navigate("/"); // redirect to homepage
    } else {
      setShake(true); // trigger shake animation
      setTimeout(() => setShake(false), 500);
      alert("User not found or incorrect credentials. Redirecting to Sign Up!");
      navigate("/signup");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                          url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-[90%] max-w-md 
                    transform transition-all duration-700 ease-out
                    opacity-0 translate-y-10 animate-fadeInUp ${shake ? "animate-shake" : ""}`}
      >
        <h2 className="text-3xl font-bold mb-6 text-center animate-bounceIn">
          Login
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded border border-gray-300 
                       focus:outline-none focus:border-yellow-400
                       transition-all duration-300 bg-white/80"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 rounded border border-gray-300 
                       focus:outline-none focus:border-yellow-400
                       transition-all duration-300 bg-white/80"
          />
          <button
            type="submit"
            className="bg-yellow-400 p-3 rounded font-bold hover:bg-yellow-500
                       transform hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>
      </div>

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s forwards;
          }

          @keyframes bounceIn {
            0% { transform: scale(0.5); opacity: 0; }
            60% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }

          .animate-bounceIn {
            animation: bounceIn 0.8s forwards;
          }

          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }

          .animate-shake {
            animation: shake 0.5s;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
