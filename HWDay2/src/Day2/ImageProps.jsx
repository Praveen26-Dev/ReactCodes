import React from 'react'

const ImageProps = ({ name, city, img}) => {
  return (
    <>
      <div>
        <h1>Image Props...............</h1>
      <div className="card-container">
        <img
          src={img}
          alt={name}
        />

        <div>
          <h2>Name :</h2>
          <span>{name}</span>
        
          <h2>City :</h2>
          <span>{city}</span>
        </div>
      </div>
     </div> 
    
    </>
  )
}

export default ImageProps