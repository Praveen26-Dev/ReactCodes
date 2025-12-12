import React, { useEffect, useState } from 'react'

const useEffectExample = () => {

   let [count,setCount] =useState(0)
  let Inc=()=>{
    setCount(count+1)

  }

  useEffect(()=>{
   console.log("Running..........")
  },[])
  return (
    <>
      <h1>Learning useEffect Hook.....</h1>

      <button onClick={Inc}>Increment</button><br />
      Count :{count}
    </>
  )
}

export default useEffectExample