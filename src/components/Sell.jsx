import React, { useState } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const Sell = () => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address) {
      alert(`Request submitted for property: ${address}`);
      setAddress('');
    } else {
      alert('Please enter a property address.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center pt-24 px-4">
        <main className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#d6156c]">Sell your home</h1>
          <p className="text-xl text-gray-700 mb-10">
            Get an instant property valuation and learn how you can sell your home for top dollar with our expert agents.
          </p>

          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Enter your address to get started</h2>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main St, Anytown, USA"
                className="flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d6156c]"
                required
              />
              <button
                type="submit"
                className="bg-[#d6156c] text-white font-bold py-4 px-8 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Get Valuation
              </button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Sell;
