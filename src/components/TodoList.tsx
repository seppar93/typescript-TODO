import { useEffect, useState } from 'react'
import { Todo } from './Todo'
import { ITodo } from './Todos'

type TodoListProps = {
  todos: ITodo[];
  // handleInput: () => void;

}

export const TodoList = ({todos}: TodoListProps) => {
  


  return (
    <>
    <h3>Your current TODOS </h3>

    <ul>
      {
        todos?.map((todo) => {
         return  <li style={{textDecoration: 'none', listStyle: 'none'}} key={todo.id}><Todo todo={todo}/></li>
        }  )
      }
    </ul>

    </>

  )
}
