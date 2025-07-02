import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Shop at Walmart',
      desc: 'Shop your favourite products at Walmart and look for items which can be returned.',
      emoji: '🛒',
      

    },
    {
      title: 'Scan the QR',
      desc: 'Use your camera to scan the QR code on your empty bottle via SnapCycle to see the points you can earn.',
      emoji: '📷',
    },
    {
      title: 'Return the Bottle',
      desc: 'Place the return request for the empty bottle via SnapCycle and drop it off at the nearest Walmart store.',
      emoji: '🧴',
    },
    {
      title: 'Earn ETS Points',
      desc: 'Get rewarded with ESG-based points and track your points for future discounts and deals.',
      emoji: '💰',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-md w-full md:w-64 hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-4">{step.emoji}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
