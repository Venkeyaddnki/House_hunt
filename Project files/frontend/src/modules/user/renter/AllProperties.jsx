import React, { useEffect, useState } from 'react';

export default function AllProperties() {
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', contact: '' });

  const currentUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('properties')) || [];
    const available = all.filter(p => p.isAvailable);
    setProperties(available);
    setFiltered(available);
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const lower = text.toLowerCase();
    const result = properties.filter(
      p =>
        p.name.toLowerCase().includes(lower) ||
        p.address.toLowerCase().includes(lower) ||
        p.amount.toLowerCase().includes(lower)
    );
    setFiltered(result);
  };

  const handleBook = () => {
    if (!form.name || !form.contact) {
      alert('Please fill all details');
      return;
    }

    const all = JSON.parse(localStorage.getItem('bookings')) || [];
    const newBooking = {
      id: Date.now(),
      propertyId: selected.id,
      renterId: currentUser.email,
      ownerId: selected.ownerId,
      renterName: form.name,
      renterContact: form.contact,
      status: 'pending'
    };

    all.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(all));
    alert('Booking request sent!');
    setSelected(null);
    setForm({ name: '', contact: '' });
  };

  return (
    <div>
      <h3>Available Properties</h3>

      <input
        placeholder="Search by name, address, amount"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: '60%', padding: '8px', marginBottom: '20px' }}
      />

      {filtered.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Address</th>
              <th>Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.amount}</td>
                <td>{p.address}</td>
                <td>{p.addInfo}</td>
                <td>
                  <button onClick={() => setSelected(p)}>Get Info</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selected && (
        <div style={{ marginTop: '30px', padding: '20px', border: '1px solid gray' }}>
          <h4>Book Property: {selected.name}</h4>
          <p><strong>Owner Email:</strong> {selected.ownerId}</p>
          <p><strong>Amount:</strong> {selected.amount}</p>
          <p><strong>Address:</strong> {selected.address}</p>
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          /><br /><br />
          <input
            placeholder="Your Contact Info"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
          /><br /><br />
          <button onClick={handleBook}>Send Booking Request</button>{' '}
          <button onClick={() => setSelected(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
