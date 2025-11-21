import React from 'react'

function ShowNumber() {
    let numShow=()=>{
        let i=1
    while(i<=5){
  console.log(i)
  i++
    }
    }
  return (

    <div>
        <h1>5.Show Number</h1>
        <button onClick={numShow}>Show Numbers</button>
    </div>
  )
}

export default ShowNumber