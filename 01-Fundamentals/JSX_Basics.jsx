/**
 * JSX Fundamentals: Components, Props, and Expressions.
 * This file teaches how to write components using JSX and how to pass data via props.
 */

import React from 'react';

// A simple child component that receives props
const Greeting = (props) => {
  return (
    <div style={{ color: props.color || 'black' }}>
      <h3>Hello, {props.name}!</h3>
      <p>{props.message}</p>
    </div>
  );
};

const JSXBasics = () => {
  const user = {
    firstName: 'Vaishnavi',
    lastName: 'Dubey',
    status: 'Learning React'
  };

  const formatName = (u) => `${u.firstName} ${u.lastName}`;

  return (
    <div style={{ padding: '20px' }}>
      <h2>1. JSX Expressions</h2>
      <p>Formatted Name: <strong>{formatName(user)}</strong></p>
      <p>Current Status: {user.status}</p>

      <h2>2. Rendering Components with Props</h2>
      <Greeting 
        name="Developer" 
        message="Welcome to the React Mastery repo!" 
        color="#4f46e5"
      />
      
      <Greeting 
        name="Visitor" 
        message="Feel free to explore the code." 
      />
    </div>
  );
};

export default JSXBasics;
