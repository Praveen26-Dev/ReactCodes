import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sellerController } from "../../controller/sellerController";

const Products = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    categoryId: "",
    brandId: "",
  });

  /* ========== SLUG GENERATOR ========== */
  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  /* ========== LOAD PRODUCTS ==========
     ⚠️ Your backend does NOT have GET /api/products yet
     So we will NOT fetch list here
  */
  useEffect(() => {
    // keep empty for now
  }, []);

  /* ========== CREATE PRODUCT ========== */
  const createProduct = async (e) => {
    e.preventDefault();

    if (!form.name || !form.categoryId || !form.brandId) {
      alert("Name, CategoryId and BrandId are required");
      return;
    }

    const payload = {
      name: form.name,
      slug: generateSlug(form.name),
      description: form.description,
      categoryId: Number(form.categoryId),
      brandId: Number(form.brandId),
    };

    try {
      setLoading(true);
      const createdProduct =
        await sellerController.createProduct(payload);

      alert("Product created successfully");

      // reset form
      setForm({
        name: "",
        description: "",
        categoryId: "",
        brandId: "",
      });

      // OPTIONAL: go directly to variants
      navigate(
        `/seller/products/${createdProduct.id}/variants`
      );
    } catch (err) {
      console.error(err);
      alert("Product creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Create Product</h1>

      <form
        onSubmit={createProduct}
        className="bg-white p-6 rounded-lg shadow space-y-4 max-w-xl"
      >
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 rounded w-full"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="border p-2 rounded w-full"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Category ID"
          className="border p-2 rounded w-full"
          value={form.categoryId}
          onChange={(e) =>
            setForm({ ...form, categoryId: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Brand ID"
          className="border p-2 rounded w-full"
          value={form.brandId}
          onChange={(e) =>
            setForm({ ...form, brandId: e.target.value })
          }
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default Products;
