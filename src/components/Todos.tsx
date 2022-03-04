import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList'

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


export const Todos = () => {
    const [todos, setTodos] = useState<null | ITodo[] | []>(null);
    const [newTodo, setNewTodo] = useState<string>('')

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

    
    const addTodo = () => {
        const todoAdded: ITodo = {userId: 1, id: Math.floor(Math.random() * 100), title: newTodo, completed: false }
        if(todos !== null) {
            const newTodos = [...todos, todoAdded]
            setTodos(newTodos)
            return;
        } 
        const arr: ITodo[] = [todoAdded]
        
        setTodos(arr)
    }


    const completedTodo = (id:number) => {
        const updatedTodo:ITodo[]  = Object.assign([], todos)
        const  copiedTodo:ITodo = Object.assign({},updatedTodo[id] )
        copiedTodo.completed = true;
        updatedTodo[id] = completedTodo;
        setTodos(updatedTodo)

        


    }
    const changeTitle = () => {

    }
    const deleteTodo = () => {

    }

    



    return (
        <>
        <h3>Add new todo</h3>
        

        <input onChange={event => setNewTodo(event.target.value)} type="text" />
        <button onClick={() => addTodo() }>Add TODO</button>
        <h3>Search for Todo</h3>
        <input type="text"/>

            {
                todos ?
                <TodoList completedTodo={completedTodo} changeTitle={changeTitle} deleteTodo={deleteTodo}  todos={todos}/>
                : null
            }
        </>
    )
}
