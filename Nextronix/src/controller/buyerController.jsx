
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

    /* ================= CART ================= */

  addToCart: async (payload) => {
    const res = await buyerService.addToCart(payload);
    return res.data;
  },

  getCart: async (userId) => {
    const res = await buyerService.getCart(userId);
    return res.data;
  },

  decreaseQty: async (cartItemId) => {
    const res = await buyerService.decreaseQty(cartItemId);
    return res.data;
  },

  removeFromCart: async (cartItemId) => {
    const res = await buyerService.removeFromCart(cartItemId);
    return res.data;
  },

  clearCart: async (userId) => {
    const res = await buyerService.clearCart(userId);
    return res.data;
  },

  getCartCount: async (userId) => {
    const res = await buyerService.getCartCount(userId);
    return res.data;
  },
  /* ================= WISHLIST ================= */

  addToWishlist: async (userId, productId) => {
    const res = await buyerService.addToWishlist({
      userId,
      productId
    });
    return res.data;
  },

  getWishlist: async (userId) => {
    const res = await buyerService.getWishlist(userId);
    return res.data;
  },

  removeFromWishlist: async (userId, productId) => {
    const res = await buyerService.removeFromWishlist(userId, productId);
    return res.data;
  },
  /* ================= CHECKOUT ================= */

 /* ================= CHECKOUT ================= */

  checkout: async (userId) => {
    const res = await buyerService.checkout(userId);
    return res.data;
  },

  getOrders: async (userId) => {
    const res = await buyerService.getOrders(userId);
    return res.data;
  }
};

export default buyerController;
