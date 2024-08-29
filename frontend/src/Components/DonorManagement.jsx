// src/components/DonorManagement.js
import React, { useState } from 'react';

const DonorManagement = () => {
  const [donors, setDonors] = useState([]);
  const [newDonor, setNewDonor] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    amount: '',
    donationDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDonor({ ...newDonor, [name]: value });
  };

  const addDonor = () => {
    if (newDonor.name && newDonor.email && newDonor.amount) {
      setDonors([...donors, newDonor]);
      setNewDonor({
        name: '',
        email: '',
        phone: '',
        address: '',
        amount: '',
        donationDate: '',
      });
    }
  };

  const deleteDonor = (index) => {
    const updatedDonors = donors.filter((_, i) => i !== index);
    setDonors(updatedDonors);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Donor Management</h1>

      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Donor Name"
          value={newDonor.name}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Donor Email"
          value={newDonor.email}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={newDonor.phone}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newDonor.address}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="number"
          name="amount"
          placeholder="Donation Amount"
          value={newDonor.amount}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="date"
          name="donationDate"
          placeholder="Donation Date"
          value={newDonor.donationDate}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <button
          onClick={addDonor}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Donor
        </button>
      </div>

      <ul className="space-y-4">
        {donors.map((donor, index) => (
          <li
            key={index}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{donor.name}</p>
              <p>Email: {donor.email}</p>
              <p>Phone: {donor.phone}</p>
              <p>Address: {donor.address}</p>
              <p>Donation Amount: ${donor.amount}</p>
              <p>Donation Date: {donor.donationDate}</p>
            </div>
            <button
              onClick={() => deleteDonor(index)}
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

export default DonorManagement;
