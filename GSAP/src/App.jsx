import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import './App.css'
const App = () => {

  const box = useRef(null);
  useEffect(() => {
  gsap.from(".item", {
    y: 40,
    // opacity: 0,
    stagger: 0.5
  });
}, []);
  return (
    <>
     <div className='bg-black h-screen w-full text-gray-400' >
            <h1>Hello</h1>
             
            {/* <div 
            ref={box} 
            style={{
              width:400,
              height:400,
              background:"red"
            }}
            ></div> */}
                {[1,2,3,4].map(i => (
                     <div className="item text-red" key={i}>Box</div>
                ))}
     </div>
     
    </>
  )
}

export default App