import React from 'react';

const GuideItem = ({ image, title, description }) => (
  <div className="flex flex-row w-full bg-white  rounded-lg overflow-hidden mb-6 ">
      <div className=" sm:w-1/3">
        <img src={image} alt={title} className="object-cover h-fit" />
      </div>
      <div className="w-2/3 p-6">
        <h3 className="text-2xl font-semibold  text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
  </div>
);

const HomebuyerGuide = () => {
  const guides = [
    {
      image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Understanding the Paperwork: A Guide to Homebuyer Agreements",
      description: "Confused about all the agreements you're being asked to sign? No problem - we'll give you a quick overview of all the major paperwork and some common things to watch out for."
    },
    {
      image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mythbusters: Homebuyer Edition",
      description: "There are a lot of dubious claims out there since the NAR settlement came into effect. For example, did you know you don't need to sign exclusive agreements to tour homes or use an agent? We're setting the record straight."
    },
    {
      image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Could Kamala pay your down payment?",
      description: "Down payments are expensive, but Kamala Harris has proposed $25k in assistance for first-time homebuyers. Check out more about her plan and other down payment assistance programs here."
    },
    // Add more guide objects as needed
  ];

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <header className="py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-pink-600">Assetland</h1>
        <nav>
          <a href="/" className="text-gray-600 hover:text-gray-900">HOMEBUYER GUIDES</a>
        </nav>
      </header>
      
      <main className="py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Assetland Guides</h2>
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
        <div className='flex flex-column w-full'>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            {guides.map((guide, index) => (
              <GuideItem key={index} {...guide} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomebuyerGuide;