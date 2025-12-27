import { useState } from "react";
import { registerController } from "../controller/authController";
import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    phone: "",
    city: "",
    country: "",
    idProof: "",
    idNumber: "",
    travelPreference: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerController(formData, login);
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      {/* Basic Info */}
      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      {/* Personal */}
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <input
        name="dob"
        type="date"
        placeholder="Date of Birth"
        onChange={handleChange}
      />

      {/* Contact */}
      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />
      <input name="city" placeholder="City" onChange={handleChange} />
      <input name="country" placeholder="Country" onChange={handleChange} />

      {/* Identity */}
      <select name="idProof" onChange={handleChange}>
        <option value="">Select ID Proof</option>
        <option value="Aadhar">Aadhar</option>
        <option value="PAN">PAN</option>
        <option value="Passport">Passport</option>
        <option value="DL">Driving License</option>
      </select>

      <input
        name="idNumber"
        placeholder="ID Number"
        onChange={handleChange}
      />

      {/* Preference */}
      <select name="travelPreference" onChange={handleChange}>
        <option value="">Travel Preference</option>
        <option value="Domestic">Domestic</option>
        <option value="International">International</option>
      </select>

      <button>Register</button>
    </form>
  );
};

export default Register;
