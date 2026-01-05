import { Outlet } from "react-router-dom";
import SellerSidebar from "../../components/seller/SellerSidebar";

const SellerLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SellerSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default SellerLayout;
