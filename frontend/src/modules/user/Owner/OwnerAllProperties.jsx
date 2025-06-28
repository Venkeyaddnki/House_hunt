import React from 'react';

export default function OwnerAllProperties({ properties }) {
  return (
    <div >
      <h3>My Properties</h3>
      <br />
      {properties.length === 0 ? (
        <p>No properties yet.</p>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' ,textAlign:"center"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Address</th>
              <th>Info</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.amount}</td>
                <td>{p.address}</td>
                <td>{p.addInfo}</td>
                <td>{p.isAvailable ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
      
    </div>
  );
}
