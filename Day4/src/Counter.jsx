import React, { useState } from 'react'

const Counter = () => {
    
    let [value,setValue] = useState(0)
    
    // let value=0
    let Inc=()=>{
        if(value<20){
         setValue(++value)
         console.log(value)
    }
    }
    let Dec=()=>{
        if(value>0){
        setValue(--value);
        console.log(value)
        }
    }
  return (
    <>
      
      <h1>Heelo From Counter App</h1>

      <h2>Count : {value}</h2>
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>
    <p>Couter is : {value}</p>
    <button>Footer : {value}</button>
    </>
  )
}

export default Counter