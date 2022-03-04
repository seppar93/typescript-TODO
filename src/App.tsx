import React, { useState } from 'react';
import { Form } from './components/Form';
import TodoList from './components/TodoList';


// https://jsonplaceholder.typicode.com/users/1/todos
function App() {
  const [inputText, setInputText] = useState<string>('')
  return (
    <div className="App">
      <header>
        <h1>Your TODOs</h1>
      </header>
       <Form/>
       <TodoList/>
    </div>
  );
}

export default App;
