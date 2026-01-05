import { sellerService } from "../service/sellerService";

export const sellerController = {

  /* ========== CATEGORY (TEMP: SELLER / LATER ADMIN) ========== */
  async createCategoriesBulk(data) {
    const res = await sellerService.createCategoriesBulk(data);
    return res.data;
  },

  // Breadcrumb → buyer-side usage
  async getCategoryBreadcrumb(categoryId) {
    const res = await sellerService.getCategoryBreadcrumb(categoryId);
    return res.data;
  },

  /* ========== ATTRIBUTE ========== */
  async createAttribute(data) {
    const res = await sellerService.createAttribute(data);
    return res.data;
  },

  async getAttributes() {
    const res = await sellerService.getAttributes();
    return res.data;
  },

  async getAttributeById(id) {
    const res = await sellerService.getAttributeById(id);
    return res.data;
  },

  /* ========== PRODUCT ========== */
  async createProduct(data) {
    const res = await sellerService.createProduct(data);
    return res.data;
  },

  async getProducts() {
    const res = await sellerService.getProducts();
    return res.data;
  },

  async getProductBySlug(slug) {
    const res = await sellerService.getProductBySlug(slug);
    return res.data;
  },

  /* ========== VARIANT ========== */
  async createVariant(productId, data) {
    const res = await sellerService.createVariant(productId, data);
    return res.data;
  },

  async getVariantsByProduct(productId) {
    const res = await sellerService.getVariantsByProduct(productId);
    return res.data;
  }
};
