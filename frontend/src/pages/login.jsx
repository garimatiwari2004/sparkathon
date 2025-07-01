import React, { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // Simulate signup success
  localStorage.setItem('isLoggedIn', 'true');
  window.location.href = '/';
};

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        
        
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
        
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">Welcome Back</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    
      <div className="mt-4 flex text-sm text-center text-gray-600">
        Don’t have an account?{' '}
        <a href="/signup" className="text-blue-600 hover:underline font-medium">
          Sign up here
        </a>
      </div>
    </div>

  );
}
