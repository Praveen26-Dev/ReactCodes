import React, { useState } from 'react'

const FormHandling = () => {

    let [name,setName] = useState("")
    let [age ,setAge] = useState("")
    let printData=(e)=>{
       setName(e.target.value)
       
    }
    let printAge=(e)=>{
       setAge(e.target.value)
    }
  return (
    <>
    <h1>Form Handling................</h1>
    
    Enter Name : <input type="text" onChange={printData} />
    <br />
    <h3>Your name is: {name}</h3>

    <br />

    <br />
    Your Age : <input type="text" onChange={printAge}/>
    <br />
    <h3>Your Age is: {age}</h3>
    </>
  )
}

export default FormHandling