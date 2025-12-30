import CategoryBar from "../components/CategoryBar";
import HeroBanner from "../components/HeroBanner";
import DealsRow from "../components/DealsRow";
import ProductGrid from "../components/ProductGrid";
import Sidebar from "../components/SideBar";

const Home = () => {
  return (
    // 🔥 REMOVED min-h-screen
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      <CategoryBar />

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-8">
        <aside className="w-64 hidden md:block">
          <Sidebar />
        </aside>

        <main className="flex-1 space-y-20">
          <HeroBanner />
          <DealsRow />
          <ProductGrid />
        </main>
      </div>

    </div>
  );
};

export default Home;
