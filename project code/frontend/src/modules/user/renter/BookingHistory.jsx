import React, { useEffect, useState } from 'react';

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('bookings')) || [];
    const mine = all.filter(b => b.renterId === currentUser.email);
    setBookings(mine);
  }, []);

  return (
    <div>
      <h3>My Booking History</h3>
      {bookings.length === 0 ? (
        <p>No bookings made yet.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Property ID</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Your Name</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.propertyId}</td>
                <td>{b.ownerId}</td>
                <td>{b.status}</td>
                <td>{b.renterName}</td>
                <td>{b.renterContact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
