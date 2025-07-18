import React, { useEffect, useState } from 'react';

export default function AllBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  return (
    <div>
      <h3>All Bookings</h3>
      {bookings.length === 0 ? <p>No bookings.</p> : (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Property ID</th>
              <th>Owner</th>
              <th>Renter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.bookingId}>
                <td>{b.bookingId}</td>
                <td>{b.propertyId}</td>
                <td>{b.ownerId}</td>
                <td>{b.renterId}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
