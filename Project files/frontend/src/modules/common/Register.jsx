import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    type: 'renter'
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(u => u.email === form.email);
    if (userExists) {
      alert('User already exists');
      return;
    }
    const newUser = {
      ...form,
      approved: form.type === 'owner' ? false : true
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    if (form.type === 'owner') {
      alert('Registration successful. Please wait for admin approval.');
    } else {
      alert('Registered successfully. You can now log in.');
    }
    navigate('/login');
  };

  return (
    <div style={{ padding: '5px',textAlign:"center" }}>
      <span style={{display: "flex",justifyContent:"space-between",alignItems: "center", padding:"5px"}}>
      <h2>StayEasy</h2>
      <div>
        <Link to="/">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Home</button>
        </Link>
        <Link to="/login">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Login</button>
        </Link>
        </div>
    </span>
    <hr />
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
      /><br /><br />
      <input
        type="email"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      /><br /><br />
      <select onChange={e => setForm({ ...form, type: e.target.value })}>
        <option value="renter">Renter</option>
        <option value="owner">Owner</option>
      </select><br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}