import gsap from "gsap";

export const heroIntroAnimation = (container) => {
  const tl = gsap.timeline();

  tl.from(container.querySelector(".hero-bg"), {
    scale: 1.15,
    duration: 1.8,
    ease: "power3.out",
  })
    .from(
      container.querySelectorAll(".hero-text span"),
      {
        y: 80,
        opacity: 0,
        stagger: 0.08,
        ease: "power4.out",
      },
      "-=1.2"
    )
    .from(
      container.querySelector(".hero-search"),
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.6"
    );
};
