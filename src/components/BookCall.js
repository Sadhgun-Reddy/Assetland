import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';

const BookaCall = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (email && message) {
      alert('Request sent! We will contact you soon.');
      setEmail('');
      setMessage('');
      navigate(-1); // Go back
    } else {
      alert('Please fill out all fields.');
    }
  };

  const onClose = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="pt-24 flex justify-center items-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            aria-label="Close"
          >
            <span className="text-xl font-bold">×</span>
          </button>

          <h2 className="text-2xl font-bold mb-4 text-[#d6156c]">Book a Call</h2>
          <p className="mb-6 text-gray-600">
            Tell us about your availability in the next few days and let us know how we can help you! We'll get back to you ASAP.
          </p>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d6156c]"
              required
            />
            <textarea
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#d6156c]"
              required
            ></textarea>

            <div className="flex justify-between items-center mt-2">
              <p className='text-[#d6156c] font-semibold'>+1 628-600-0676</p>
              <button
                type="submit"
                className="px-6 py-2 bg-[#d6156c] text-white font-bold rounded-lg hover:bg-pink-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookaCall;
