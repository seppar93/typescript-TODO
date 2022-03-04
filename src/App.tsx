import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { Todos } from './components/Todos';

// https://jsonplaceholder.typicode.com/users/1/todos
function App() {
  return (
    <div className="App">
      <h1>Typescript TODO</h1>
      <Todos/>
    </div>
  );
}

export default App;
