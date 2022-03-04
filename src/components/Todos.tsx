import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList'

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


export const Todos = () => {
    const [todos, setTodos] = useState<null | ITodo[]>(null);

    const url = 'https://jsonplaceholder.typicode.com/users/1/todos'
    async function fetchTodos() {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);

        setTodos(data)
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const handleInput = (input:string) => {

    }
    const addTodo = () => {
        
    }

    return (
        <>
        <input onChange={event => handleInput(event.target.value)} type="text" />

        <button onClick={() => addTodo() }>Add TODO</button>
            {
                todos ?
                <TodoList todos={todos}/>
                : null
            }
        </>
    )
}
