import React from 'react'

const mapProps = ({ name, duration }) => {
  return (
    <>
      {/* <h1>Heelo Form Map Props </h1> */}
      <br />
      <div className="border p-4 rounded-lg bg-gray-200 m-2 w-60">
      <h4 className="text-lg font-semibold">Name: {name}</h4>
      <p>Duration: {duration}</p>
    </div>

    </>
  )
}

export default mapProps