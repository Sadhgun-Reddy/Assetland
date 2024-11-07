import React, { useState } from 'react';
import { Search, ChevronDown, Heart } from 'lucide-react';
import Navbar from './NavBar';
import HouseDetailModal from './HouseDetailModal';


const items = [
];
const ForSale = () => {
    
  const [savedHomes, setSavedHomes] = useState({});
  const [selectedListing, setSelectedListing] = useState(null);

  const toggleSaveHome = (id) => {
    setSavedHomes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const openModal = (listing) => setSelectedListing(listing);
  const handleModalClose = () => {
    setSelectedListing(null);
  };

  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  
  const sortedItems = [...items].sort((a, b) => {
    switch (sortOption) {
      case "name":
        return a.name.localeCompare(b.name);
      case "price":
        return a.price - b.price;
      case "date":
        return new Date(b.date) - new Date(a.date);
      default:
        return 0;
    }
  });

  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col pt-6">
        {/* Search Header */}
        <div className="p-4 border-b flex items-center gap-2 pt-14">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Address, neighborhood, city, ZIP"
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>


          <div className="p-4">
            {/* Sorting Dropdown */}
            <div className="mb-4">
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="p-2 border rounded-md shadow-md focus:outline-none focus:border-blue-500"
              >
                <option value="default">Default</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="date">Date</option>
              </select>
            </div>

            {/* Display Sorted Items */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sortedItems.map((listing) => (
                <div key={listing.id} className="p-4 border rounded-md shadow-md">
                  <h2 className="text-lg font-semibold">{listing.name}</h2>
                  <p>Price: ${listing.price}</p>
                  <p>Date: {new Date(listing.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>




          <button className="px-4 py-2 border rounded-md flex items-center gap-2">
            For Sale
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border rounded-md flex items-center gap-2">
            Price
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border rounded-md flex items-center gap-2">
            Beds & Baths
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border rounded-md flex items-center gap-2">
            Home Type
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 border rounded-md flex items-center gap-2">
            More
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Save search
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row w-full ">
          {/* Map Section */}
          <div className="w-full md:w-1/2 relative">
            <div className="hidden md:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58717742.16813055!2d91.42618060086467!3d20.18596708760428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1730714310575!5m2!1sen!2sin"
                width="100%"
                height="650"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Listings Section */}
          <div className="w-full md:w-1/2 p-4  overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-xl font-semibold">Real Estate & Homes For Sale</h1>
                <p className="text-gray-600">"fetched" results</p>
              </div>
              <button className="flex items-center gap-2">
                Sort: Homes for You
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {[
                {
                  id: 1,
                  price: 325000,
                  beds: 4,
                  baths: 3,
                  address: '437 Winthrop Dr, Pittsburgh, PA 15237',
                  agent: 'Carol Tomayko'
                },
                {
                  id: 2,
                  price: 285000,
                  beds: 4,
                  baths: 2,
                  sqft: 2088,
                  address: '1978 3rd Ave, York, PA 17402',
                  agent: 'BERKSHIRE HATHAWAY HOMESERVICES HOMESALE REALTY'
                },
                
                {
                  id: 3,
                  price: 376800,
                  beds: 4,
                  baths: 3,
                  sqft: 2325,
                  address: '1666 Cedar Creek Rd, Fayetteville, NC 28312',
                  agent: 'CRESFUND REALTY, LINDSAY COLLINS'
                }
              ].map((listing) => (
                <div
                  key={listing.id}
                  className="border rounded-lg overflow-hidden hover:shadow-2xl hover:cursor-pointer"
                  onClick={() => openModal(listing)}
                >
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveHome(listing.id);
                      }}
                      className="absolute top-2 right-2 p-1 rounded-full bg-white"
                    >
                      <Heart className={`w-5 h-5 ${savedHomes[listing.id] ? 'fill-current text-red-500' : 'text-gray-600'}`} />
                    </button>
                    <div className="h-48 bg-gray-200">{/* House image */}</div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="text-2xl font-semibold">
                        ${listing.price.toLocaleString()}
                      </div>
                      <button className="text-blue-600">•••</button>
                    </div>
                    <div className="mt-2 text-gray-700">
                      {listing.beds} bds | {listing.baths} ba | {listing.sqft ? `${listing.sqft.toLocaleString()} sqft` : '-- sqft'}
                    </div>
                    <div className="mt-1 text-gray-700">{listing.address}</div>
                    <div className="mt-1 text-gray-500 text-sm">{listing.agent}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* House Detail Modal */}
      {selectedListing && (
        <HouseDetailModal listing={selectedListing} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default ForSale;
