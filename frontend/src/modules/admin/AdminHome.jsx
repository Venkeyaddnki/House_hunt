
import React from 'react';
import AllUsers from './AllUsers';
import AllBookings from './AllBookings';
import AllProperties from './AllProperties';
import {Link} from 'react-router-dom';

export default function AdminHome() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Admin</h2>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button>Back to Home</button>
        </Link>
      </div>
      <hr />
      <AllUsers />
      <hr />
      <AllBookings />
      <hr />
      <AllProperties />
    </div>
  );
}
