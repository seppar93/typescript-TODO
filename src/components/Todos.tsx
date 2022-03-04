import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList'

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


export const Todos = () => {
    const [todos, setTodos] = useState<null | ITodo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('')

    const url = 'https://jsonplaceholder.typicode.com/users/1/todos'
    async function fetchTodos() {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);

        setTodos(data)
    }

    useEffect(() => {
        // fetchTodos()
    }, [])

    const handleInput = (input:string) => {
        setNewTodo(input)
    }
    const addTodo = () => {
        const todoAdded = {userId: 1, id: Math.floor(Math.random() * 100), title: newTodo, completed: false }
        if(todos !== null) {
            const newTodos = [...todos, todoAdded]
            console.log(typeof newTodos);
            
            setTodos(newTodos)
        }
        const arr: ITodo[] = [...todoAdded]
        debugger
        console.log(arr);
        
        // setTodos([...todoAdded])

    }

    return (
        <>
        <h3>Add new todo</h3>
        <input onChange={event => handleInput(event.target.value)} type="text" />
        <button onClick={() => addTodo() }>Add TODO</button>
        <h3>Search for Todo</h3>
        <input type="text"/>

            {
                todos ?
                <TodoList todos={todos}/>
                : null
            }
        </>
    )
}
