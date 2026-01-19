import React, {useState} from 'react'
//import Todo from "../components/Todo/Todo"
import TodoList from './components/TodoList/TodoList'
import AddTodo  from './components/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'
// import { useState } from 'react'
const App = () => {
   const [list,setList ]=useState([
        {id:1,todoData:'todo 1',finished:'true'},
        {id:2,todoData:'todo 2',finished:'true'},
    ])
  return (
    <TodoContext.Provider value={{list,setList}}>
        <AddTodo updateList={(todo)=>setList([
          ...list ,
          {
            id:list.length+1,
            todoData:todo,
            finished:todo.finished
          }
        ])}/>
        <br />
        <TodoList/>
    </TodoContext.Provider>
  )
}

export default App