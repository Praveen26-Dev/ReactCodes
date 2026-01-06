// src/seller/components/SidebarSteps.jsx

const steps = [
  { id: 1, label: "Category" },
  { id: 2, label: "Brand" },
  { id: 3, label: "Product Information" },
  { id: 4, label: "Attributes" },
  { id: 5, label: "Variants" },
  { id: 6, label: "Pricing" },
  { id: 7, label: "Features" },
  { id: 8, label: "Product Specifications" },
  { id: 9, label: "Variant Image Upload" },
  { id: 10, label: "Image Upload" },
];

const SidebarSteps = ({ activeStep, setActiveStep }) => {
  return (
    <aside
      className="
        w-64 h-screen
        bg-gradient-to-b
        from-[#0d0a0a]
        via-[#1a1414]
        to-[#0d0a0a]
        text-[#f2eeee]
      "
    >
      {/* Header */}
      <div className="px-6 py-5 border-b border-[#241b1b]">
        <h2 className="text-lg font-semibold tracking-wide">
          Create Product
        </h2>
        <p className="text-xs text-[#cfc6c6] mt-1">
          Seller Panel
        </p>
      </div>

      {/* Steps */}
      <ul className="mt-4 px-3 space-y-1">
        {steps.map((step) => {
          const isActive = activeStep === step.id;

          return (
            <li
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`
                group flex items-center gap-3 cursor-pointer
                px-3 py-2 rounded-md text-sm
                transition-all duration-200
                ${
                  isActive
                    ? "bg-[#241b1b]/80 shadow-md"
                    : "hover:bg-[#241b1b]/50"
                }
              `}
            >
              {/* Step Number */}
              <span
                className={`
                  flex items-center justify-center
                  w-7 h-7 rounded-full text-xs font-semibold
                  transition-all
                  ${
                    isActive
                      ? "bg-[#e5dede] text-[#0d0a0a]"
                      : "bg-[#241b1b] text-[#f2eeee] group-hover:bg-[#2e2323]"
                  }
                `}
              >
                {step.id}
              </span>

              {/* Label */}
              <span
                className={`leading-tight ${
                  isActive ? "font-medium text-white" : ""
                }`}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SidebarSteps;
