import { useEffect, useState } from "react";
import buyerController from "../../controller/buyerController";
import ProductCard from "../../components/buyer/ProductCard";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buyerController
      .getAllProductCards()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#120e0e] text-gray-400">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#120e0e] text-gray-400">
        No products available
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#120e0e]">
      {/* HEADER */}
      <div className="border-b border-white/10 bg-[#1a1414]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h2 className="text-3xl font-semibold text-white">
            Explore Products
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Discover premium products curated for you
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
