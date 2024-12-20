import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const gotoLoginPage = () => {
    navigate("/login");
  };
  const gotoCashback = () => {
    navigate("/cashback");
  };
  const gotoServices = () => {
    navigate("/services");
  };
  const gotoGuide = () => {
    navigate("/guide");
  };
  const gotoHomepage = () => {
    navigate("/");
  };
  const gotoSpeak = () => {
    navigate("/speak");
  };

  return (
    <div className='fixed w-full bg-white z-10'>
      <header className='flex justify-between items-center px-6 py-4 shadow'>
        <div className="text-3xl font-bold text-[#d6156c]">
          <a href='/'>Assetland</a>
        </div>
        
        {/* This section - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex space-x-4">
          <a href='/forSale' className='px-3'>Buy</a>
          <a href='/' className='px-3'>Sell</a>
          <a href='/' className='px-3'>AI Agent</a>
          <a href='/' className='px-3'>Human Agent</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href='/' className='px-3 hidden md:inline'>Help</a>
          <button onClick={gotoLoginPage} className="px-4 py-2 bg-[#d6156c] text-white rounded-full font-semibold transition-colors hover:bg-[#a91256]">Sign in</button>
          <Menu className="cursor-pointer " onClick={toggleSidebar} />

          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl text-gray-900 transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-3xl font-bold text-[#d6156c]">Assetland</div>
                <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-900">X</button>
              </div>
              
              {/* Navigation Links - Visible only in the sidebar on mobile */}
              <ul className="space-y-6 md:hidden">
                <li>
                  <a href='/forSale' className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>Buy</a>
                </li>
                <li>
                  <a href='/' className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>Sell</a>
                </li>
                <li>
                  <a href='/' className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>AI Agent</a>
                </li>
                <li>
                  <a href='/' className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>Human Agent</a>
                </li>
              </ul>

              {/* Additional Sidebar Links */}
              <ul className="space-y-6 mt-6">
                <li>
                  <button onClick={gotoLoginPage} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>Sign In</button>
                </li>
                <li>
                  <button onClick={gotoCashback} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>Cash Back Calculator</button>
                </li>
                <li>
                  <button onClick={gotoServices} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>Services</button>
                </li>
                <li>
                  <button onClick={gotoGuide} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>Homebuyer Guides</button>
                </li>
              </ul>

              <div className="mt-12 space-y-4">
                <span>
                  <button onClick={gotoSpeak} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>Speak to our team</button>
                </span>
                <span>
                  <button onClick={gotoHomepage} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors'>About Assetland</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
