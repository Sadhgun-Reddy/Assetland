import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (isOpen) return null; // Prevent rendering if not open ERROR

  const handleSendMessage = (event) => {
    event.preventDefault();
    // Handle the send message logic here
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close modal on overlay click
      aria-hidden="true"
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6 text-gray-600">Questions, concerns, feedback? Reach out!</p>

        <input
          type="email"
          placeholder="Your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <textarea
          placeholder="Type your message here"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 h-24"
        ></textarea>

        <button
          onClick={handleSendMessage} // Handle message sending
          className="w-full bg-[#d6156c] text-white font-semibold py-2 rounded-lg mb-4"
        >
          Send Message
        </button>

        <button
          onClick={onClose} // Close the modal
          className="text-gray-500 hover:text-gray-900"
        >
          <span className="text-sm font-semibold flex items-center space-x-2 hover:underline">
            Close
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
