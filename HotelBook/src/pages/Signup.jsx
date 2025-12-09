import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Sign Up Successful!\nName: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      <form className="flex flex-col gap-4 w-80" onSubmit={handleSignup}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="p-3 rounded border"
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="p-3 rounded border"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          className="p-3 rounded border"
        />
        <button type="submit" className="bg-yellow-400 p-3 rounded font-bold hover:bg-yellow-500">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
