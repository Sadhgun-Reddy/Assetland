import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';



const LogedInNavbar =()=>{
    const dispatch = useDispatch();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };
    
      const gotoDashboard=()=>{
        navigate("/profile")
      }
      const gotoCashback=()=>{
        navigate("/cashback")
      }
      const gotoServices=()=>{
        navigate("/services")
      }
      const gotoGuide=()=>{
        navigate("/guide")
      }
      const gotoHomepage=()=>{
        dispatch(removeUser());
        navigate("/")
      }
      const gotoSpeak=()=>{
        navigate("/speak")
      }

    return (
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
                    <li><button onClick={gotoDashboard} className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>"User Name"</button></li>
                    <li><button onClick={gotoCashback} className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>Cash Back Calculator</button></li>
                    <li><button onClick={gotoServices} className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>Services</button></li>
                    <li><button onClick={gotoGuide} className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>Homebuyer Guides</button></li>
                    </ul>
                    <div className="mt-12 space-y-4">
                    <span><button onClick={gotoSpeak} className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4 text-sm font-semibold flex items-center space-x-2 hover:underline'>Speak to our team</button></span>
                    
                    <a href="/" className="text-sm font-semibold flex items-center space-x-2 hover:underline">
                        <span><button className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4'>About Bramble</button></span>
                    </a>
                    
                        <span><button onClick={gotoHomepage} className='hover:bg-pink-800 hover:text-white hover:p-2 rounded-xl hover:px-4 text-sm font-semibold flex items-center space-x-2 hover:underline'>Log Out</button></span>
                    </div>
                </div>
                </div>
            </div>
            </header>
    )

}

export default LogedInNavbar;