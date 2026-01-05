import React from 'react'

const Todo = ({todoData}) => {
  return (
    <>
    <input type="checkbox" />
     {todoData}
     <button>Edit</button>
     <button>Delete</button>
     <br />
    </>
  )
}

export default Todo