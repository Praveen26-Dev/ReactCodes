import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import '../../App.css'
const SearchBar = () => {
  const barRef = useRef(null)
  const buttonRef = useRef(null)

  useGSAP(() => {
    gsap.from(barRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.8,
    })
  }, [])

  const handleFocus = (e) => {
    gsap.to(e.target, {
      borderColor: '#D3FD50',
      duration: 0.3,
    })
  }

  const handleBlur = (e) => {
    gsap.to(e.target, {
      borderColor: '#ccc',
      duration: 0.3,
    })
  }

  const handleHover = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <div
      ref={barRef}
      className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[90%] lg:w-[70%] bg-white rounded-2xl shadow-xl px-6 py-4 flex flex-col lg:flex-row gap-4"
    >
      <input
        className="flex-1 border-b outline-none text-lg"
        placeholder="City or Hotel"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <input
        type="date"
        className="flex-1 border-b outline-none text-lg"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <input
        type="number"
        className="flex-1 border-b outline-none text-lg"
        placeholder="Guests"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <button
        ref={buttonRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="bg-black text-white px-8 py-3 rounded-xl"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
