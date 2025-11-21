import React from 'react'

function CountEven() {

    let evenCount=()=>{
        let i=1
        let count=0
        while(i<=10){
         if(i%2==0){
            count++
         }   
         i++
        }
        alert(`Total even Numbers = ${count}`)
    }
  return (
    <div>
       <h1>6.CountEven </h1>
       <button onClick={evenCount}>Count Even</button>
    </div>
  )
}

export default CountEven