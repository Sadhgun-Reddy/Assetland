import React, { useState, useEffect } from 'react';
// userInfo is used within handleSubmit
import { useSelector, useDispatch } from 'react-redux';
import LogedInNavbar from './LogedInNavbar';
import Navbar from './NavBar';
import { updateProfile } from '../utils/userSlice';

const UserAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Initialize form with existing user data if available
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setPhoneNumber(user.phoneNumber || '');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !phoneNumber) {
      alert('Please fill in all fields');
      return;
    }

    const userInfo = {
      firstName,
      lastName,
      phoneNumber,
    };

    dispatch(updateProfile(userInfo));
    alert('Profile updated successfully!');
  };

  const email = user ? user.email : 'Guest';

  return (
    <div className="bg-gray-50 min-h-screen">
      {user ? <LogedInNavbar /> : <Navbar />}
      
      <div className="pt-24 max-w-2xl mx-auto p-4 sm:p-6 font-sans">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Your Account</h1>
          <p className="text-gray-600 mb-8">{email}</p>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="w-24 h-24 bg-[#d6156c] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 sm:mb-0 sm:mr-8 shrink-0">
              {firstName ? firstName[0].toUpperCase() : 'U'}
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d6156c]"
                  placeholder="First name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d6156c]"
                  placeholder="Last name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d6156c]"
                  placeholder="Phone number"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-[#d6156c] text-white font-semibold rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
