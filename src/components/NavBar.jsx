import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const gotoLoginPage = () => {
    setSidebarOpen(false);
    navigate("/login");
  };
  const gotoCashback = () => {
    setSidebarOpen(false);
    navigate("/cashback");
  };
  const gotoServices = () => {
    setSidebarOpen(false);
    navigate("/services");
  };
  const gotoGuide = () => {
    setSidebarOpen(false);
    navigate("/guide");
  };
  const gotoHomepage = () => {
    setSidebarOpen(false);
    navigate("/");
  };
  const gotoSpeak = () => {
    setSidebarOpen(false);
    navigate("/speak");
  };

  return (
    <div className='fixed w-full bg-white z-10'>
      <header className='flex justify-between items-center px-6 py-4 shadow'>
        <div className="text-3xl font-bold text-[#d6156c]">
          <Link to='/'>Assetland</Link>
        </div>
        
        {/* This section - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link to='/forSale' className='px-3 hover:text-[#d6156c] transition-colors'>Buy</Link>
          <Link to='/' className='px-3 hover:text-[#d6156c] transition-colors'>Sell</Link>
          <Link to='/' className='px-3 hover:text-[#d6156c] transition-colors'>AI Agent</Link>
          <Link to='/' className='px-3 hover:text-[#d6156c] transition-colors'>Human Agent</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to='/' className='px-3 hidden md:inline hover:text-[#d6156c] transition-colors'>Help</Link>
          <button onClick={gotoLoginPage} className="px-4 py-2 bg-[#d6156c] text-white rounded-full font-semibold transition-colors hover:bg-[#a91256]">Sign in</button>
          <button
            onClick={toggleSidebar}
            aria-label="Open menu"
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6156c] transition-colors"
          >
            <Menu className="cursor-pointer w-6 h-6" />
          </button>

          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl text-gray-900 transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-3xl font-bold text-[#d6156c]">Assetland</div>
                <button
                  onClick={toggleSidebar}
                  aria-label="Close menu"
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6156c] transition-colors"
                >
                  X
                </button>
              </div>
              
              {/* Navigation Links - Visible only in the sidebar on mobile */}
              <ul className="space-y-6 md:hidden">
                <li>
                  <Link to='/forSale' onClick={toggleSidebar} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors block'>Buy</Link>
                </li>
                <li>
                  <Link to='/' onClick={toggleSidebar} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors block'>Sell</Link>
                </li>
                <li>
                  <Link to='/' onClick={toggleSidebar} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors block'>AI Agent</Link>
                </li>
                <li>
                  <Link to='/' onClick={toggleSidebar} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors block'>Human Agent</Link>
                </li>
              </ul>

              {/* Additional Sidebar Links */}
              <ul className="space-y-6 mt-6">
                <li>
                  <button onClick={gotoLoginPage} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors w-full text-left'>Sign In</button>
                </li>
                <li>
                  <button onClick={gotoCashback} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors w-full text-left'>Cash Back Calculator</button>
                </li>
                <li>
                  <button onClick={gotoServices} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors w-full text-left'>Services</button>
                </li>
                <li>
                  <button onClick={gotoGuide} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors w-full text-left'>Homebuyer Guides</button>
                </li>
              </ul>

              <div className="mt-12 space-y-4">
                <div>
                  <button onClick={gotoSpeak} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors w-full text-left'>Speak to our team</button>
                </div>
                <div>
                  <button onClick={gotoHomepage} className='hover:bg-pink-800 hover:text-white p-2 rounded-xl px-4 transition-colors w-full text-left'>About Assetland</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
