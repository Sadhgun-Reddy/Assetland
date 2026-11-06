import React, { useState, useCallback, useMemo } from 'react';
import { Search, ChevronDown, Heart } from 'lucide-react';
import Navbar from './NavBar';
import HouseDetailModal from './HouseDetailModal';

const LISTINGS = [
  {
    id: 1,
    price: 325000,
    beds: 4,
    baths: 3,
    address: '437 Winthrop Dr, Pittsburgh, PA 15237',
    agent: 'Carol Tomayko',
    date: '2023-10-01'
  },
  {
    id: 2,
    price: 285000,
    beds: 4,
    baths: 2,
    sqft: 2088,
    address: '1978 3rd Ave, York, PA 17402',
    agent: 'BERKSHIRE HATHAWAY HOMESERVICES HOMESALE REALTY',
    date: '2023-09-15'
  },
  {
    id: 3,
    price: 376800,
    beds: 4,
    baths: 3,
    sqft: 2325,
    address: '1666 Cedar Creek Rd, Fayetteville, NC 28312',
    agent: 'CRESFUND REALTY, LINDSAY COLLINS',
    date: '2023-10-25'
  }
];

const ForSale = () => {
  const [savedHomes, setSavedHomes] = useState({});
  const [selectedListing, setSelectedListing] = useState(null);
  const [sortOption, setSortOption] = useState("default");

  const toggleSaveHome = useCallback((id) => {
    setSavedHomes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  const openModal = (listing) => setSelectedListing(listing);
  const handleModalClose = () => {
    setSelectedListing(null);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  
  const sortedListings = useMemo(() => {
    return [...LISTINGS].sort((a, b) => {
      switch (sortOption) {
        case "agent":
          return a.agent.localeCompare(b.agent);
        case "price_asc":
          return a.price - b.price;
        case "price_desc":
          return b.price - a.price;
        case "date":
          return new Date(b.date) - new Date(a.date);
        default:
          return 0;
      }
    });
  }, [sortOption]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex flex-col pt-16 h-[calc(100vh)]">
        {/* Search Header */}
        <div className="bg-white p-4 border-b flex flex-wrap items-center gap-4 sticky top-0 z-10">
          <div className="relative flex-1 min-w-[280px] max-w-md">
            <input
              type="text"
              placeholder="Address, neighborhood, city, ZIP"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d6156c]"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              For Sale
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Price
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Beds & Baths
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Home Type
            </button>
          </div>

          <button className="ml-auto px-6 py-2 bg-[#d6156c] text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors">
            Save search
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Map Section */}
          <div className="hidden md:block w-1/2 relative bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12234.341499507963!2d-75.1652215!3d39.9525839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '600px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Property Map Map"
            ></iframe>
          </div>

          {/* Listings Section */}
          <div className="w-full md:w-1/2 p-6 overflow-y-auto bg-white">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Real Estate & Homes For Sale</h1>
                <p className="text-gray-500 mt-1">{sortedListings.length} results</p>
              </div>

              <div className="relative">
                <select
                  value={sortOption}
                  onChange={handleSortChange}
                  className="appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 rounded-lg font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#d6156c] cursor-pointer"
                >
                  <option value="default">Homes for You</option>
                  <option value="price_asc">Price (Low to High)</option>
                  <option value="price_desc">Price (High to Low)</option>
                  <option value="date">Newest</option>
                  <option value="agent">Agent Name</option>
                </select>
                <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
              {sortedListings.map((listing) => (
                <div
                  key={listing.id}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white"
                  onClick={() => openModal(listing)}
                >
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop"
                      alt="House"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveHome(listing.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-sm"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${savedHomes[listing.id] ? 'fill-[#d6156c] text-[#d6156c]' : 'text-gray-600'}`}
                      />
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      ${listing.price.toLocaleString()}
                    </div>
                    <div className="text-gray-700 font-medium mb-2">
                      {listing.beds} bds <span className="text-gray-400 mx-1">|</span>
                      {listing.baths} ba <span className="text-gray-400 mx-1">|</span>
                      {listing.sqft ? `${listing.sqft.toLocaleString()} sqft` : '-- sqft'}
                    </div>
                    <div className="text-gray-600 truncate mb-1">{listing.address}</div>
                    <div className="text-xs text-gray-500 font-medium truncate uppercase tracking-wide">
                      {listing.agent}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* House Detail Modal */}
      {selectedListing && (
        <HouseDetailModal
          listing={selectedListing}
          onClose={handleModalClose}
          isSaved={savedHomes[selectedListing.id] || false}
          toggleSave={() => toggleSaveHome(selectedListing.id)}
        />
      )}
    </div>
  );
};

export default ForSale;
