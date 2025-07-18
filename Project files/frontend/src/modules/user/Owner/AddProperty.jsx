import React, { useState } from 'react';

export default function AddProperty({ onPropertyAdded }) {
  const [form, setForm] = useState({
    name: '',
    amount: '',
    image: '',
    address: '',
    addInfo: ''
  });

  const currentUser = JSON.parse(localStorage.getItem('user'));

  const handleAdd = () => {
    if (!form.name.trim()) {
      alert('Enter property name!');
      return;
    }

    const all = JSON.parse(localStorage.getItem('properties')) || [];
    const newProp = {
      id: Date.now(),
      ...form,
      ownerId: currentUser.email,
      isAvailable: true
    };

    all.push(newProp);
    localStorage.setItem('properties', JSON.stringify(all));
    alert('Property added!');
    setForm({ name: '', amount: '', image: '', address: '', addInfo: '' });
    if (onPropertyAdded) onPropertyAdded();
  };

  return (
    <div>
      <h3>Add New Property</h3>
      <input placeholder="Property Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /><br /><br />
      <input placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} /><br /><br />
      <input placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} /><br /><br />
      <textarea placeholder="Additional Info" value={form.addInfo} onChange={e => setForm({ ...form, addInfo: e.target.value })} /><br /><br />
      <button onClick={handleAdd}>Add Property</button>
    </div>
  );
}
