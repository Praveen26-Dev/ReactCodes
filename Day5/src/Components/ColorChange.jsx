import React, { useState } from 'react'
import './colorChange.css'

const ColorChange = () => {
    let [color,setColor] =useState('')
    let change=(e)=>{
     setTimeout(()=>{
        setColor(e.target.value)
     },2000)   
     
    }
  return (
    <>
     <h1 className='text-4xl'>Color Changer</h1>
     <div className='border border-amber-600 h-70 w-60 m-10' style={{backgroundColor:color}}>
   
     </div>
     <br />
     {/* Enter Color <input type="text" /> */}
     <div>
            <label for="Enter Color" class="block mb-2.5 text-sm font-medium text-heading">Enter Color</label>
            <input type="text" id="first_name" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block  px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Color"
            onChange={change}
            />
        </div>
    </>
  )
}

export default ColorChange