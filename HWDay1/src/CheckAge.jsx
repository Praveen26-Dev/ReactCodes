import React from 'react'

function CheckAge() {
    let Check=()=>{
        let num=Number(prompt("Enter Age"));
        if(num>18){

            alert("you are an Adult")
        }
        else{
            alert("You are a Minor")
        }
    }
  return (
    <div><h1>3.CheckAge</h1>
        <button onClick={Check}>Click Me</button>
    </div>
  )
}

export default CheckAge