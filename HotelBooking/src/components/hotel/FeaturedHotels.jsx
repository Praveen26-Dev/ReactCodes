import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import '../../App.css'
const hotels = [
  { name: 'Grand Palace', price: '$180 / night' },
  { name: 'Ocean View', price: '$220 / night' },
  { name: 'Mountain Resort', price: '$150 / night' },
]

const FeaturedHotels = () => {
  const cardsRef = useRef([])

  useGSAP(() => {
  gsap.to(cardsRef.current, {
  y: -20,
  stagger: 0.1,
  scrollTrigger: {
    trigger: cardsRef.current[0],
    start: 'top 80%',
    scrub: true,
  }

  })
})

  return (
    <section className="py-24 px-6">
      <h2 className="text-5xl font-bold mb-12">Featured Hotels</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {hotels.map((h, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="p-6 rounded-2xl bg-gray-100 hover:scale-[1.03] transition cursor-pointer"
          >
            <div className="h-48 bg-gray-300 rounded-xl mb-4"></div>
            <h3 className="text-2xl font-semibold">{h.name}</h3>
            <p className="text-gray-600">{h.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedHotels
