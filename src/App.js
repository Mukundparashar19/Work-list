import './App.css';

import Header from './MyComponebts/Header.js'
import Footer from './MyComponebts/Footer.js';
import Todos from './MyComponebts/Todos.js';
import AddTodo from './MyComponebts/AddTodo.js';
import About from './MyComponebts/About.js';
import React , { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
let initTodo;
if(localStorage.getItem("todos")===null){
  initTodo = [];
}
else{
  initTodo = JSON.parse(localStorage.getItem("todos"));
}



const onDelete = (todo) =>{
  console.log('i am on delete',todo);
  
  setTodos(todos.filter((e) =>{
    return e!==todo; 
  }))
  localStorage.setItem("todos",JSON.stringify(todos))
}

const addTodo = (title, desc) => {
  console.log("i am adding this todo", title, desc)
  let sno;
  if(todos.length==0){
    sno = 0
  }
  else{
  sno = todos[todos.length-1].sno +1;
  }
const myTodo = {
sno: sno,
title: title,
desc: desc,
}
setTodos([...todos,myTodo])
console.log(myTodo);
}



  const [todos, setTodos] = useState(initTodo)
  useEffect(()=> {
    localStorage.setItem("todos",JSON.stringify(todos))
  
  }, [todos])

  return (
    <>
    <Router>
    <Header title="MyTodoList"  />
    <Routes>
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>

 
    
    <Footer/>
    </Router>
    </>
    
  );
}

export default App;
