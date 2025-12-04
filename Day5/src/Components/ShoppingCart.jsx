import React, { useState } from 'react'

const ShoppingCart = (props) => {
    let [item, setItems] =useState({items:props.items,total:props.items.length});
    
    let cartUpdate =()=>{
        console.log("update cart called")
        let newItems=[...item.items,"Dell Inspiron-Laptop"]
        let newTotal = item.total+1

        setItems({items:newItems,total:newTotal})
    }

    setTimeout(cartUpdate,5000)
    // clearTimeout(timer)
  return (
    <>
      <h1>Shopping Cart.............</h1>
      <div>
          <h2>Your Cart Details </h2>
           <h3>Product Details :{item.items.join(", ")}</h3> 
           <h3>Product Details :{item.total}</h3> 
          
      </div>
      
    </>
  )
}

export default ShoppingCart