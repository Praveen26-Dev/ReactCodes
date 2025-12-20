import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-3 '>

        <Link className='text-[6.5vw] leading-[6vw] border-5 border-white rounded-full px-10 pt-3  uppercase'>Work</Link>
        <Link className='text-[6.5vw] leading-[6vw] border-5 border-white rounded-full px-10 pt-3  uppercase'>Agence</Link>
    </div>
  )
}

export default HomeBottomText