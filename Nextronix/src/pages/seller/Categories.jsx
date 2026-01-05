import { useState } from "react";
import { sellerController } from "../../controller/sellerController";
import SellerTable from "../../components/seller/SellerTable";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [parentTempId, setParentTempId] = useState("");

  /* ================= ADD CATEGORY LOCALLY ================= */
  const addCategory = () => {
    if (!name.trim()) return;

    const tempId = crypto.randomUUID(); // ✅ unique temp id

    setCategories((prev) => [
      ...prev,
      {
        tempId,
        name: name.trim(),
        slug: name.trim().toLowerCase().replace(/\s+/g, "-"),
        parentTempId: parentTempId || null,
      },
    ]);

    setName("");
    setParentTempId("");
  };

  /* ================= SUBMIT BULK ================= */
  const submitCategories = async () => {
    if (categories.length === 0) return;

    try {
      await sellerController.createCategoriesBulk(categories);
      alert("Categories created successfully");
      setCategories([]);
    } catch (err) {
      console.error("Bulk category creation failed", err);
    }
  };

  /* ================= TABLE CONFIG ================= */
  const columns = [
    { key: "name", label: "Category Name" },
    { key: "slug", label: "Slug" },
    { key: "parentName", label: "Parent Category" },
    { key: "level", label: "Level (Preview)" },
  ];

  const tableData = categories.map((cat) => {
    const parent = categories.find(
      (c) => c.tempId === cat.parentTempId
    );

    return {
      ...cat,
      parentName: parent ? parent.name : "ROOT",
      level: parent ? (parent.level ?? 0) + 1 : 0, // 🔥 level preview
    };
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Category Management
      </h1>

      {/* ===== CREATE CATEGORY FORM ===== */}
      <div className="bg-white p-6 rounded-lg shadow mb-8 max-w-xl">
        <h2 className="text-lg font-semibold mb-4">
          Add Category
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Category Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g. Appliances"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Parent Category
          </label>
          <select
            value={parentTempId}
            onChange={(e) => setParentTempId(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">ROOT</option>
            {categories.map((cat) => (
              <option key={cat.tempId} value={cat.tempId}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={addCategory}
          className="bg-gray-800 text-white px-4 py-2 rounded mr-3"
        >
          Add to List
        </button>

        <button
          onClick={submitCategories}
          disabled={categories.length === 0}
          className="bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded"
        >
          Save All
        </button>
      </div>

      {/* ===== PREVIEW TABLE ===== */}
      <SellerTable columns={columns} data={tableData} />
    </div>
  );
};

export default Categories;
