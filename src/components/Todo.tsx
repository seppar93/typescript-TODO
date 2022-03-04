import React from 'react'
import { ITodo } from './Todos';

type TodoProps = {
  todo: ITodo;
  changeTitle: () => void;
  deleteTodo: () => void;
  completedTodo: (id:number) => void;
};

export const Todo = ({ todo, completedTodo, deleteTodo, changeTitle }: TodoProps) => {

  return (
    <div className={``}>
      <input type="text" value={todo.title} />
      <button onClick={() => completedTodo(todo.id)}>Completed</button> 
      <button onClick={() => deleteTodo()} >Delete Todo</button>
      {
      
      todo.completed ?  <span>X</span> : null
      }
    </div>
  )
}
