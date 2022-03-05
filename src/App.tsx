import React, { useEffect, useState } from 'react';
import { Form } from './components/Form';
import TodoList from './components/TodoList';
import { Todo } from './ITodo';

enum Actions {
  All,
  Completed,
  Uncompleted,
}

// https://jsonplaceholder.typicode.com/users/1/todos
function App() {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [status, setStatus] = useState<Actions>(0);
  const [filterdTodos, setFilteredTodos] = useState<Todo[]>([]);

  const filterHandler = () => {
    switch (status) {
      case Actions.Completed:
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case Actions.Uncompleted:
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [status, todos]);
  

  useEffect(() => {
    getLocalTodos()
 
  }, [])
  
  console.log(filterdTodos);

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos' || '{}'))
      setTodos(todoLocal)
    }
  };
  

  return (
    <div className='App'>
      <header>
        <h1>Your TODOs</h1>
      </header>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList filterdTodos={filterdTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
