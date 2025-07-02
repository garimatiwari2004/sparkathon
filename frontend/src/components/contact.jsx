import React from 'react';

export default function ContactSection() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800">
     
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mt-10 mb-4 text-[#03071e]">Reach Out to Us</h2>
        <p className="mb-10 text-gray-600">
          Have feedback, suggestions, or partnership queries? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="text-left flex flex-col align-items-center justify-center justify-content-center">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <p><strong>Email:</strong> garimatiwari1803@gmail.com</p>
            <p><strong>Phone:</strong> +91 xxxx</p>
            <p><strong>Address:</strong> Panipat, Haryana</p>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-md p-6 rounded-lg space-y-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
     
    </section>
  );
}
