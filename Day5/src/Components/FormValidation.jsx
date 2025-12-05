import React, { useState } from 'react'

const FormValidation = () => {
  let [formData,setData] = useState(
    {
      name:"",
      email:"",
      number:"",
      password:"",
      confirmPass:""
    }
  )

  let submitForm = (e)=>{
    e.preventDefault()

  }

  let changeData =(e)=>{

    setData(
      {...formData,[e.target.name]:e.target.value}
     )



  }
  return (
    <>
      <h1>Form Validation.............</h1>
      <form >

        Enter name : <input type="text" name="name" value={formData.name} onChange={changeData} required/><br />
        {/* <span>Name:{formData.name}</span><br /> */}
        Enter email : <input type="text" name="email" value={formData.email} onChange={changeData} required/><br />
        Enter number : <input type="text" name="number" value={formData.number} onChange={changeData} required  /><br />
        Enter password : <input type="text" name="pass" value={formData.password} onChange={changeData} required /><br />
        Confirm password : <input type="text" name="cpass" value={formData.confirmPass} onChange={changeData} required/><br />
        <button onSubmit={submitForm}>Submit</button>
      </form>
    </>
  )
}

export default FormValidation