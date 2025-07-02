import React from "react";
import { Link } from "react-router-dom";

import skincare2 from "../assets/skincare2.jpg";

export default function Hero() {
  return (
    <section className="bg-green py-16 px-6 mt-14 text-white bg-[#03071e]  rounded-bl-4xl rounded-br-4xl">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
            Don’t Just Toss It — <br />
            <span className="text-blue-600">Snap It & Recycle It</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Recycling meets rewards - scan your QR, track your returns and power
            a greener tomorrow
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <a
              href="#target"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition text-center"
            >
              How it Works
            </a>
            <Link
              to="/login"
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition text-center"
            >
             Get Started
            </Link>
          </div>
        </div>

        {/* Right Side with Images */}
        <div className="md:w-1/2 relative flex rounded justify-center items-center">
          {/* Main Image */}
          <img
            src={skincare2}
            alt="Main"
            className="w-1044 h-104 object-cover rounded-xl shadow-lg z-10"
          />
        </div>
      </div>
    </section>
  );
}
