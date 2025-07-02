import React, { useState } from 'react';

export default function Pickup() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [pickupDate, setPickupDate] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatDate = (date) =>
    date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields.");
      return;
    }

    // Optional: phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    // Calculate pickup date = 2 days from now
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 2);
    setPickupDate(formatDate(futureDate));

    console.log("Pickup scheduled:", form);
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded shadow mt-20">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">📦 Schedule a Pickup</h2>

        {submitted ? (
          <div className="text-center text-green-700 text-xl space-y-2 ">
            ✅ Your pickup is scheduled!
            <p className="text-gray-700 italic">
              Name: <strong>{form.name}</strong>
            </p>
            <p className="text-gray-700 italic">
              Phone: <strong>{form.phone}</strong>
            </p>
            <p className="text-gray-700 italic">
              Address: <strong>{form.address}</strong>
            </p>
            <p className="text-gray-700">
              ETS Points will be credited after pickup is completed.
            </p>
            <p className="text-blue-700 font-medium">
              📅 Pickup will be completed by: <strong>{pickupDate}</strong>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300"
              maxLength={10}
              pattern="[6-9]{1}[0-9]{9}"
              title="Enter a valid 10-digit phone number"
            />

            <textarea
              name="address"
              placeholder="Pickup Address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300"
              rows={3}
            />

            <p className="text-sm text-gray-600 italic mt-2">
              Note: ETS Points will be credited after the pickup is complete.
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Schedule Pickup
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
