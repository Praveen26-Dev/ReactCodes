import React from 'react'
import '../../App.css'
import Video from './Video'
const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-4 text-center'>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>The spark for</div>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-start items-center'>
            all
            <div className='h-[7vw] w-[16vw] rounded-full -mt-3'>
                <Video/>
            </div>
            things
        </div>
        <div className='text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center'>creative</div>
    </div>
  )
}

export default HomeHeroText