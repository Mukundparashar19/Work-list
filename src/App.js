import './App.css';

import Header from './MyComponebts/Header.js'
import Footer from './MyComponebts/Footer.js';
import TodoItem from './MyComponebts/TodoItem.js';
import Todos from './MyComponebts/Todos.js';

function App() {
  return (
    <>
    <Header title="MyTodoList"  />
    <Footer/>
    <TodoItem/>
    <Todos/>
    </>
    
  );
}

export default App;
