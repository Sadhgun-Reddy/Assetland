import React from 'react';

const GuideItem = ({ image, title, description }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4 flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const HomebuyerGuide = () => {
  const guides = [
    {
      image: "/images/paperwork.jpg",
      title: "Understanding the Paperwork: A Guide to Homebuyer Agreements",
      description: "Confused about all the agreements you're being asked to sign? No problem - we'll give you a quick overview of all the major paperwork and some common things to watch out for."
    },
    {
      image: "/images/mythbusters.jpg",
      title: "Mythbusters: Homebuyer Edition",
      description: "There are a lot of dubious claims out there since the NAR settlement came into effect. For example, did you know you don't need to sign exclusive agreements to tour homes or use an agent? We're setting the record straight."
    },
    {
      image: "/images/downpayment.jpg",
      title: "Could Kamala pay your down payment?",
      description: "Down payments are expensive, but Kamala Harris has proposed $25k in assistance for first-time homebuyers. Check out more about her plan and other down payment assistance programs here."
    },
    // Add more guide objects as needed
  ];

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <header className="py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-pink-600">bramble</h1>
        <nav>
          <a href="#" className="text-gray-600 hover:text-gray-900">HOMEBUYER GUIDES</a>
        </nav>
      </header>
      
      <main className="py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Bramble Guides</h2>
        <p className="mb-6 text-center max-w-2xl mx-auto">
          Welcome to Bramble Guides, your one-stop-shop for detailed, behind-the-scenes deep dives into everything when buying a home.
        </p>
        
        <div className="mb-8 flex justify-center">
          <input 
            type="email" 
            placeholder="frank@wright.com" 
            className="border border-gray-300 p-2 rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
          />
          <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition duration-300">
            GET IN TOUCH
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <GuideItem key={index} {...guide} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomebuyerGuide;