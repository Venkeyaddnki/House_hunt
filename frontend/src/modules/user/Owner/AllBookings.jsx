import React, { useEffect, useState } from 'react';

export default function AllBookings() {
  const [bookings, setBookings] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('bookings')) || [];
    const mine = all.filter(b => b.ownerId === currentUser.email);
    setBookings(mine);
  }, []);

  const updateStatus = (id, status) => {
    const all = JSON.parse(localStorage.getItem('bookings')) || [];
    const updated = all.map(b => b.id === id ? { ...b, status } : b);
    localStorage.setItem('bookings', JSON.stringify(updated));
    setBookings(updated.filter(b => b.ownerId === currentUser.email));

    if (status === 'approved') {
      const props = JSON.parse(localStorage.getItem('properties')) || [];
      const booking = all.find(b => b.id === id);
      const updatedProps = props.map(p =>
        p.id === booking.propertyId ? { ...p, isAvailable: false } : p
      );
      localStorage.setItem('properties', JSON.stringify(updatedProps));
    }
  };

  return (
    <div>
      <h3>Bookings for My Properties</h3>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Property</th>
              <th>Renter</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.propertyId}</td>
                <td>{b.renterId}</td>
                <td>{b.status}</td>
                <td>
                  <button onClick={() => updateStatus(b.id, 'approved')}>Approve</button>{' '}
                  <button onClick={() => updateStatus(b.id, 'rejected')}>Reject</button>{' '}
                  <button onClick={() => updateStatus(b.id, 'completed')}>Complete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
}
