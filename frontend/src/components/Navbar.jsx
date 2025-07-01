import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">ReCircle</h1>
      <div className="flex items-center space-x-6">
        <Link to="/scanner" className="text-gray-700 hover:text-blue-600">Scan QR</Link>
        </div>

      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/signup" className="text-gray-700 hover:text-blue-600">Profile</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
      </div>
    </nav>
  );
}
