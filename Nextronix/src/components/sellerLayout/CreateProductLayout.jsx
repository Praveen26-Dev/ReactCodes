// src/seller/layouts/CreateProductLayout.jsx
import SidebarSteps from "./SidebarSteps";
import { useSellerProduct } from "../../context/SellerProductContext";

// step pages
import CategoryStep from "../../pages/seller/CategoryStep";
import BrandStep from "../../pages/seller/BrandStep";
import ProductInfoStep from "../../pages/seller/ProductInfoStep";
import AttributeSelectionStep from "../../pages/seller/AttributeSelectionStep";
import VariantStep from "../../pages/seller/VariantStep";
import VariantPricingStep from "../../pages/seller/VariantPricingStep";
import ProductFeatureStep from "../../pages/seller/ProductFeatureStep";
import ProductSpecificationStep from "../../pages/seller/ProductSpecificationStep";
import VariantImageUploadStep from "../../pages/seller/VariantImageUploadStep";
import ImageUploadStep from "../../pages/seller/ImageUploadStep";

const CreateProductLayout = () => {
  const { activeStep, setActiveStep } = useSellerProduct(); // ✅ GLOBAL

  const goNext = () => setActiveStep((prev) => prev + 1);
 console.log("ACTIVE STEP:", activeStep);
  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <CategoryStep onNext={goNext} />;
      case 1:
        return <BrandStep onNext={goNext} />;
      case 2:
        return <ProductInfoStep onNext={goNext} />;
      case 3:
        return <AttributeSelectionStep onNext={goNext} />;
      case 4:
        return <VariantStep onNext={goNext} />;
      case 5:
        return <VariantPricingStep onNext={goNext} />;
      case 6:
        return <ProductFeatureStep onNext={goNext} />;
      case 7:
        return <ProductSpecificationStep onNext={goNext} />;
      case 8:
        return <VariantImageUploadStep onNext={goNext} />;
      case 9:
        return <ImageUploadStep onNext={goNext} />;
      default:
        return <div className="text-gray-400">Step coming soon…</div>;
    }
  };

  return (
    <div
      className="
        flex min-h-screen
        bg-gradient-to-br
        from-[#0d0a0a]
        via-[#1a1414]
        to-[#241b1b]
      "
    >
      {/* SIDEBAR */}
      <SidebarSteps
        activeStep={activeStep + 1}
        setActiveStep={(step) => setActiveStep(step - 1)}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 px-8 py-6 text-white">
      <div className="min-h-[85vh] rounded-lg p-6 bg-black/30 backdrop-blur-md">

          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default CreateProductLayout;
