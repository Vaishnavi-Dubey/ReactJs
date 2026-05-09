/**
 * useReducer Hook: Managing Complex Component State.
 * This file teaches how to handle state transitions using an action-reducer pattern,
 * ideal for complex state objects like a Todo list.
 */

import React, { useReducer, useState } from 'react';

// 1. Initial State
const initialState = [];

// 2. Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>useReducer: Todo List</h2>
      
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task..." 
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {state.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <span 
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button 
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
