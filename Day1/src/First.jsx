import React from 'react'

function First() {
    const city="Delhi"
    let a = 10;
    let b= 20;
    const headingStyle={
        color:"purple",
        backgroundColor:"yellow",
        padding:"10px"
    }
    let year = new Date().getFullYear();

  return (
    <div>
        <h1 style={headingStyle}>Hello From Praveen!!!!</h1>
        <p>My City is <b>{city}</b></p>
        <b>Sum</b> is {a+b}
        <h3>Year is :{year}</h3>
    </div>
  )
}

export default First