import React from 'react'
import Video from '../components/home/Video'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroText from '../components/home/HomeHeroText'
const Home = () => {
  return (
   <div>
     <div className='h-screen w-screen fixed'>
        
       <Video/>
     </div>

     <div className='h-screen w-screen relative flex flex-col justify-between'>
         <HomeHeroText/>
         <HomeBottomText/>
     </div>
   </div>
  )
}

export default Home