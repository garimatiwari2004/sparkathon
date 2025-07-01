import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is SnapCycle?',
    answer: 'ReCircle is a smart system that rewards users for returning empty product containers using QR codes and traceable recycling.',
  },
  {
    question: 'How do I earn ETS points?',
    answer: 'You earn ETS points by scanning and returning verified empty product bottles at return points or via partner stores.',
  },
  {
    question: 'Can I return products from any brand?',
    answer: 'Currently, you can return products from our partnered brands like Lakmé, Dove, Colgate, and more.',
  },
  {
    question: 'How are rewards redeemed?',
    answer: 'Once you accumulate enough ETS points, you can redeem them for discounts, vouchers, or exclusive offers.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white text-gray-800 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center font-medium hover:bg-gray-100 transition"
            >
              {faq.question}
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
