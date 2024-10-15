import React, { useState } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const ServicesSection = () => {
  return (
    <div>
      <Navbar className="w-full" />
      <div className="bg-white text-gray-800">
        <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-black mb-6">Services</h1>
          <p className="mb-8 text-lg">
            Getting representation from a traditional real estate broker can be expensive.
          </p>
          <p className="mb-8 text-lg">
            Bramble is the all-in-one option for home buyers looking to close on a house. We offer guidance, support, and cutting-edge technology to get you through the process without the high commission fees of the traditional brokerage model.
          </p>

          <div className="space-y-4">
            {serviceItems.map((item, index) => (
              <ServiceItem key={index} {...item} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 pb-4">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleDescription}>
        <span className="text-2xl" aria-hidden="true">{icon}</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
};

const serviceItems = [
  {
    title: "Showings",
    description: "Let us know which properties you're interested in, and we'll schedule showings for you. We're on deck to answer any questions you have about the property or the process.",
    icon: "👣",
  },
  {
    title: "Disclosure Review",
    description: "We'll review all disclosures and reports for you and help you understand what they mean for you.",
    icon: "📄",
  },
  {
    title: "Offer Preparation",
    description: "Use our proprietary offer tool to seamlessly draft your offer. We'll review it with you to give you the best chances of success and take care of the rest.",
    icon: "✏",
  },
  {
    title: "Negotiation",
    description: "We've got your back. We'll negotiate on your behalf to get you the best deal possible.",
    icon: "🤝",
  },
  {
    title: "Closing",
    description: "We'll be there for you every step of the way, from offer acceptance to close. We'll make sure everything goes smoothly and answer any questions you have.",
    icon: "🏁",
  },
  {
    title: "General Support",
    description: "Our team has some of the best real estate lawyers and agents in the business. If something comes up, we're here to help - and you'll only pay for what you need. We never take percentage-based commission.",
    icon: "❓",
  },
];

export default ServicesSection;
