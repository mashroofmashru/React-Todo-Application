import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo,setTodo]=useState([]);
  const [todos,setTodos]=useState('');
  console.log(todo);
  console.log(todos)
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {new Date().toLocaleDateString('en-US', { weekday: 'long' })} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" onChange={(e)=>setTodos(e.target.value)} placeholder="🖊️ Add item..." value={todos}/>
        <i className="fas fa-plus" onClick={()=>setTodo([...todo,{id:Date(),text:todos,status:false}])}></i>
      </div>
      <div className="todos">
        {todo.map((obj)=>{
          return(
          <div className="todo" key={obj.id}>
          <div className="left">
            <input type="checkbox" name="" id={obj.id} onChange={(e)=>{
              todo.filter((obj2)=>{
                if(obj2.id===obj.id){obj.status=e.target.checked}
                return obj2
              })
            }
            }/>
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
      })}
      </div>
    </div>
  );
}

export default App;
