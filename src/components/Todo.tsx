import React from 'react'
import { ITodo } from './Todos';

type TodoProps = {
  todo: ITodo;
  changeTitle: () => void;
  deleteTodo: () => void;
  completedTodo: () => void;
};

export const Todo = ({ todo, completedTodo, deleteTodo, changeTitle }: TodoProps) => {
  return (
    <div>
      <input type="text" value={todo.title} />
      <button onClick={() => completedTodo()}>Completed</button> 
      <button onClick={() => deleteTodo()} >Delete Todo</button>
    </div>
  )
}
