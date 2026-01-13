import api from "../api/axiosInstance";

const buyerService = {
  /* ================= PRODUCT LISTING ================= */

  getAllProductCards: () =>
    api.get("/api/buyer/products/list"),

  /* ================= PRODUCT DETAIL ================= */

  getProductPage: (productId) =>
    api.get(`/api/buyer/products/${productId}`),

  selectVariant: (productId, payload) =>
    api.post(`/api/products/${productId}/variants/select`, payload),
 
  // getVariantPricing:(variantId)=>{
  //   api.get(`/api/buyer/${variantId}/pricing`)
  // }
};

export default buyerService;