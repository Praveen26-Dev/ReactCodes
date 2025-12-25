import { data } from "react-router-dom";
import api from "../api/axiosInstance";

export const authService = {
    register : (data)=>api.post("/auth/register",data),
    login : (data)=> api.post("/auth/login",data),
    googleLogin:(idToken)=>api.post("/auth/google",{idToken}),
    forgotPassword:(data)=>api.post("/auth/forgot-password",data),
    resetPassword:(data)=> api.post("/auth/reset-password",data),
    validateToken: (token)=> api.get(`/auth/reset-password/validate?token=${token}`)


};