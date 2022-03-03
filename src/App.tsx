import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Typescript TODO</h1>
      <input type="text" name="" id="" />
      <TodoList/>
    </div>
  );
}

export default App;
