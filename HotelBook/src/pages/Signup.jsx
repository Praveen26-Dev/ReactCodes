import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("hotelUser", JSON.stringify(data));
    alert("Signup Successful!");
    reset();
    navigate("/");
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
        className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-[90%] max-w-md 
                   transform transition-all duration-700 ease-out
                   opacity-0 translate-y-10 animate-fadeInUp"
      >
        <h2 className="text-3xl font-bold mb-6 text-center animate-bounceIn">
          Create Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {[ 
            { name: "name", type: "text", placeholder: "Full Name" },
            { name: "email", type: "email", placeholder: "Email Address" },
            { name: "password", type: "password", placeholder: "Password" },
            { name: "age", type: "number", placeholder: "Age" },
            { name: "contact", type: "number", placeholder: "Contact Number" },
            { name: "city", type: "text", placeholder: "City" },
          ].map((field, index) => (
            <input
              key={index}
              {...register(field.name)}
              type={field.type}
              placeholder={field.placeholder}
              required
              className="p-3 rounded border border-gray-300 
                         focus:outline-none focus:border-yellow-400
                         transition-all duration-300 bg-white/80"
            />
          ))}

          <select
            {...register("idProof")}
            required
            className="p-3 rounded border border-gray-300 
                       focus:outline-none focus:border-yellow-400
                       transition-all duration-300 bg-white/80"
          >
            <option value="">Select ID Proof</option>
            <option value="Aadhar">Aadhar Card</option>
            <option value="PAN">PAN Card</option>
            <option value="DL">Driving License</option>
            <option value="Voter">Voter ID</option>
          </select>

          <button
            type="submit"
            className="bg-yellow-400 p-3 rounded font-bold hover:bg-yellow-500
                       transform hover:scale-105 transition-transform duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Tailwind custom animation */}
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
        `}
      </style>
    </div>
  );
};

export default Signup;
