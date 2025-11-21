import React from 'react'

function ClickMeButton() {
    let fun=()=>{
        alert("Button was Clicked!")
    }
  return (
    <div>
        <h1>2.ClickMeButton</h1>
        <br />
        <br />
        <button onClick={fun}>Click Me</button>
    </div>
  )
}

export default ClickMeButton