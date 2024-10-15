import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Footer from './Footer';

const PropertyManagementUI = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setIsModalOpen(false);
    setEmail('');
  };

  return (
    <div>
      {/* Navbar */}
      <div className='w-full fixed bg-white'>
        <header className='flex justify-between items-center px-6 py-4 bg-white shadow'>
          <div className="text-3xl font-bold text-[#d6156c]">Assetland</div>
          <div className="flex-grow max-w-md mx-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16a8 8 0 100-16 8 8 0 000 16zm-1 5l6.5-6.5" />
                </svg>
              </span>
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Type a listing address or link"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Menu className="cursor-pointer" onClick={toggleSidebar} />
            {/* Sidebar */}
            <div
              className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl text-gray-900 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-3xl font-bold text-[#d6156c]">Assetland</div>
                  <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-900">
                    X
                  </button>
                </div>
                <ul className="space-y-6">
                  <li><a href="/UserAccount"><button className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>"User Name"</button></a></li>
                  <li><a href="/cashback"><button className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>Cash Back Calculator</button></a></li>
                  <li><a href="/services"><button className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>Services</button></a></li>
                  <li><a href="/guide"><button className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>Homebuyer Guides</button></a></li>
                </ul>
                <div className="mt-12 space-y-4">
                  <a href="/speak" className="text-sm font-semibold flex items-center space-x-2 hover:underline">
                    <span><button className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>Speak to our team</button></span>
                  </a>
                  <a href="/" className="text-sm font-semibold flex items-center space-x-2 hover:underline">
                    <span><button className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>About Bramble</button></span>
                  </a>
                  <a href="/" className="text-sm font-semibold flex items-center space-x-2 hover:underline">
                    <span><button className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>Log Out</button></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-3xl mx-auto p-6 mt-3 font-sans">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Your properties</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 mb-6 flex items-center justify-center">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500 text-lg">Add your first property by address or link</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center">
          Haven't found a listing you like yet? We can help you out.
          <button onClick={() => setIsModalOpen(true)} className="text-blue-500 hover:underline ml-1">Get in touch.</button>
        </p>
        <Footer />
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Contact us</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      


    </div>
    
  );
};

export default PropertyManagementUI;



    
