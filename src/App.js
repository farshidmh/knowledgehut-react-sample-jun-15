import logo from './logo.svg';
import './App.css';
import React from 'react';

import AddTodo from './TodoComponents/AddTodo';
import TodoList from './TodoComponents/TodoList';


function App() {

  const [todos, setTodos] =
    React.useState(
      [
        { id: 1, text: "Wash the dishes", done: false },
        { id: 2, text: "Do the laundry", done: false },
        { id: 3, text: "Take shower", done: false }
      ]
    );

  return (
    <div className="App">
      <h1> Todo List </h1>
      <AddTodo setTodos={setTodos} />
      <hr />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );

}













export default App;
