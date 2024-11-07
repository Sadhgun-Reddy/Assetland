import React, { useState } from 'react';
import { X, Share2, Heart, MoreHorizontal, Building2, Calendar, Database } from 'lucide-react';

const HouseDetailModal = ({ listing, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);

  if (!listing) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl  w-full max-w-4xl relative h-auto max-h-full">

        {/* Header with navigation and actions */}
        <div className="flex items-center justify-between p-4 border-b">
          <button
            className="flex items-center text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <X className="w-5 h-5 mr-2" />
            Back to search
          </button>
          <div className="flex items-center gap-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Heart
                className={`w-5 h-5 ${isSaved ? 'fill-blue-500 text-blue-500' : ''}`}
              />
              <span className="ml-1">Save</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Share2 className="w-5 h-5" />
              <span className="ml-1">Share</span>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/*House Image */}
        <div className="flex flex-col md:flex-row justify-between items-center  px-6 md:px-0">
          <div className="md:w-1/2 mr-6">
            <img
              src="https://photos.zillowstatic.com/fp/9de70edeac95aafa95abfcc17eff14bd-cc_ft_1536.webp"
              alt="House"
              className="w-full h-auto mb-6 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 mr-6">
            <img
              src="https://photos.zillowstatic.com/fp/9de70edeac95aafa95abfcc17eff14bd-cc_ft_1536.webp"
              alt="House"
              className="w-full h-auto mb-6 md:mb-0"
            />
          </div>
        </div>

        
        {/* Main content */}
        <div className="p-6 mt-5 bg-white">
          {/* Price section */}
          <div className="mb-6">
            <div className="text-sm text-red-600 mb-1">
              Price cut: ${listing.priceCut?.toLocaleString()} (10/25)
            </div>
            <h1 className="text-4xl font-semibold mb-2">
              ${listing.price?.toLocaleString()}
            </h1>
            <p className="text-lg text-gray-700">{listing.address}</p>
          </div>

          {/* Key details */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-semibold">{listing.beds || '--'}</div>
              <div className="text-gray-600">beds</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold">{listing.baths || '--'}</div>
              <div className="text-gray-600">baths</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold">
                {listing.sqft ? `${listing.sqft.toLocaleString()}` : '--'}
              </div>
              <div className="text-gray-600">sqft</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
              Request a tour
              <div className="text-sm font-normal">as early as today at 11:00 am</div>
            </button>
            <button className="flex-1 border border-blue-500 text-blue-500 py-3 px-6 rounded-lg hover:bg-blue-50">
              Contact agent
            </button>
          </div>

          {/* Property details */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-gray-600" />
              <span>Multi Family</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <span>Built in {listing.yearBuilt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-gray-600" />
              <span>{listing.lotSize} sqft lot</span>
            </div>
          </div>

          {/* What's special section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">What's special</h2>
            <div className="flex gap-3 mb-4">
              {listing.features?.map((feature, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
            <p className="text-gray-700">{listing.description}</p>
          </div>

          {/* Listing details */}
          <div className="text-sm text-gray-600 space-y-2">
            <div>Listed by: {listing.agent}</div>
            <div>Source: {listing.source}</div>
            <div>Last checked: {listing.lastChecked}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailModal;