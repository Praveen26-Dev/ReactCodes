import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import '../../App.css'
import {
  initHeroSlider,
  changeHeroSlide,
  startAutoSlide,
  stopAutoSlide,
} from '../../animations/heroSlider'

const slidesData = [
  {
    type: 'image',
    title: 'Luxury Resorts',
    subtitle: 'Experience world-class comfort',
    image:
      'https://images.unsplash.com/photo-1501117716987-c8e3f6a3d180',
    overlay: 'bg-[#0B1C2D]/60',
  },
  {
    type: 'image',
    title: 'City Hotels',
    subtitle: 'Stay close to everything',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    overlay: 'bg-black/50',
  },
  {
    type: 'video',
    title: 'Beachside Escape',
    subtitle: 'Wake up to ocean views',
    video: '/hotel-video.mp4', // put in public/
    overlay: 'bg-[#0B1C2D]/40',
  },
  {
    type: 'image',
    title: 'Mountain Retreat',
    subtitle: 'Peace beyond imagination',
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
    overlay: 'bg-black/55',
  },
]


const HeroSlider = () => {
  const slidesRef = useRef([])
  const [active, setActive] = useState(0)

  // 👉 Initial setup + auto slide
  useGSAP(() => {
    initHeroSlider(slidesRef.current, 0)

    startAutoSlide(() => {
      setActive((prev) => {
        const next = (prev + 1) % slidesData.length
        changeHeroSlide(slidesRef.current, prev, next)
        return next
      })
    })

    return () => stopAutoSlide()
  }, [])

  // 👉 Hover handlers
  const handleMouseEnter = () => {
    stopAutoSlide()
  }

  const handleMouseLeave = () => {
    startAutoSlide(() => {
      setActive((prev) => {
        const next = (prev + 1) % slidesData.length
        changeHeroSlide(slidesRef.current, prev, next)
        return next
      })
    })
  }

  return (
    <section
      className="h-screen w-full relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slidesData.map((slide, i) => (
        <div
          key={i}
          ref={(el) => (slidesRef.current[i] = el)}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-[9vw] font-bold uppercase leading-none">
              {slide.title}
            </h1>
            <p className="mt-4 text-xl">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === active) return
              changeHeroSlide(slidesRef.current, active, i)
              setActive(i)
            }}
            className={`h-3 w-3 rounded-full ${
              active === i ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
