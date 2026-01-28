import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Hero from "./pages/Landing/Hero" 
import Sell from "./pages/Sell/Sell";
import Register from "./pages/Register/Register";
import RegisterSessions from "./pages/RegisterSessions/RegisterSessions";
import BillHistory from "./pages/BillHistory/BillHistory";
import CustomerDisplay from "./pages/CustomerDisplay/CustomerDisplay";
import Navbar from "./layout/Navbar"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        {/* LANDING PAGE (NO SIDEBAR) */}
        <Route path="/" element={<Hero />} />

        {/* POS APP (WITH SIDEBAR) */}
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Navigate to="sell" />} />
          <Route path="sell" element={<Sell />} />
          <Route path="register" element={<Register />} />
          <Route path="register-sessions" element={<RegisterSessions />} />
          <Route path="bill-history" element={<BillHistory />} />
          <Route path="customer-display" element={<CustomerDisplay />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
