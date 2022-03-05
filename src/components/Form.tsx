import React from 'react';
import { FormProps } from '../types';

export const Form = ({
  setInputText,
  setTodos,
  todos,
  inputText,
  setStatus,
}: FormProps) => {
  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputText('');
  };

  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  return (
    <form action=''>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={submitTodoHandler} className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value={0}>All</option>
          <option value={1}>Completed</option>
          <option value={2}>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
