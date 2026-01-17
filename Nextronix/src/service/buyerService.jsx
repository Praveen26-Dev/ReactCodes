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
  /* ================= CART ================= */

   addToCart: (payload) =>
    api.post("/api/cart/add", payload),

  getCart: (userId) =>
    api.get(`/api/cart/${userId}`),

  decreaseQty: (cartItemId) =>
    api.post(`/api/cart/decrease/${cartItemId}`),

  removeFromCart: (cartItemId) =>
    api.delete(`/api/cart/${cartItemId}`),

  clearCart: (userId) =>
    api.delete(`/api/cart/clear/${userId}`),

  getCartCount: (userId) =>
    api.get(`/api/cart/count/${userId}`),
  addToWishlist: (payload) =>
    api.post("/api/wishlist/add", payload),

  getWishlist: (userId) =>
    api.get(`/api/wishlist/${userId}`),

  removeFromWishlist: (userId, productId) =>
    api.delete(`/api/wishlist/remove?userId=${userId}&productId=${productId}`),

  //=========================Checkout==================
  checkout: (userId) =>
    api.post(`/api/checkout/${userId}`),

  getOrders: (userId) =>
    api.get(`/api/checkout/${userId}`)

};

export default buyerService;