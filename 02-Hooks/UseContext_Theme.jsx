/**
 * useContext Hook: Managing Global State without Prop-Drilling.
 * This file teaches how to create a Context and provide it to sub-components.
 */

import React, { createContext, useContext, useState } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ 
        background: theme === 'light' ? '#fff' : '#333', 
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        padding: '20px'
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 3. Create a consumer component
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>The current theme is: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

const ContextDemo = () => {
  return (
    <ThemeProvider>
      <h2>useContext: Global Theme State</h2>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default ContextDemo;
