import React from 'react'
import { FormProps } from '../types';


enum Actions  {
    All,
    Completed,
    Uncompleted
}

export const Form = ({setInputText,setTodos,todos,inputText}: FormProps) => {
    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTodos([...todos, {text:inputText, completed: false, id: Math.floor(Math.random( ) * 1000)}])
    setInputText('')
    }

  return (
      <form action="">
          <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input' />
          <button onClick={submitTodoHandler} className='todo-button' type='submit'>
              <i className='fas fa-plus-square'></i>
          </button>
          <div className='select'>
              <select name="todos" className='filter-todo' >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
              </select>

          </div>
      </form>
  )
}
 