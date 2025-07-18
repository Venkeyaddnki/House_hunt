import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.email === form.email);

    // to login the admin
    if (!user && form.email === 'househuntadmin@admin.com' && form.password === 'admin#123') {
      user = {
        name: 'Admin',
        email: 'admin@admin.com',
        type: 'admin',
        approved: true
      };
    }

    if (!user) {
      alert('User not found');
      return;
    }

    if (user.password && user.password !== form.password) {
      alert('Incorrect password');
      return;
    }

    if (user.type === 'owner' && !user.approved) {
      alert('Your owner account is not yet approved by admin.');
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));

    // Redirect based on user role
    if (user.type === 'admin') {
      navigate('/adminhome');
    } else if (user.type === 'owner') {
      navigate('/ownerhome');
    } else if (user.type === 'renter') {
      navigate('/renterhome');
    } else {
      alert('Unknown user type');
    }
  };

  return (
    <div style={{textAlign:"center", padding: '5px' }}>
      <span style={{display: "flex",justifyContent:"space-between",alignItems: "center", padding:"5px",marginBottom: "10px"}}>
            <h2>StayEasy</h2>
            <div>
              <Link to="/">
                <button style={{ margin: "5px", padding: "10px 20px" }}>Home</button>
              </Link>
              <Link to="/register">
                <button style={{ margin: "5px", padding: "10px 20px" }}>Register</button>
              </Link>
              </div>
          </span>
       <hr />
      <h2 >Login to StayEasy</h2>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      /><br /><br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <br />
      </div>

  );
}
