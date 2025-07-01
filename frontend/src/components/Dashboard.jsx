import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Welcome to Your Dashboard</h2>

      {/* Past Purchases */}
      <section className="bg-white shadow p-4 rounded mb-6">
        <h3 className="text-xl font-semibold mb-2">Past Purchases</h3>
        <p className="text-gray-500">No purchases yet.</p>
      </section>

      {/* Returnable Products */}
      <section className="bg-white shadow p-4 rounded mb-6">
        <h3 className="text-xl font-semibold mb-2">Returnable Items</h3>
        <p className="text-gray-500">You haven’t returned any items yet.</p>
      </section>

      {/* ESG Score */}
      <section className="bg-white shadow p-4 rounded">
        <h3 className="text-xl font-semibold mb-2">Your ESG Impact</h3>
        <p className="text-gray-500">You’ve earned 0 ETS points so far.</p>
      </section>
    </div>
  );
}
