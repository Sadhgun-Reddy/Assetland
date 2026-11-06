import React from 'react';
import Navbar from './NavBar';

const AIAgent = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#d6156c]">Assetland AI Agent</h1>
        <p className="text-xl text-gray-700 mb-8">
          Meet our AI Agent, your 24/7 real estate assistant. Get instant market analysis, property recommendations, and answers to all your buying and selling questions.
        </p>
        <div className="bg-gray-100 p-8 rounded-xl shadow-md text-left">
           <h2 className="text-2xl font-semibold mb-4">How it works:</h2>
           <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
             <li>Instant Property Valuations</li>
             <li>Automated Offer Generation</li>
             <li>Neighborhood Insights and Trends</li>
             <li>24/7 Support and Guidance</li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;
