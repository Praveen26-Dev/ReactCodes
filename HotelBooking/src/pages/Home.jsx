import Navbar from '../components/navbar/Navbar'
import HeroSlider from '../components/hotel/HeroSlider'
import SearchBar from '../components/hotel/SearchBar'
import FeaturedHotels from '../components/hotel/FeaturedHotels'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <SearchBar />
      <FeaturedHotels />
    </>
  )
}

export default Home
