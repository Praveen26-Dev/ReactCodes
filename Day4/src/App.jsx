import React from 'react'
import Props from './Props'

function App() {
  let obj={
  ename:"Praveen",
  age:21,
  batch:"P60"
  }
  return (
    <div>
    <h1>Loading Props.......</h1>
    <Props data={obj}/>
    </div>
  )
}

export default App