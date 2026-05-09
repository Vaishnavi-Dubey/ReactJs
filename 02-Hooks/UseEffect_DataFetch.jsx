/**
 * useEffect Hook: Handling Side Effects and Data Fetching.
 * This file teaches how to fetch data from an API on component mount 
 * and handle loading/error states.
 */

import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Side effect: Fetch users from a placeholder API
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();

    // Cleanup function (optional, runs when component unmounts)
    return () => console.log('Cleaning up UserList effect...');
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>useEffect: User Data Fetching</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - <em>{user.email}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
