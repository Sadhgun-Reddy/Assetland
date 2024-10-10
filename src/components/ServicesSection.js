// components/ServicesSection.js
import React from 'react';

const ServicesSection = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-black mb-6">Services</h1>
        <p className="mb-8 text-lg">
          Getting representation from a traditional real estate broker can be expensive.
        </p>
        <p className="mb-8 text-lg">
          Bramble is the all-in-one option for home buyers looking to close on a house. We offer guidance, support, and cutting-edge technology to get you through the process without the high commission fees of the traditional brokerage model.
        </p>

        <div className="space-y-4">
          {/* Showings */}
          <ServiceItem
            title="Showings"
            description="Let us know which properties you're interested in, and we'll schedule showings for you. We're on deck to answer any questions you have about the property or the process."
            icon="👣"
          />

          {/* Disclosure Review */}
          <ServiceItem
            title="Disclosure Review"
            description="We'll review all disclosures and reports for you and help you understand what they mean for you."
            icon="📄"
          />

          {/* Offer Preparation */}
          <ServiceItem
            title="Offer Preparation"
            description="Use our proprietary offer tool to seamlessly draft your offer. We'll review it with you to give you the best chances of success and take care of the rest."
            icon="✏"
          />

          {/* Negotiation */}
          <ServiceItem
            title="Negotiation"
            description="We've got your back. We'll negotiate on your behalf to get you the best deal possible."
            icon="🤝"
          />

          {/* Closing */}
          <ServiceItem
            title="Closing"
            description="We'll be there for you every step of the way, from offer acceptance to close. We'll make sure everything goes smoothly and answer any questions you have."
            icon="🏁"
          />

          {/* General Support */}
          <ServiceItem
            title="General Support"
            description="Our team has some of the best real estate lawyers and agents in the business. If something comes up, we're here to help - and you'll only pay for what you need. We never take percentage-based commission."
            icon="❓"
          />
        </div>
      </div>

      <footer className="text-sm text-gray-500 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <p>&copy; Village AI, Inc 2024 | CalDRE# 02247723</p>
            <p className="flex space-x-4">
              <a href="#" className="hover:text-gray-900">Terms of Use</a>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Cookie Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceItem = ({ title, description, icon }) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-semibold hover:underline">{title}</h2>
      </div>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
};

export default ServicesSection;