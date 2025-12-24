import React, { useState } from "react";
import '../App.css'
import {
  handleRegister,
  handleEmailVerify,
  handlePhoneVerify,
} from "../controller/registerController";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const [emailOtp, setEmailOtp] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");

  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">

        <h2 className="text-2xl font-bold text-center mb-4">
          Create Account
        </h2>

        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData, setLoading);
          }}
        >
          <input
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Name"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="password"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <input
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Phone Number"
            onChange={(e) =>
              setFormData({ ...formData, phoneNo: e.target.value })
            }
          />

          <button
            disabled={loading}
            className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* OTP SECTION */}
        <div className="mt-6 space-y-4">

          <div>
            <h4 className="font-semibold mb-1">Email OTP</h4>
            <input
              className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter Email OTP"
              onChange={(e) => setEmailOtp(e.target.value)}
            />
            <button
              className="w-full bg-green-500 text-white py-1 rounded hover:bg-green-600"
              onClick={() =>
                handleEmailVerify(
                  formData.email,
                  emailOtp,
                  setEmailVerified
                )
              }
            >
              Verify Email
            </button>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Phone OTP</h4>
            <input
              className="w-full border px-3 py-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter Phone OTP"
              onChange={(e) => setPhoneOtp(e.target.value)}
            />
            <button
              className="w-full bg-green-500 text-white py-1 rounded hover:bg-green-600"
              onClick={() =>
                handlePhoneVerify(
                  formData.phoneNo,
                  phoneOtp,
                  setPhoneVerified
                )
              }
            >
              Verify Phone
            </button>
          </div>
        </div>

        {/* STATUS */}
        <p
          className={`mt-4 text-center font-semibold ${
            emailVerified && phoneVerified
              ? "text-green-600"
              : "text-orange-500"
          }`}
        >
          Status:{" "}
          {emailVerified && phoneVerified ? "ACTIVE" : "PENDING"}
        </p>
      </div>
    </div>
  );
};

export default Register;
