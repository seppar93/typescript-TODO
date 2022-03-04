import { useEffect, useState } from 'react'

interface ITodo {
  userId: number,
  id:number,
  title:string,
  completed:boolean
}

export const TodoList = () => {
  const [todos, setTodos] = useState<null|ITodo[]>(null)
  const url = 'https://jsonplaceholder.typicode.com/users/1/todos'
  async function fetchTodos() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos()
  },[])


  return (
    <>
    <h3>Your current TODOS </h3>

    <ul>
      {
        todos?.map((todo) => {
         return  <li key={todo.id}>{todo.title}</li>
        }  )
      }
    </ul>

    </>

  )
}
