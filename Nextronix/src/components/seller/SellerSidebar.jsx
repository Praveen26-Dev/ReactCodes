import { NavLink, useLocation } from "react-router-dom";
import {
  FaBox,
  FaTags,
  FaLayerGroup,
  FaThList,
  FaChevronDown,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const SellerSidebar = () => {
  const location = useLocation();
  const [openProducts, setOpenProducts] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/seller/products")) {
      setOpenProducts(true);
    }
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "text-gray-700 hover:bg-gray-200"
     }`;

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6 text-blue-600">
        Seller Panel
      </h2>

      <nav className="flex flex-col gap-2">
        <NavLink to="/seller/categories" className={linkClass}>
          <FaThList /> Categories
        </NavLink>

        <NavLink to="/seller/attributes" className={linkClass}>
          <FaLayerGroup /> Attributes
        </NavLink>

        <button
          onClick={() => setOpenProducts(!openProducts)}
          className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium
                     text-gray-700 hover:bg-gray-200"
        >
          <span className="flex items-center gap-3">
            <FaBox /> Products
          </span>
          <FaChevronDown
            className={`transition-transform ${
              openProducts ? "rotate-180" : ""
            }`}
          />
        </button>

        {openProducts && (
          <div className="ml-6 flex flex-col gap-1">
            <NavLink to="/seller/products" className={linkClass}>
              All Products
            </NavLink>

            <span className="text-xs text-gray-500 px-4">
              Variants are managed per product
            </span>
          </div>
        )}

        <NavLink to="/seller/orders" className={linkClass}>
          <FaTags /> Orders (later)
        </NavLink>
      </nav>
    </aside>
  );
};

export default SellerSidebar;
