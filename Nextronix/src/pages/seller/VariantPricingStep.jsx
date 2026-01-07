import { useEffect, useState } from "react";
import sellerController from "../../controller/sellerController";
import { useSellerProduct } from "../../context/SellerProductContext";

export default function VariantPricingStep({ onNext }) {
  const { productId } = useSellerProduct();

  const [variants, setVariants] = useState([]);
  const [variantId, setVariantId] = useState("");

  const [mrp, setMrp] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const [discountType, setDiscountType] = useState("NONE");
  const [discountValue, setDiscountValue] = useState("");

  const [pricing, setPricing] = useState(null);

  /* ================= LOAD VARIANTS ================= */

  useEffect(() => {
    if (!productId) return;

    sellerController.getVariants(productId)
      .then(setVariants)
      .catch(console.error);
  }, [productId]);

  /* ================= SAVE BASE PRICE ================= */

  const saveBasePrice = async () => {
    if (!variantId || !mrp || !sellingPrice) {
      alert("Fill all price fields");
      return;
    }

    await sellerController.setVariantPrice(variantId, {
      mrp: Number(mrp),
      sellingPrice: Number(sellingPrice),
    });

    const res = await sellerController.getVariantPricing(variantId);
    setPricing(res);
  };

  /* ================= APPLY DISCOUNT ================= */

  const applyDiscount = async () => {
    if (discountType === "NONE") return;

    await sellerController.setVariantDiscount(variantId, {
      discountType,
      discountValue: Number(discountValue),
    });

    const res = await sellerController.getVariantPricing(variantId);
    setPricing(res);
  };

  return (
    <div className="p-6 bg-white/5 rounded-xl space-y-4 text-white">

      <h2 className="text-xl font-semibold">Variant Pricing</h2>

      {/* Variant Selector */}
      <select
        value={variantId}
        onChange={(e) => setVariantId(e.target.value)}
        className="w-full bg-black/40 border border-white/10 p-2 rounded"
      >
        <option value="">Select Variant</option>
        {variants.map(v => (
          <option key={v.id} value={v.id}>
            {v.sku}
          </option>
        ))}
      </select>

      {/* Base Price */}
      <input
        placeholder="MRP"
        type="number"
        value={mrp}
        onChange={e => setMrp(e.target.value)}
        className="w-full p-2 bg-black/40 border border-white/10 rounded"
      />

      <input
        placeholder="Selling Price"
        type="number"
        value={sellingPrice}
        onChange={e => setSellingPrice(e.target.value)}
        className="w-full p-2 bg-black/40 border border-white/10 rounded"
      />

      <button
        onClick={saveBasePrice}
        className="px-4 py-2 bg-[#6a5830] rounded"
      >
        Save Base Price
      </button>

      {/* Discount */}
      <select
        value={discountType}
        onChange={e => setDiscountType(e.target.value)}
        className="w-full bg-black/40 border border-white/10 p-2 rounded"
      >
        <option value="NONE">No Discount</option>
        <option value="FLAT">Flat Discount</option>
        <option value="PERCENT">Percent Discount</option>
      </select>

      {discountType !== "NONE" && (
        <input
          placeholder="Discount Value"
          type="number"
          value={discountValue}
          onChange={e => setDiscountValue(e.target.value)}
          className="w-full p-2 bg-black/40 border border-white/10 rounded"
        />
      )}

      <button
        onClick={applyDiscount}
        className="px-4 py-2 bg-[#6a5830] rounded"
      >
        Apply Discount
      </button>

      {/* Pricing Preview */}
      {pricing && (
        <div className="pt-4 space-y-1">
          {pricing.discount > 0 && (
            <p className="text-green-400 font-semibold">
              -{pricing.discount}%
            </p>
          )}
          <p className="text-2xl font-bold">
            ₹{pricing.finalPrice}
          </p>
          <p className="text-gray-400 line-through">
            MRP: ₹{pricing.mrp}
          </p>
        </div>
      )}

      {pricing && (
        <div className="flex justify-end pt-4">
          <button
            onClick={onNext}
            className="px-6 py-2 bg-[#6a5830] rounded"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
