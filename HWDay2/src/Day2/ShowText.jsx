import React, { useState } from 'react'

const ShowText = () => {
    let [text,setText] = useState('')
   
    let [heading, setHeading] = useState('')

    let fillText=(e)=>{
       setText(e.target.value)

    }
    let showHeading=(e)=>{

          setHeading(text)
    }
    
  return (
    <>
     <h2>{heading}</h2><br />
     Enter Text : <input type="text" value={text} onChange={fillText}/><br />
     {/* <input type="submit" value="Submit" onSubmit={showHeading}/> */}
     <button onClick={showHeading}>Submit</button>
    </>
  )
}

export default ShowText