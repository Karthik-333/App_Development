import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    // Add more users here
  ]);

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
