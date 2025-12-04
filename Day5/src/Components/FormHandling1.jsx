import React, { useState } from 'react'

const FormHandling1 = () => {

    let [name,setName]=useState('')
    let [city,setCity]=useState('')

    let handleSubmit=(e)=>{
      
        e.preventDefault();

    }

  return (
    <>
     <h1>Form Handling...................</h1>
      <form onSubmit={handleSubmit}>

        Enter name : <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value)
            console.log(name)
             }
            }/> 
        <br />
        <br />
        <span>Name:{name}</span>
        <br />
         <br />
        Enter city : <input type="text" value={city} onChange={(e)=>{
            setCity(e.target.value)
            console.log(city)
        }}/>
        <br />
        <br />
        <span>City:{city}</span><br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default FormHandling1