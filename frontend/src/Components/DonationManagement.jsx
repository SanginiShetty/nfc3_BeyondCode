// src/components/DonationManagement.js
import React, { useState } from 'react';

const DonationManagement = () => {
  const [donations, setDonations] = useState([]);
  const [newDonation, setNewDonation] = useState({
    donorName: '',
    amount: '',
    date: '',
    method: '',
    purpose: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDonation({ ...newDonation, [name]: value });
  };

  const addDonation = () => {
    if (newDonation.donorName && newDonation.amount && newDonation.date) {
      setDonations([...donations, newDonation]);
      setNewDonation({
        donorName: '',
        amount: '',
        date: '',
        method: '',
        purpose: '',
      });
    }
  };

  const deleteDonation = (index) => {
    const updatedDonations = donations.filter((_, i) => i !== index);
    setDonations(updatedDonations);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Donation Management</h1>

      <div className="mb-6">
        <input
          type="text"
          name="donorName"
          placeholder="Donor Name"
          value={newDonation.donorName}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="number"
          name="amount"
          placeholder="Donation Amount"
          value={newDonation.amount}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="date"
          name="date"
          placeholder="Donation Date"
          value={newDonation.date}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="method"
          placeholder="Payment Method"
          value={newDonation.method}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <textarea
          name="purpose"
          placeholder="Purpose"
          value={newDonation.purpose}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <button
          onClick={addDonation}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Donation
        </button>
      </div>

      <ul className="space-y-4">
        {donations.map((donation, index) => (
          <li
            key={index}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{donation.donorName}</p>
              <p>Amount: ${donation.amount}</p>
              <p>Date: {donation.date}</p>
              <p>Method: {donation.method}</p>
              <p>Purpose: {donation.purpose}</p>
            </div>
            <button
              onClick={() => deleteDonation(index)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationManagement;
