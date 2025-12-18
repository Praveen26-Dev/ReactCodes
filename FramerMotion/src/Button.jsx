import React from 'react'
import {motion} from 'motion/react'
import './App.css'
const Button = () => {
  return (
   <>
    {/* <motion.div>
        <motion.img src="https://images.unsplash.com/photo-1765915968433-86d4d13ae1a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="img" />
    </motion.div> */}

    <h1>Hello</h1>
     <motion.div className='bg-black h-screen w-full'> 
        <motion.img src="https://images.unsplash.com/photo-1765915968433-86d4d13ae1a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="img" 
        className='h-screen w-full border  border-red-500 '
        
        initial={{ maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)" }}
        animate={{ maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)" }}
        />
    </motion.div>
   </>
  )
}

export default Button