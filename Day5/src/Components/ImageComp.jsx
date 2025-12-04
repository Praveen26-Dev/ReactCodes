import React from 'react'
import img from "./assets/img.avif" 
import img1 from "../public/img1.avif"
function ImageComp() {
  return (
    <div>ImageComp <br />
       <img style={{height:'150px',width:'150px'}} src={img} alt="" />
       <br />
       <img src={img1} alt="" />
    </div>
  )
}

export default ImageComp