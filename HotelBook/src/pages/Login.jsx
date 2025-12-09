import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login Successful!\nEmail: ${email}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form className="flex flex-col gap-4 w-80" onSubmit={handleLogin}>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
