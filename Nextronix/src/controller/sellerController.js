// src/seller/controllers/sellerController.jsx
import sellerService from "../service/sellerService";

const sellerController = {

  /* ================= CATEGORY ================= */

  getCategories: async () => {
    const res = await sellerService.getCategories();
    return res.data;
  },

  getCategoryBreadcrumb: async (categoryId) => {
    const res = await sellerService.getCategoryBreadcrumb(categoryId);
    return res.data;
  },

  /* ================= BRAND ================= */

  getBrands: async () => {
    const res = await sellerService.getBrands();
    return res.data;
  },

  /* ================= PRODUCT ================= */

  createProduct: async (data) => {
    const res = await sellerService.createProduct(data);
    return res.data;
  },

  getProductBySlug: async (slug) => {
    const res = await sellerService.getProductBySlug(slug);
    return res.data;
  },

  getProductById: async (id) => {
    const res = await sellerService.getProductById(id);
    return res.data;
  },

  /* ================= FEATURES ================= */

  saveFeatures: async (productId, features) => {
    const res = await sellerService.saveFeatures(productId, features);
    return res.data;
  },

  getFeatures: async (productId) => {
    const res = await sellerService.getFeatures(productId);
    return res.data;
  },

  /* ================= ATTRIBUTES ================= */

  getAllAttributes: async () => {
    const res = await sellerService.getAllAttributes();
    return res.data;
  },

  getAttributeById: async (id) => {
    const res = await sellerService.getAttributeById(id);
    return res.data;
  },

  createAttribute: async (data) => {
  const res = await sellerService.createAttribute(data);
  return res.data;
},

  /* ================= VARIANTS ================= */

  createVariant: async (productId, data) => {
    const res = await sellerService.createVariant(productId, data);
    return res.data;
  },

  getVariants: async (productId) => {
    const res = await sellerService.getVariants(productId);
    return res.data;
  },

  /* ================= VARIANT PRICING ================= */

  setVariantPrice: async (variantId, data) => {
    const res = await sellerService.setVariantPrice(variantId, data);
    return res.data;
  },

  setVariantDiscount: async (variantId, data) => {
    const res = await sellerService.setVariantDiscount(variantId, data);
    return res.data;
  },

  getVariantPricing: async (variantId) => {
    const res = await sellerService.getVariantPricing(variantId);
    return res.data;
  },

  /* ================= PRODUCT IMAGES ================= */

  uploadProductImages: async (productId, variantId, files) => {
    const res = await sellerService.uploadProductImages(
      productId,
      variantId,
      files
    );
    return res.data;
  },

  setPrimaryImage: async (productId, imageId) => {
    const res = await sellerService.setPrimaryImage(productId, imageId);
    return res.data;
  },

  getProductImages: async (productId, variantId) => {
    const res = await sellerService.getProductImages(productId, variantId);
    return res.data;
  },
};

export default sellerController;
