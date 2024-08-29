import React, { useState } from 'react';

const Crowdfunding = () => {
  const [amountRaised, setAmountRaised] = useState(4500); // Example amount raised
  const fundingGoal = 10000; // Example funding goal

  const handleContribute = () => {
    // Logic to handle contribution (e.g., open payment gateway)
    alert("Thank you for your contribution!");
  };

  const progress = (amountRaised / fundingGoal) * 100;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Help Build a School in Rural Area</h2>
      <p className="text-gray-600 mb-6">
        Our mission is to raise funds to build a school for underprivileged children in a remote area. Every contribution brings us closer to making education accessible to all.
      </p>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 font-medium">${amountRaised} raised</span>
          <span className="text-gray-700 font-medium">${fundingGoal} goal</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-[#3E8B96] h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <button
        onClick={handleContribute}
        className="w-full py-3 bg-[#3E8B96] text-white rounded-lg hover:bg-[#34717f] transition duration-300 ease-in-out transform hover:scale-105"
      >
        Contribute
      </button>
    </div>
  );
};

export default Crowdfunding;
