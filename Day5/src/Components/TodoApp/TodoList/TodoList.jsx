import React, { useState } from 'react'
import Todo from '../Todo/Todo'

const TodoList = () => {
    const [list,setList] =useState([
       {
        id:1,
        todoData:"todo 1"
       },
       {
        id:2,
        todoData:"todo 2"
       }, 
])
  return (
    <>
      <div>
        {
        list.length>0 && list.map(todo => <Todo key={todo.id} todoData={todo.todoData}/>) 
        
        }
        <br />
      </div>
       
    </>
  )
}

export default TodoList