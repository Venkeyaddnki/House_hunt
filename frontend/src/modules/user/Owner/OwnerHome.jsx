import React, { useState, useEffect } from 'react';
import AddProperty from './AddProperty';
import OwnerAllProperties from './OwnerAllProperties';
import AllBookings from './AllBookings';
import {Link} from 'react-router-dom';

export default function OwnerHome() {
  const [properties, setProperties] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('properties')) || [];
    const mine = all.filter(p => p.ownerId === currentUser.email);
    setProperties(mine);
  }, []);

  const refreshProperties = () => {
    const all = JSON.parse(localStorage.getItem('properties')) || [];
    const mine = all.filter(p => p.ownerId === currentUser.email);
    setProperties(mine);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Owner</h2>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button>Back to Home</button>
        </Link>
      </div>
      <hr />
      <AddProperty onPropertyAdded={refreshProperties}  style={{textAlign:"center"}}/>
      <hr style={{ margin: '30px 0' }} />
      <OwnerAllProperties properties={properties} style={{textAlign:"center"}}/>
      <hr style={{ margin: '30px 0' }} />
      <AllBookings />
    </div>
  );
}
