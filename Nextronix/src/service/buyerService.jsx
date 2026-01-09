import api from "../api/axiosInstance";

const buyerService = {
  /* ================= PRODUCT LISTING ================= */

  getAllProductCards: () =>
    api.get("/api/buyer/products/cards"),

  /* ================= PRODUCT DETAIL ================= */

  getProductPage: (productId) =>
    api.get(`/api/buyer/products/${productId}`),
};

export default buyerService;