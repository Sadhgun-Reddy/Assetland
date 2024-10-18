import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LogedInNavbar from './LogedInNavbar';
import { Navbar } from 'flowbite-react';

const UserAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const user = useSelector((state) => state.user);
  const email = useSelector((state) => state.user.email);



  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!firstName || !lastName || !phoneNumber) {
      alert('Please fill in all fields');
      return;
    }

    // Create user object
    const userInfo = {
      firstName,
      lastName,
      phoneNumber,
    };

    // Handle form submission logic here
    console.log('Form submitted:', userInfo);

    // Reset form fields
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
  };

  return (
    <div >
      {user ? <LogedInNavbar className="w-full"/> : <Navbar className="w-full" />}
      <div className="max-w-2xl mx-auto p-6 font-sans">
        <h1 className="text-2xl font-semibold mb-1">Your account</h1>
        <p className="text-gray-600 mb-6">{email}</p>

        <div className="flex items-center mb-8">
          <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-semibold mr-8">
            {/* Placeholder for user profile picture */}
            <img src="#" alt="Profile" className="w-full h-full rounded-full" />
          </div>
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="First name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Last name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Phone number"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default UserAccount;
