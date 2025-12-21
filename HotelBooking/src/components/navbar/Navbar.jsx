import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import '../../App.css'
const Navbar = () => {
  const navRef = useRef(null)

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-white/80 backdrop-blur"
    >
      <h1 className="text-2xl font-bold">StayEase</h1>
      <div className="flex gap-6">
        <button>Home</button>
        <button>Hotels</button>
        <button className="bg-black text-white px-5 py-2 rounded-xl">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
