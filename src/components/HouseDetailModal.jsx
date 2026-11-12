import React from 'react';
import { X, Share2, Heart, MoreHorizontal, Building2, Calendar, Database } from 'lucide-react';

const HouseDetailModal = ({ listing, onClose, isSaved, toggleSave }) => {
  if (!listing) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl w-full max-w-4xl relative h-auto max-h-[95vh] overflow-y-auto shadow-2xl">

        {/* Header with navigation and actions */}
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
          <button
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
            onClick={onClose}
          >
            <X className="w-5 h-5 mr-2" />
            Back to search
          </button>
          <div className="flex items-center gap-6">
            <button
              className="flex items-center text-gray-600 hover:text-[#d6156c] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6156c]"
              onClick={toggleSave}
            >
              <Heart
                className={`w-5 h-5 transition-colors ${isSaved ? 'fill-[#d6156c] text-[#d6156c]' : ''}`}
              />
              <span className="ml-2 font-medium">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6156c]">
              <Share2 className="w-5 h-5" />
              <span className="ml-2 font-medium">Share</span>
            </button>
            <button
              className="text-gray-600 hover:text-gray-900 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6156c]"
              aria-label="More options"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* House Image */}
        <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-50">
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop"
              alt="House Exterior"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-sm hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
              alt="House Interior"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="p-8 bg-white">
          {/* Price section */}
          <div className="mb-8">
            {listing.priceCut && (
              <div className="text-sm font-semibold text-[#d6156c] mb-2 uppercase tracking-wide">
                Price cut: ${listing.priceCut.toLocaleString()}
              </div>
            )}
            <h1 className="text-5xl font-bold text-gray-900 mb-3">
              ${listing.price?.toLocaleString()}
            </h1>
            <p className="text-xl text-gray-600">{listing.address}</p>
          </div>

          {/* Key details */}
          <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-gray-100">
            <div className="text-center border-r border-gray-100">
              <div className="text-3xl font-bold text-gray-900">{listing.beds || '--'}</div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm mt-1">beds</div>
            </div>
            <div className="text-center border-r border-gray-100">
              <div className="text-3xl font-bold text-gray-900">{listing.baths || '--'}</div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm mt-1">baths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                {listing.sqft ? listing.sqft.toLocaleString() : '--'}
              </div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm mt-1">sqft</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 mb-12">
            <button className="flex-1 bg-[#d6156c] text-white py-4 px-6 rounded-xl hover:bg-pink-700 transition-colors shadow-md">
              <div className="font-bold text-lg">Request a tour</div>
              <div className="text-sm font-medium text-pink-100 mt-1">as early as today at 11:00 am</div>
            </button>
            <button className="flex-1 border-2 border-[#d6156c] text-[#d6156c] font-bold text-lg py-4 px-6 rounded-xl hover:bg-pink-50 transition-colors">
              Contact agent
            </button>
          </div>

          {/* Property details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <Building2 className="w-6 h-6 text-gray-600" />
              </div>
              <span className="font-medium text-gray-700">Single Family</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <Calendar className="w-6 h-6 text-gray-600" />
              </div>
              <span className="font-medium text-gray-700">Built in {listing.yearBuilt || '2005'}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <Database className="w-6 h-6 text-gray-600" />
              </div>
              <span className="font-medium text-gray-700">{listing.lotSize || '6,500'} sqft lot</span>
            </div>
          </div>

          {/* What's special section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's special</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {(listing.features || ['Hardwood Floors', 'Updated Kitchen', 'Large Backyard']).map((feature, index) => (
                <span
                  key={index}
                  className="bg-pink-50 text-[#d6156c] font-medium px-4 py-2 rounded-full text-sm border border-pink-100"
                >
                  {feature}
                </span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {listing.description || 'Welcome to this beautiful home featuring modern updates throughout. Enjoy spacious living areas, a gourmet kitchen with stainless steel appliances, and a serene master suite. The large backyard is perfect for entertaining. Don\'t miss out on this incredible opportunity!'}
            </p>
          </div>

          {/* Listing details */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="text-sm font-medium text-gray-500 space-y-3">
              <div className="flex justify-between">
                <span>Listed by:</span>
                <span className="text-gray-900">{listing.agent}</span>
              </div>
              <div className="flex justify-between">
                <span>Source:</span>
                <span className="text-gray-900">{listing.source || 'MLS'}</span>
              </div>
              <div className="flex justify-between">
                <span>Listed Date:</span>
                <span className="text-gray-900">{listing.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailModal;
