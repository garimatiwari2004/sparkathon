import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/signup" style={{ marginRight: '1rem' }}>Signup</Link>
      <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
