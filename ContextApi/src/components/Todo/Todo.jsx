import React, { useState } from 'react'

const Todo = ({todoData,isFinished,changeFinished,onDelete,onEdit}) => {
    const [finished ,setFininshed] = useState(isFinished)
    const [isEditing,setIdEditing] = useState(false)
    const [editText,setEditText] = useState(todoData)
  return (
    <div>
        <div>
            <input type='checkbox' checked={finished} onChange={(e)=>{
                setFininshed(e.target.checked)
                changeFinished(e.target.checked)
            }}/>

             {(isEditing) ? <input type='text' value={editText} onChange={e=>{setEditText(e.target.value)}}/>: <span>{todoData}</span>}
            <button onClick={()=>{
                setIdEditing(!isEditing)
                onEdit(editText)
            }}> {(!isEditing ? 'Edit':'Save')}</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Todo