import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Hotels from './pages/Hotels'
function App() {
  return (
    
    <>
    <Router>
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rooms" element={<Hotels />} />
         <Route path="/book/:id" element={<BookHotel />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
