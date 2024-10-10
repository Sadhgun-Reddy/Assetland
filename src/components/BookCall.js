import React from 'react';


const BookaCall = ({ isOpen, onClose }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className='flex space-x-52'>
            <h2 className="text-xl font-semibold mb-4">Book a Call</h2>
            <button  className="text-gray-500 hover:text-gray-900 mb-4">
                <a href="/cashback" className="text-sm font-semibold flex items-center space-x-2 hover:underline">
                <span>X</span>
                </a>
            </button>
        </div>
        

        <p className="mb-6 text-gray-600">Tell us about your availability in the next few days and let us know how we can help you! We'll get back to you ASAP.</p>

        <input
          type="email"
          placeholder="Your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <textarea
          placeholder="Type your message here"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 h-24"
        ></textarea>
        <div className="flex space-x-16">
            <p className='text-[#d6156c] text-center'>+1 628-600-0676</p>
            <button
            className="p-2 bg-[#d6156c] text-white font-semibold py-2 rounded-lg mb-4">
            <a href="/">
                <span>Send Message</span>
                </a>
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default BookaCall;
