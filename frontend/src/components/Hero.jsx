import React from "react";
import { Link } from "react-router-dom";

import skincare from "../assets/skincare.jpg";
import haircare from "../assets/haircare.jpeg";
import skincare2 from "../assets/skincare2.jpg";

export default function Hero() {
  return (
    <section className="bg-green py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
            Don’t Just Toss It — <br />
            <span className="text-blue-600">ReCircle It.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Scan QR codes on used products, return them, and earn points toward
            eco-rewards.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition text-center"
            >
              Login
            </Link>
            <Link
              to="/scanner"
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition text-center"
            >
              Scan Product
            </Link>
          </div>
        </div>

        {/* Right Side with Images */}
        <div className="md:w-1/2 relative flex rounded justify-center items-center">
          {/* Main Image */}
          <img
            src={skincare2}
            alt="Main"
            className="w-1044 h-84 object-cover rounded shadow-lg z-10"
          />
        </div>
      </div>
    </section>
  );
}
