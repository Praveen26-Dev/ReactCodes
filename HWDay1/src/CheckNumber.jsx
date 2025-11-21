import React from 'react'

function CheckNumber() {
    let numCheck=()=>{
        let num=Number(prompt("Enter Number"));
        
        if(num>0){
            alert("Positive")
        }
        else if(num<0){
            alert("Negitive")
        }
        else if(num===0){
            alert("Zero")
        }
        else{
            alert("Wrong Input")
        }
    }
  return (

    <div>
        <h1>4.CheckNumber</h1>
        <button onClick={numCheck}>Check Number</button>
    </div>
  )
}

export default CheckNumber