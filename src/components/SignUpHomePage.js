import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import Navbar from './NavBar';
import Footer from './Footer';

const SignUpHomePage = () => {
  const [homePrice, setHomePrice] = useState(2670000);
  const commission = (homePrice * 0.025).toFixed(2);
  const flatFee = 5000;
  const rebate = (commission - flatFee).toFixed(2);

  const handleSliderChange = (event) => {
    setHomePrice(parseInt(event.target.value));
  };

  return (
    <div className="bg-white">
      <Navbar className="w-full" />

      {/* Bramble Homepage */}
      <div className="flex flex-col py-4 md:flex-row items-center md:items-start pt-16">
        <main className="max-w-6xl mx-auto px-6 mt-8 md:mt-16 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/3 pr-8">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Flat-fee<br />homebuying</h1>
            <p className="text-lg md:text-2xl mb-2 md:mb-4">Buy any home with Bramble.</p>
            <p className="text-lg md:text-2xl mb-4 md:mb-8">
              Get <span className="text-[#d6156c] font-bold">$20,000</span> back.
            </p>
            <p className="text-gray-600 mb-2 md:mb-4">Get an instant market analysis for any listing</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Type in an address or paste a Zillow link"
                className="w-full border border-gray-300 rounded-full py-2 md:py-3 px-4 md:px-6 pr-10 md:pr-12"
              />
              <Search className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <img
              src="https://usebramble.com/assets/bramble-app-DmbpbX1J.webp"
              alt="Bramble App"
              className="w-full h-auto"
            />
          </div>
        </main>
      </div>

      {/* Bramble Process Page */}
      <div className="p-6 md:p-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Bramble supports buyers every step of the way</h1>
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
            <div className="w-full md:w-1/3">
              <img src="https://usebramble.com/assets/bramble-comps-Dl0WBhzq.webp" alt="Evaluate listings" className="w-full h-auto" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-xl md:text-3xl font-bold">Step 1: Evaluate listings</h2>
              <p className="text-md md:text-xl mt-2">Get instant disclosure reviews, schedule tours, and find your dream home.</p>
              <a href="/bookcall" className="text-[#d6156c] flex items-center hover:underline mt-2">
                Want help touring or evaluating a property? Let us know.
                <ChevronRight className="ml-1" size={20} />
              </a>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
            <div className="w-full md:w-2/3 order-last md:order-first">
              <h2 className="text-xl md:text-3xl font-bold">Step 2: Make competitive offers, fast</h2>
              <p className="text-md md:text-xl mt-2">Use our instant market reports, comps, and offer wizard to go from window shopper to homebuyer.</p>
              <a href="/bookcall" className="text-[#d6156c] flex items-center hover:underline mt-2">
                Want help touring or evaluating a property? Let us know.
                <ChevronRight className="ml-1" size={20} />
              </a>
            </div>
            <div className="w-full md:w-1/3">
              <img src="https://usebramble.com/assets/bramble-offers-ZKcWzHKS.webp" alt="Make offers" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Bramble Closing and Fee Page */}
      <div className="bg-white p-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
            <div className="w-full md:w-1/3">
              <img src="https://usebramble.com/assets/bramble-closing-Cfm8DP82.webp" alt="Closing confidence" className="w-full h-auto" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-xl md:text-3xl font-bold">Step 3: Close with confidence</h2>
              <p className="text-md md:text-xl mt-2">We support you through escrow end-to-end, from inspections to final walkthroughs.</p>
            </div>
          </div>
          {/* Flat Fee */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
            <div className="w-full md:w-2/3">
              <h2 className="text-xl md:text-3xl font-bold">The best part? It's all for one flat fee</h2>
              <p className="text-md md:text-xl mt-2">Because our fee doesn't increase with your home price.</p>
              <label htmlFor="homePrice" className="block mt-5">Enter your home's price</label>
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
              <h3 className="mt-5 text-md md:text-lg font-semibold">
                Your estimated rebate:{" "}
                <span className="text-pink-500 font-bold">${parseFloat(rebate).toLocaleString()}</span>
              </h3>
              <div className="breakdown mt-5">
                <p><strong>How it breaks down:</strong></p>
                <p>Traditional agent commission: <span>${parseFloat(commission).toLocaleString()}</span></p>
                <p>Bramble's flat fee: <span>${flatFee.toLocaleString()}</span></p>
                <p>Your estimated rebate with Bramble*: <span className="text-pink-500 font-bold">${parseFloat(rebate).toLocaleString()}</span></p>
                <small className="block mt-2">*assuming 2.5% buyer commission or credit from seller</small>
              </div>
              <p className="mt-4">
                When you use Bramble, you're getting all the expertise of the best agents in the business with none of the waiting involved in working with a traditional agent.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <img src="https://usebramble.com/assets/bramble-savings-D9ITU2-P.webp" alt="Bramble savings" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Agent Section */}
      <div className="py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          The best agents in the biz are always a call away
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {/* Agent Card */}
          <div className="w-full md:w-1/3 text-center">
            <div className="mb-4 text-[#d6156c] font-semibold">Featured Agent</div>
            <img
              src="https://usebramble.com/assets/tony-N2IoW0k4.webp"
              alt="Tony Andrade"
              className="mx-auto mb-4 rounded-full"
              style={{ width: '80px', height: '80px' }}
            />
            <h3 className="text-lg md:text-xl font-bold">Tony Andrade</h3>
            <p className="text-sm md:text-base text-gray-600">
              5.0 <span className="text-[#d6156c]">★</span> | 500+ sales
            </p>
          </div>

          {/* Testimonials */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center space-x-1 mb-2">
              <span className="text-[#d6156c]">★★★★★</span>
            </div>
            <p className="text-sm md:text-base">
              I recently closed on our first home, and it was because of Tony! - Patricia, Cambrian Park, CA
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center space-x-1 mb-2">
              <span className="text-[#d6156c]">★★★★★</span>
            </div>
            <p className="text-sm md:text-base">
              Tony was helpful, fast to respond, and helped us close quickly. - Lukas, San Francisco, CA
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center space-x-1 mb-2">
              <span className="text-[#d6156c]">★★★★★</span>
            </div>
            <p className="text-sm md:text-base">
              Very easy to work with! - Jackie & Jimmy, Burlingame, CA
            </p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default SignUpHomePage;
