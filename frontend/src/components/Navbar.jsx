import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <nav className=" fixed w-full bg-[#03071e] px-6 py-4 shadow-md flex justify-between items-center z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">SnapCycle</Link>

      {/* Conditional buttons */}
      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <>
            <Link
              to="/scanner"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              Scan Product
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
