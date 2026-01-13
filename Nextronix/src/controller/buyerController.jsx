
import buyerService from "../service/buyerService";

const buyerController = {
  /* ================= PRODUCT LISTING ================= */

  getAllProductCards: async () => {
    const res = await buyerService.getAllProductCards();
    return res.data;
  },

  /* ================= PRODUCT DETAIL ================= */

  getProductPage: async (productId) => {
    const res = await buyerService.getProductPage(productId);
    return res.data;
  },

  selectVariant: async (productId, payload) => {
    const res = await buyerService.selectVariant(productId, payload);
    return res.data;
  },

  // getVariantPricing: async (variantId) => {
  //   const res = await buyerService.getVariantPricing(variantId)
  //   return res.data;
  // }
};

export default buyerController;
