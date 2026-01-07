import { createContext, useContext, useState } from "react";

const SellerProductContext = createContext(null);

export const SellerProductProvider = ({ children }) => {
  // 🔑 STEP CONTROL
  const [activeStep, setActiveStep] = useState(0);

  // 🔑 CORE SELLER DATA
  const [categoryId, setCategoryId] = useState(null);
  const [brandId, setBrandId] = useState(null);
  const [productId, setProductId] = useState(null);
  const [variantId, setVariantId] = useState(null);
  const [name, setName] = useState("");

  // 🔥 ATTRIBUTE SELECTION (ID ONLY)
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const resetSellerProduct = () => {
    setActiveStep(0);
    setCategoryId(null);
    setBrandId(null);
    setProductId(null);
    setVariantId(null);
    setName("");
    setSelectedAttributes([]);
  };

  return (
    <SellerProductContext.Provider
      value={{
        activeStep,
        setActiveStep,

        categoryId,
        setCategoryId,

        brandId,
        setBrandId,

        productId,
        setProductId,

        variantId,
        setVariantId,

        name,
        setName,

        // 🔥 ATTRIBUTE STATE
        selectedAttributes,
        setSelectedAttributes,

        resetSellerProduct,
      }}
    >
      {children}
    </SellerProductContext.Provider>
  );
};

export const useSellerProduct = () => {
  const ctx = useContext(SellerProductContext);
  if (!ctx) {
    throw new Error(
      "useSellerProduct must be used inside SellerProductProvider"
    );
  }
  return ctx;
};
