import React, {useState, useRef} from 'react';
import Todos from './Todos';
import { v4 as uuid } from "uuid";

function App() {

  const [todos, setTodos] = useState([]);
  

  const handleRef = useRef();

  const handleOnClick = () =>{
    const name = handleRef.current.value;
    if(name==="") return
    setTodos(prevTodos =>{
      return [...prevTodos, {id:uuid(), name:name}]
    });
    handleRef.current.value = "";
  }

  

  return (
    <>
      <h1>Todo App</h1>
      <input type="text" name="todo" ref={handleRef}/>
      <button type="button" onClick={handleOnClick}>Add todo</button>

      <hr style={{marginTop: '20px'}}/>

      <h1>Tasks:</h1>

      <Todos todos={todos}/>
    </>
  );
}

export default App;
