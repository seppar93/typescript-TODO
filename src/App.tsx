import React, { useState } from 'react';
import { Form } from './components/Form';
import TodoList from './components/TodoList';
import { Todo } from './ITodo';



// https://jsonplaceholder.typicode.com/users/1/todos
function App() {
  const [inputText, setInputText] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  console.log(todos);
  

  return (
    <div className="App">
      <header>
        <h1>Your TODOs</h1>
      </header>
       <Form todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText}/>
       <TodoList/>
    </div>
  );
}

export default App;
