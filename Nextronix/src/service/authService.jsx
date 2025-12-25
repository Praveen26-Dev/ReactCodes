import { data } from "react-router-dom";
import api from "../api/axiosInstance";

export const authService = {
    register : (data)=>api.post("/register",data),
    login : (data)=> api.post("/login",data),
    googleLogin:(idToken)=>api.post("google",{idToken}),
    forgotPassword:(data)=>api.post("/forgot-password",data),
    resetPassword:(data)=> api.post("/reset-password",data),
    validateToken: (token)=> api.get(`/reset-password/validate?token=${token}`)


};