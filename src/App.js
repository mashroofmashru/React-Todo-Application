import React, { useEffect, useState } from 'react';
import './App.css';
import swal from 'sweetalert2'; //for delete conformation

function App() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState('');
  useEffect(() => {
    setTodos(''); // Clear input when new todo is added
  }, [todo]);
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
        <input type="text" onChange={(e) => setTodos(e.target.value)} placeholder="🖊️ Add item..." value={todos} /> 
        <i className="fas fa-plus" onClick={() => setTodo([...todo, { id: Date(), text: todos, status: false }])}></i>  {/* adding into todo list */}
      </div>
      <div className="todos">
        {todo.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input type="checkbox" name="" id={obj.id} onChange={(e) => {
                  todo.filter((obj2) => {        
                    if (obj2.id === obj.id) { obj.status = e.target.checked; }  //change the status
                    return obj2
                  })
                }
                } />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={() => {
                  swal.fire({             //for delete conformation
                    title: 'Are you sure?',
                    text: "Do you want to delete this item?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    background: 'rgb(0,0,0)',
                    color: '#fefefe',
                  }).then((result) => {

                    if (result.isConfirmed) {
                      const updatedTodos = todo.filter((item) => item.id !== obj.id); //delete operation
                      setTodo(updatedTodos);
                      swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                    }
                  });
                }}></i>
              </div>
            </div>)
        })}
      </div>
    </div>
  );
}

export default App;
