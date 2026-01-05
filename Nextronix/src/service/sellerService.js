import api from "../api/axiosInstance";

export const sellerService = {

  /* ========== CATEGORY ========== */
  createCategoriesBulk: (data) =>
    api.post("/api/categories/bulk", data),

  getCategoryBreadcrumb: (categoryId) =>
    api.get(`/api/categories/breadcrumb/${categoryId}`),

  /* ========== ATTRIBUTE ========== */
  getAttributes: () =>
    api.get("/api/attributes"),

  getAttributeById: (id) =>
    api.get(`/api/attributes/${id}`),

  createAttribute: (data) =>
    api.post("/api/attributes", data),

  /* ========== PRODUCT ========== */
  createProduct: (data) =>
    api.post("/api/products", data),

  getProducts: () =>
    api.get("/api/products"),

  /* ========== VARIANT ========== */
  createVariant: (productId, data) =>
    api.post(`/api/products/${productId}/variants`, data),

  getVariantsByProduct: (productId) =>
    api.get(`/api/products/${productId}/variants`)
};
