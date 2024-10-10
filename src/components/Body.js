import React, { useState } from 'react';
import { Search,  ChevronRight } from 'lucide-react';
import Navbar from './NavBar';


const BrambleHomepage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (

    <div className="realtive  max-h-fit bg-white flex ">
          <Navbar className="w-full"/>
    
      <div className=" flex-1 py-4 ">
        {/* Main Content */}
        <main className=" max-w-6xl mx-auto px-6 mt-16 flex">
          <div className="w-1/2 pr-8 ">
            <div className="flex items-center mb-6">
              <span className="text-sm font-semibold mr-2">Backed by</span> 
              <div className="bg-[#ff6600] text-white px-1 font-bold">Y</div>
              <span className="ml-1 font-semibold">Combinator</span>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Flat-fee
              <br />
              homebuying
            </h1>
            <p className="text-2xl mb-4">Buy any home with Bramble.</p>
            <p className="text-2xl mb-8">
              Get <span className="text-[#d6156c] font-bold">$20,000</span> back.
            </p>
            <p className="text-gray-600 mb-4">Get an instant market analysis for any listing</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Type in an address or paste a Zillow link"
                className="w-full border border-gray-300 rounded-full py-3 px-6 pr-12"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="w-1/2">
            <img src="https://usebramble.com/assets/bramble-app-DAxXA2fD.webp" alt="1stpic" />
          </div>
        </main>
        <hr className="border-2" />
      </div>
    </div>
  );
};

const BrambleProcessPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Bramble supports buyers every step of the way</h1>
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Step 1 */}
        <div className="flex items-center space-x-8">
          <div className="w-1/2">
            <img src="https://usebramble.com/assets/bramble-comps-Dl0WBhzq.webp" alt="2ndpic" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold">Step 1: Evaluate listings</h2>
            <p className="text-xl">Get instant disclosure reviews, schedule tours, and find your dream home.</p>
            <a href="/bookcall" className="text-[#d6156c] flex items-center hover:underline">
              Want help touring or evaluating a property? Let us know.
              <ChevronRight className="ml-1" size={20} />
            </a>
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex items-center space-x-8">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold">Step 2: Make competitive offers, fast</h2>
            <p className="text-xl">Use our instant market reports, comps, and offer wizard to go from windowshopper to homebuyer.</p>
            <a href="#" className="text-[#d6156c] flex items-center hover:underline">
              Want help touring or evaluating a property? Let us know.
              <ChevronRight className="ml-1" size={20} />
            </a>
          </div>
          <div className="w-1/2">
            <img src="https://usebramble.com/assets/bramble-offers-Dc9Pu8HT.webp" alt="3rdpic" />
          </div>
        </div>
      </div>
    </div>
  );
};

const BrambleClosingAndFeePage = () => {
    const [homePrice, setHomePrice] = useState(2670000);
    const commission = (homePrice * 0.025).toFixed(2);
    const flatFee = 5000;
    const rebate = (commission - flatFee).toFixed(2);

    const handleSliderChange = (event) => {
        setHomePrice(parseInt(event.target.value));
      };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Step 3 */}
        <div className="flex items-center space-x-8">
          <div className="w-1/2">
            <img src="https://usebramble.com/assets/bramble-closing-Cfm8DP82.webp" alt="4thpic" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold">Step 3: Close with confidence</h2>
            <p className="text-xl">We support you through escrow end-to-end, from inspections to final walkthroughs.</p>
          </div>
        </div>
        {/* Flat Fee */}
        <div className="flex items-center space-x-8">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold">The best part? It's all for one flat fee</h2>
            <p className="text-xl">Because our fee doesn't increase with your home price.</p>
            


            <label htmlFor="homePrice" className="block mt-5">
                Enter your home's price
            </label>
            <input
                type="number"
                id="homePrice"
                value={homePrice.toLocaleString()}
                readOnly
                className="w-full p-2 mt-2 border border-gray-300 rounded"
            />

            <input
                type="range"
                id="priceSlider"
                className="slider w-full mt-4"
                min="100000"
                max="5000000"
                step="10000"
                value={homePrice}
                onChange={handleSliderChange}
            />

            <h3 className="mt-5 text-lg font-semibold">
                Your estimated rebate:{" "}
                <span className="text-pink-500 font-bold">
                ${parseFloat(rebate).toLocaleString()}
                </span>
            </h3>

            <div className="breakdown mt-5">
                <p>
                <strong>How it breaks down:</strong>
                </p>
                <p>
                Traditional agent commission:{" "}
                <span>${parseFloat(commission).toLocaleString()}</span>
                </p>
                <p>
                Bramble's flat fee:{" "}
                <span>${flatFee.toLocaleString()}</span>
                </p>
                <p>
                Your estimated rebate with Bramble*:{" "}
                <span className="text-pink-500 font-bold">
                    ${parseFloat(rebate).toLocaleString()}
                </span>
                </p>
                <small className="block mt-2">
                *assuming 2.5% buyer commission or credit from seller
                </small>

            </div>
            <p>
            When you use Bramble, you're getting all the expertise of the best agents in the business with none of the waiting involved in working with a traditional agent that's not responding to your emails. Plus you get a huge chunk of money back ($20,000 for the average home buyer in California!).
            </p>
            


          </div>
          <div className="w-1/2">
            <img src="https://usebramble.com/assets/bramble-savings-RZ7ye5Fz.webp" alt="5thpic" />
          </div>
        </div>
      </div>
      <hr className="border-2" />
    </div>
  );
};

const AgentSection = () => {

    


      
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6">
                The best agents in the biz are always a call away
            </h2>
        <div className="max-w-6xl mx-auto flex justify-between items-start space-x-8">
            
          {/* Agent card */}
          <div className="w-1/3 text-center">
            <div className="mb-4 text-[#d6156c] font-semibold">Featured Agent</div>
            <img
              src="https://usebramble.com/assets/tony-N2IoW0k4.webp" // Replace with actual image URL
              alt="Tony Andrade"
              className=" mx-auto mb-4"
              style={{ width: '100px', height: '100px' }}
            />
            <h3 className="text-lg font-bold">Tony Andrade</h3>
            <p className="text-sm text-gray-600">
              5.0 <span className="text-[#d6156c]">★</span> | 500+ sales
            </p>
          </div>
  
          {/* Testimonial 1 */}
          <div className="w-1/3">
            <div className="flex items-center space-x-1 mb-2">
              <span className="text-[#d6156c]">★★★★★</span>
            </div>
            <p className="text-sm">
              I recently closed on our first home and it was because of Tony! We
              could not have been happier with his service! - Patricia, Cambrian
              Park, CA
            </p>
          </div>
  
          {/* Testimonial 2 */}
          <div className="w-1/3">
            <div className="flex items-center space-x-1 mb-2">
              <span className="text-[#d6156c]">★★★★★</span>
            </div>
            <p className="text-sm">
              [Tony] was helpful, fast to respond, and contributed to closing this
              on the quick timelines required in SF. Would work with him again. -
              Lukas, San Francisco, CA
            </p>
          </div>
  
          {/* Testimonial 3 */}
          <div className="w-1/3">
            <div className="flex items-center space-x-1 mb-2">
              <span className="text-[#d6156c]">★★★★★</span>
            </div>
            <p className="text-sm">
              Very easy to work with! - Jackie & Jimmy, Burlingame, CA
            </p>
          </div>
        </div>
  
        {/* Footer */}
        <div className="max-w-6xl mx-auto mt-12 flex justify-between items-center text-gray-600 text-sm">
          <div>
            <div>© Village AI, Inc 2024</div>
            <div>CalDRE# 02247723</div>
          </div>
          <div className="flex space-x-2">
            <p className="hover:underline">
              team@usebramble.com
            </p>
            <span>·</span>
            <p className="hover:underline">
              Terms of Use
            </p>
            <span>·</span>
            <p className="hover:underline">
              Privacy Policy
            </p>
            <span>·</span>
            <p className="hover:underline">
              Cookie Policy
            </p>
          </div>
          <div>
            <div>© Zillow, Inc., 2006-2023. Use is subject to Terms of Use</div>
          </div>
        </div>
      </div>
    );
  };
  


const Body = () => {
  return (
    <div>
      <BrambleHomepage />
      <BrambleProcessPage />
      <BrambleClosingAndFeePage />
      <AgentSection />
    </div>
  );
};

export default Body;
