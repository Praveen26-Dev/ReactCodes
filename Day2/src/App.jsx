import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Footer1,Footer2 } from './Footer'

function App() {

function Praveen(){
  let age=Number(prompt("enter your age"))
  if(age>=18){
    alert("Eligible to vote")
  }
  else
  {
    alert("not Eligible to vote")
  }
}

  return (
    <div>
      <h2><Navbar/></h2>
      <h1>HomePage 
      </h1>
      <h2><Footer/></h2>
      <Footer1/>
      <Footer2/>
      <button onClick={Praveen}>Click Me</button>
    </div>
  )
}
export default App