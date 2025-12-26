import {authService} from '../service/authService'

export const authController = {

  async register(data){
    const res = await authService.register(data)
    return res.data
  },
  async verifyEmailOtp(email, otp) {
    const res = await authService.verifyEmailOtp(email, otp);
    return res.data;
  },

  async verifyPhoneOtp(phoneNo, otp) {
    const res = await authService.verifyPhoneOtp(phoneNo, otp);
    return res.data;
  },
  
   async login(data){
    const res = await authService.login(data)
    return res.data
  },

   async googleLogin(token){
    const res = await authService.googleLogin(token)
    return res.data
  },

   async forgotPassword(data){
    const res = await authService.forgotPassword(data)
    return res.data
  },

   async resetPassword(data){
    const res = await authService.resetPassword(data)
    return res.data
  }
}