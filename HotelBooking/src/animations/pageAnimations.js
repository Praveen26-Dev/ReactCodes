import gsap from "gsap";

export const pageEnterAnimation = (container) => {
  gsap.from(container, {
    opacity: 0,
    y: 30,
    duration: 0.5,
    ease: "power2.out",
  });
};
