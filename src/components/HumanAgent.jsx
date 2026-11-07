import React from 'react';
import Navbar from './NavBar';

const HumanAgent = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#d6156c]">Assetland Human Agent</h1>
        <p className="text-xl text-gray-700 mb-8">
          Work with the best human agents in the business. Our experienced professionals provide personalized guidance, expert negotiation, and deep local market knowledge.
        </p>
        <div className="bg-gray-100 p-8 rounded-xl shadow-md text-left">
           <h2 className="text-2xl font-semibold mb-4">Why choose our agents:</h2>
           <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
             <li>Top 1% Performers Nationwide</li>
             <li>Expert Negotiation Skills</li>
             <li>Deep Local Market Expertise</li>
             <li>Dedicated End-to-End Support</li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default HumanAgent;
