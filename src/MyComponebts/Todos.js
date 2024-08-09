import React from 'react'
import TodoItem from './TodoItem.js'

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos list</h3>
      {props.todos.length===0? 'NO TODOS TO DISPLAY':
      props.todos.map((todo)=>{
      return  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />

      })}
    </div>
  )
}

export default Todos
