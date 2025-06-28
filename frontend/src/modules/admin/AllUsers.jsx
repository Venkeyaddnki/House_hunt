
import React, { useEffect, useState } from 'react';
export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(all);
  }, []);

  const toggleApproval = (email) => {
    const all = JSON.parse(localStorage.getItem('users')) || [];
    const updated = all.map(u => u.email === email ? { ...u, approved: !u.approved } : u);
    localStorage.setItem('users', JSON.stringify(updated));
    setUsers(updated);
  };

  return (
    <div>
      <h3>All Users</h3>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Type</th>
            <th>Approved</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.email}>
              <td>{u.email}</td>
              <td>{u.type}</td>
              <td>{u.approved ? 'Yes' : 'No'}</td>
              <td>
                {u.type === 'owner' && (
                  <button onClick={() => toggleApproval(u.email)}>
                    {u.approved ? 'Disapprove' : 'Approve'}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
