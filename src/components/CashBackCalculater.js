import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import LogedInNavbar from "./LogedInNavbar"; // Import logged-in navbar
import Navbar from "./NavBar"; // Import non-logged-in navbar

const CashBackCalculatorComponent = () => {
  const [homePrice, setHomePrice] = useState(2670000);

  // Calculate values based on home price
  const commission = useMemo(() => (homePrice * 0.025).toFixed(2), [homePrice]);
  const flatFee = 5000;
  const rebate = useMemo(() => (commission - flatFee).toFixed(2), [commission, flatFee]);

  // Function to update the home price when the slider changes
  const handleSliderChange = (event) => {
    setHomePrice(Number(event.target.value));
  };

  // Retrieve user authentication status from Redux store
  const user = useSelector((state) => state.user);

  return (
    <div>
      {/* Conditional Navbar Rendering */}
      {user ? <LogedInNavbar /> : <Navbar className="w-full" />}
      
      <div className="max-w-xl mx-auto p-5 font-sans">
        <h2 className="text-xl font-bold pt-20">The most money in your pocket, guaranteed</h2>
        <p>
          Instead of charging a percent commission like most real estate brokers, we use an easy flat fee. We've streamlined the homebuying process with powerful AI tools, and since we save big, you do too.
        </p>

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
        
        <div className="mt-10 flex">
          <button className="border border-blue-500 bg-blue-900 text-white font-semibold py-2 px-4 rounded mx-16">
            Get Started
          </button>
          <a href="/bookcall">
            <button className="border border-black bg-white text-black font-semibold py-2 px-4 rounded">
              Book a Call
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CashBackCalculatorComponent;
