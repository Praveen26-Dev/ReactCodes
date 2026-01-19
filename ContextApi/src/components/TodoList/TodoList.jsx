import React, { useState } from 'react'
import Todo from "../Todo/Todo"
import { useContext } from 'react'
import TodoContext from '../../context/TodoContext'
const TodoList = () => {
  
  const {list,setList} = useContext(TodoContext);
  
  return (

    <div>
        {
        list.length > 0 && 
        list.map(todo => 
        <Todo 
           key={todo.id} 

           id={todo.id}
           isFinished={todo.finished} 
           todoData={todo.todoData}
           changeFinished={(isFinished)=>{
            const updatedList = list.map(
              t=>{
                if(t.id == todo.in){
                  todo.finished = isFinished
                }
                return t
              }); 
           setList(updatedList);      
    
          }}
    
          onDelete={
          ()=>{
             const updatedList = list.filter(t => t.id != todo.id)
             setList(updatedList)
          }}

          onEdit={()=>{
            const updatedList = list.map(
              t=>{
               if(t.id==todo.id){
                return t;
               }
              })
              setList(updatedList)
          }}
        />)}
    </div>
  )
}

export default TodoList