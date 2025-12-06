import React, { useState } from 'react'
import './toggle.css'
const Toggel = () => {
    let [dark ,setDark] =useState(false)

    let toggleMode=()=>{
      setDark(!dark)
    }
  return (
    <>
      <div
      className={`min-h-screen flex flex-col items-center justify-center transition duration-300 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-5">Dark Mode Toggle</h1>

      <button
        onClick={toggleMode}
        className="px-6 py-3 rounded-lg bg-gray-700 text-white hover:bg-gray-900"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
    </>
  )
}

export default Toggel