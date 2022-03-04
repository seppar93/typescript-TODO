import { useEffect, useState } from 'react'
import { Todo } from './Todo'
import { ITodo } from './Todos'

type TodoListProps = {
  todos: ITodo[];
  completedTodo: (id:number) => void;
  changeTitle: () => void;
  deleteTodo:() => void

}

export const TodoList = ({todos,completedTodo, changeTitle,deleteTodo }: TodoListProps) => {
  


  return (
    <>
    <h3>Your current TODOS </h3>

    <ul>
      {
        todos?.map((todo) => {
         return  <li style={{textDecoration: 'none', listStyle: 'none'}} key={todo.id}>
           <Todo completedTodo={completedTodo} deleteTodo={deleteTodo} changeTitle={changeTitle} todo={todo}/></li>
        }  )
      }
    </ul>

    </>

  )
}
