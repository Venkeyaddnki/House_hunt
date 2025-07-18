import React, { useState } from 'react';
import AllProperties from './AllProperties';
import BookingHistory from './BookingHistory';
import {Link} from 'react-router-dom';

export default function RenterHome() {
  const [tab, setTab] = useState('properties');

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Renter</h2>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button>Back to Home</button>
        </Link>
      </div>
      <br />
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setTab('properties')}>All Properties</button>{' '}
        <button onClick={() => setTab('history')}>Booking History</button>
      </div>
      <hr />

      {tab === 'properties' ? <AllProperties /> : <BookingHistory />}
    </div>
  );
}
