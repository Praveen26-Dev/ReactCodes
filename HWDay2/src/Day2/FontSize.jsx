import React, { useState } from 'react'

const FontSize = () => {
    let [font,setFont] = useState(20)

    let Inc=()=>{
          setFont(font+2)
    }
    let Dec=()=>{
        if(font>6){
            setFont(font-2)
        }

    }
  return (
    <>
      <h1>Font Size Increment and Decrement</h1>
       <br />
      <p style={{fontSize:`${font}px`}}>This is the paragraph.Hello From Praveen</p>
    <br />
    <button style={{height:'40px',width:'40px'}} onClick={Inc}>+</button>
    <button style={{height:'40px',width:'40px'}} onClick={Dec}>-</button>
    
    </>
  )
}

export default FontSize