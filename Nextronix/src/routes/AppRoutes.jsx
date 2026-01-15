import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import VerifyOtp from "../pages/VerifyOtp";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import CartPage from '../pages/Cart'
import Profile from "../pages/Profile";
import '../App.css'
import CreateProductPage from "../pages/seller/CreateProductPage";
import ProductListing from "../pages/buyer/ProductListing";
import ProductDetailPage from "../pages/buyer/ProductDetail";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/seller/create-product" element={<CreateProductPage />} />
      <Route path="/products" element={<ProductListing />} />
      {/* <Route path={`/products/${productId}`} element={<ProductDetailPage />} /> */}
      <Route path="/product/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
