import React from 'react';
import { TodoListProps } from '../types';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterdTodos }: TodoListProps) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
