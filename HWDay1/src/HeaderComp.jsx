import React from 'react'

function HeaderComp() {
    let show=()=>{
        alert("Welcome to React Header!")
    }
  return (
    <div>
        <h1>1.This is Header</h1>
        <button onClick={show}>Click</button>
    </div>
  )
}

export default HeaderComp