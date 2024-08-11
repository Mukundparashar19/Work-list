import './App.css';

import Header from './MyComponebts/Header.js'
import Footer from './MyComponebts/Footer.js';
import Todos from './MyComponebts/Todos.js';
import AddTodo from './MyComponebts/AddTodo.js';
import React , { useState } from 'react';

function App() {
const onDelete = (todo) =>{
  console.log('i am on delete',todo);
  
  setTodos(todos.filter((e) =>{
    return e!==todo; 
  }))
}


  const [todos, setTodos] = useState([ 
    {
      sno:1,
      title:'go to the market',
      decs:'one one one one'
    },
    {
      sno:2,
      title:'go to the Bazar',
      decs:'tho teo two two'
    },
    {
      sno:3,
      title:'go to the Shop',
      decs:'three therr three three'
    },
  ])


  return (
    <>
    <Header title="MyTodoList"  />
    <AddTodo/>
    
    <Todos  todos={todos} onDelete={onDelete}/>
    
    <Footer/>
    </>
    
  );
}

export default App;
