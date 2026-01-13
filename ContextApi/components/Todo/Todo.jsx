import React, { useState } from 'react'

const Todo = ({todoData,isFinished,id}) => {
    const [finished ,setFininshed] = useState(isFinished)
  return (
    <div>
        <div>
            <input type='checkbox' checked={finished} onChange={(e)=>setFininshed(e.target.checked)}/>
                {todoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default Todo