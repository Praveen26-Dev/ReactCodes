import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import VerifyOtp from "../pages/VerifyOtp";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import Cart from '../pages/Cart'
import Profile from "../pages/Profile";
import '../App.css'
import SellerLayout from "../pages/seller/SellerLayout";
import Categories from "../pages/seller/Categories"
import Products from "../pages/seller/Products"
import Variants from "../pages/seller/Variants"
import Attributes from "../pages/seller/Attributes"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    
      {/* ===== SELLER ROUTES ===== */}
      <Route path="/seller" element={<SellerLayout />}>
        <Route path="categories" element={<Categories />} />
        <Route path="attributes" element={<Attributes />} />
        <Route path="products" element={<Products />} />
        <Route
          path="products/:productId/variants"
          element={<Variants />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
