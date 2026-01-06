// src/seller/pages/BrandStep.jsx
import { useEffect, useState } from "react";
import sellerController from "../../controller/sellerController";
import { useSellerProduct } from "../../context/SellerProductContext";

const BrandStep = ({ onNext }) => {
  const { setBrandId } = useSellerProduct();

  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= LOAD BRANDS ================= */

  useEffect(() => {
    const loadBrands = async () => {
      try {
        setLoading(true);
        const data = await sellerController.getBrands();
        setBrands(data || []);
      } catch (err) {
        setError("Failed to load brands");
      } finally {
        setLoading(false);
      }
    };

    loadBrands();
  }, []);

  /* ================= SELECT BRAND ================= */

  const selectBrand = (brand) => {
    setBrandId(brand.id); // ✅ global save
    console.log("Selected Brand:", brand);     // 👈 full object
  console.log("Selected Brand ID:", brand.id);
    onNext(); // move to ProductInfoStep
  };

  const filteredBrands = brands.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h2 className="text-xl font-semibold text-white-400">
          Select Brand
        </h2>
        <p className="text-sm text-white-400">
          Choose the brand your product belongs to
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full md:w-1/2
          border rounded-md px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-black
        "
      />

      {/* Loading */}
      {loading && (
        <p className="text-sm text-gray-500">Loading brands...</p>
      )}

      {/* Brand Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {!loading &&
          filteredBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => selectBrand(brand)}
              className="
                cursor-pointer
                rounded-lg border
                p-4 text-center
                transition-all
                hover:shadow-lg
                hover:border-white
                bg-blue
              "
            >
              {/* Brand Logo Placeholder */}
              <div
                className="
                  mx-auto mb-3
                  h-12 w-12
                  rounded-full
                  bg-pink-300
                  flex items-center justify-center
                  text-sm font-bold text-gray-600
                "
              >
                {brand.name.charAt(0).toUpperCase()}
              </div>

              {/* Brand Name */}
              <p className="text-sm font-medium text-white-600">
                {brand.name}
              </p>
            </div>
          ))}
      </div>

      {/* Empty State */}
      {!loading && filteredBrands.length === 0 && (
        <p className="text-sm text-gray-500">
          No brands found
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default BrandStep;
