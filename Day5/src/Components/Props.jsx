import React from 'react'

let Props = ({data})=>{
let {ename,age,batch}=data
  return (
   <>
   <h1>Hello From Props</h1>
   <p>This is created By {ename} and His Age is {age} and Bacth is {batch}</p>
   </>
  )
}

export default Props