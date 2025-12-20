import React from 'react'
import videoFile from "../../assets/69496b2d.mp4";
import '../../App.css'

const Video = () => {
  return (
    <div className='h-full w-full'>
          <video className='h-full w-full object-cover' src={videoFile} autoPlay loop muted></video>
    </div>
  )
}

export default Video