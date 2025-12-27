import { useEffect, useRef } from "react";
import { skeletonPulse } from "../animations/skeletonAnimations";

const SkeletonCard = () => {
  const ref = useRef(null);

  useEffect(() => {
    skeletonPulse(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className="h-72 bg-gray-300 rounded-lg"
    />
  );
};

export default SkeletonCard;
