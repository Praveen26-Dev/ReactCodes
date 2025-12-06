import React from 'react'
import './tailwindButton.css'
const TailwindButton = () => {
  return (
    <>
      <h1>Tailwind buttons.........</h1>
      <div className="flex gap-4 p-15">
      <button className="bg-blue-600 text-white px-6 py-3 text-sm rounded-lg hover:bg-blue-700 transition">
        Primary
      </button>
      <button className="bg-green-600 text-white px-6 py-3 text-sm rounded-lg hover:bg-green-700 transition">
        Success
      </button>
      <button className="bg-red-600 text-white px-6 py-3 text-sm rounded-lg hover:bg-red-700 transition">
        Danger
      </button>
    </div>
   
    </>
  )
}

export default TailwindButton