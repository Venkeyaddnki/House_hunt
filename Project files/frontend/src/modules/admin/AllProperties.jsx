
import React, { useEffect, useState } from 'react';

export default function AllProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('properties')) || [];
    setProperties(stored);
  }, []);

  return (
    <div>
      <h3>All Properties</h3>
      {properties.length === 0 ? <p>No properties.</p> : (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Owner</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.ownerId}</td>
                <td>{p.isAvailable ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
