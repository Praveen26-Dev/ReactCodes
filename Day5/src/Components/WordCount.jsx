import React, { useState } from 'react'

const WordCount = () => {
    let [word , setWord] = useState('')
     
    let count=0;
    let funct= (e)=>{
        setWord(e.target.value)
        console.log(word)
    }
    for(let i=0;i<word.length;i++){
        count++
    }


  return (
    <>
      <h1>Word Count</h1>
      Enter Word : <input type="text" onChange={funct} />
    <br />
    <h3>Your Word :{word}</h3>
    <h3>Count : {count}</h3>
    </>
  )
}

export default WordCount