import gsap from "gsap";

export const cardHoverAnimation = (card) => {
  const img = card.querySelector("img");

  card.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power2.out" });
    gsap.to(card, {
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      duration: 0.3,
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, duration: 0.4 });
    gsap.to(card, { y: 0, boxShadow: "none", duration: 0.3 });
  });
};
