import gsap from "gsap";

export const skeletonPulse = (el) => {
  gsap.to(el, {
    opacity: 0.4,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut",
  });
};
