/**
 * useState Hook: Managing Local Component State.
 * This file teaches how to initialize, update, and use state in a functional component.
 */

import React, { useState } from 'react';

const Counter = () => {
  // Initialize state with 0
  // count is the current state value, setCount is the updater function
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #ccc' }}>
      <h2>useState Counter</h2>
      <p>Current Count: <strong>{count}</strong></p>
      
      <button onClick={decrement}>Decrement -</button>
      <button onClick={reset} style={{ margin: '0 10px' }}>Reset</button>
      <button onClick={increment}>Increment +</button>
      
      <div style={{ marginTop: '10px' }}>
        {count > 10 ? <p style={{ color: 'green' }}>Great job! You passed 10.</p> : null}
      </div>
    </div>
  );
};

export default Counter;

// --- Demo usage (if used in a main App) ---
/*
import Counter from './02-Hooks/UseState_Counter';
function App() {
  return <Counter />;
}
*/
