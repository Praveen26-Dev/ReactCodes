import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-3 '>

        <Link to='/projects' className='text-[6.5vw] leading-[6vw] border-5 border-white rounded-full px-10 pt-3  uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'>Work</Link>
        
        <Link to='/agence' className='text-[6.5vw] leading-[6vw] border-5 border-white rounded-full px-10 pt-3  uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'>Agence</Link>
    </div>
  )
}

export default HomeBottomText