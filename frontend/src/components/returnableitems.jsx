import React, { useState, useEffect } from 'react';

// Import all 6 images
import lakme2 from '../assets/lakme2.jpeg';
import dove from '../assets/dove.jpeg';
import colgate from '../assets/colgate.jpeg';
import cetaphil from '../assets/cetaphil.jpg';
import ketchup from '../assets/ketchup.jpg';
import cosrx from '../assets/cosrx.jpg';

const allItems = [
  {
    name: 'Lakmé Face Serum',
    image: lakme2,
    points: 10,
    comment: 'Got 10 points instantly!',
  },
  {
    name: 'Dove Shampoo Bottle',
    image: dove,
    points: 8,
    comment: 'Smooth return process!',
  },
  {
    name: 'Colgate Toothpaste Tube',
    image: colgate,
    points: 5,
    comment: 'Small steps, big impact!',
  },
  {
    name: 'Heinz Ketchup Bottle',
    image: ketchup,
    points: 6,
    comment: 'Easy drop & points received!',
  },
  {
    name: 'Cetaphil Cleanser',
    image: cetaphil,
    points: 9,
    comment: 'Recycled and rewarded!',
  },
  {
    name: 'Cosrx Toner',
    image: cosrx,
    points: 7,
    comment: 'Clean, scanned, and earned!',
  },
];

export default function ReturnableItems() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 3) % allItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get the current 3 items
  const visibleItems =
    startIndex + 3 <= allItems.length
      ? allItems.slice(startIndex, startIndex + 3)
      : [...allItems.slice(startIndex), ...allItems.slice(0, (startIndex + 3) % allItems.length)];

  return (
    <section className="py-16 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Returnable Items</h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch transition-all duration-500">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md w-full md:w-72 flex flex-col justify-between 
                       border border-transparent hover:border-blue-500 hover:shadow-lg hover:scale-105 
                       transition-all duration-300"
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500 mt-2 italic">"{item.comment}"</p>
            <div className="mt-4 text-blue-600 font-bold">+{item.points} ETS Points</div>
          </div>
        ))}
      </div>
    </section>
  );
}
