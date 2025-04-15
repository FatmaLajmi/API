import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  // declaring states
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // fetchUsers function
  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  // useEffect
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>User List</h2>

      {error && <p style={{ color: 'red' }}>Error fetching users: {error.message}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem' }}>{user.name}</h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{user.email}</p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#777' }}>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
