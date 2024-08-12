import React from 'react'
import TodoItem from './TodoItem.js'

const Todos = (props) => {
let myStyle = {
  minHeight:"70vh",
  margin:" 40px auto"
}

  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center my-3'>Todos list</h3>
      {props.todos.length===0? 'NO TODOS TO DISPLAY':
      props.todos.map((todo)=>{
      return  (
        <>
       <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
       </>
      )
      })}
    </div>
  )
}

export default Todos
