
// src/seller/services/sellerService.jsx
import api from "../api/axiosInstance";

const sellerService = {
  /* ================= CATEGORY ================= */

  getCategories: () =>
    api.get("/api/categories/bulk"),

  getCategoryBreadcrumb: (categoryId) =>
    api.get(`/api/categories/breadcrumb/${categoryId}`),

  /* ================= BRAND ================= */

  getBrands: () =>
    api.get("/api/brands"),

  /* ================= PRODUCT ================= */

  createProduct: (data) =>
    api.post("/api/products", data),

  getProductBySlug: (slug) =>
    api.get(`/api/products/${slug}`),

  getProductById: (id) =>
    api.get(`/api/products/id/${id}`), // recommended addition

  /* ================= FEATURES ================= */

  saveFeatures: (productId, features) =>
    api.post(`/api/feature/${productId}/create`, features),

  getFeatures: (productId) =>
    api.get(`/api/feature/${productId}`),

  /* ================= ATTRIBUTES ================= */

  getAllAttributes: () =>
    api.get("/api/attributes"),

  getAttributeById: (id) =>
    api.get(`/api/attributes/${id}`),

  addProductAttributes: (productId, data) =>
    api.post(`/api/products/${productId}/attributes`, data),

  /* ================= VARIANTS ================= */

  createVariant: (productId, data) =>
    api.post(`/api/products/${productId}/variants`, data),

  getVariants: (productId) =>
    api.get(`/api/products/${productId}/variants`),

  /* ================= VARIANT PRICING ================= */

  setVariantPrice: (variantId, data) =>
    api.post(`/api/variants/${variantId}/pricing/price`, data),

  setVariantDiscount: (variantId, data) =>
    api.post(`/api/variants/${variantId}/pricing/discount`, data),

  getVariantPricing: (variantId) =>
    api.get(`/api/variants/${variantId}/pricing`),

  /* ================= PRODUCT IMAGES ================= */

  uploadProductImages: (productId, variantId, files) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    return api.post(
      `/api/products/${productId}/images`,
      formData,
      {
        params: { variantId },
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  },

  setPrimaryImage: (productId, imageId) =>
    api.put(`/api/products/${productId}/images/${imageId}/set-primary`),

  getProductImages: (productId, variantId) =>
    api.get(`/api/products/${productId}/images`, {
      params: { variantId },
    }),
};

export default sellerService;
