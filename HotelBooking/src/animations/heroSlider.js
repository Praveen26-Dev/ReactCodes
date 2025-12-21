import gsap from 'gsap'

let intervalId = null

// 👉 Initial visibility setup
export const initHeroSlider = (slides, activeIndex) => {
  gsap.set(slides, { opacity: 0 })
  gsap.set(slides[activeIndex], { opacity: 1, scale: 1 })
}

// 👉 Slide transition animation
export const changeHeroSlide = (slides, from, to) => {
  if (!slides[from] || !slides[to]) return

  const tl = gsap.timeline()

  tl.to(slides[from], {
    opacity: 0,
    scale: 1.05,
    duration: 0.8,
    ease: 'power3.inOut',
  })

  tl.fromTo(
    slides[to],
    { opacity: 0, scale: 1.05 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.inOut',
    },
    '-=0.4'
  )
}

// 👉 Auto slide
export const startAutoSlide = (callback) => {
  stopAutoSlide() // safety: avoid multiple intervals
  intervalId = setInterval(callback, 5000)
}

// 👉 Stop auto slide
export const stopAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}
