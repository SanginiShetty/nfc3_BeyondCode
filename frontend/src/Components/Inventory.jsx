import React, { useState } from 'react';

const InventoryManagement = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    quantity: '',
    category: '',
    location: '',
    condition: 'Good',
    dateAdded: '',
    lastUpdated: '',
    ngoId: '',
    assignedTo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addItem = () => {
    if (newItem.name && newItem.quantity && newItem.condition) {
      setItems([...items, newItem]);
      setNewItem({
        name: '',
        description: '',
        quantity: '',
        category: '',
        location: '',
        condition: 'Good',
        dateAdded: '',
        lastUpdated: '',
        ngoId: '',
        assignedTo: '',
      });
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587907514030-5e0a74cc4a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDcyNzN8MHwxfGFsbHwxfHx8fHx8fHwxNjg0NjA3NTk&ixlib=rb-1.2.1&q=80&w=1080)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg z-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Inventory Management</h1>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={newItem.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#3E8B96]"
          />
          <textarea
            name="description"
            placeholder="Item Description"
            value={newItem.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#3E8B96]"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#3E8B96]"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newItem.category}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#3E8B96]"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newItem.location}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#3E8B96]"
          />
          <p className="text-lg font-medium mb-2 text-gray-700">Condition</p>
          <select
            name="condition"
            value={newItem.condition}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#3E8B96]"
          >
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Needs Repair">Needs Repair</option>
            <option value="Damaged">Damaged</option>
          </select>
          <input
            type="text"
            name="ngoId"
            placeholder="NGO ID"
            value={newItem.ngoId}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#3E8B96]"
          />
          <input
            type="text"
            name="assignedTo"
            placeholder="Assigned To"
            value={newItem.assignedTo}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#3E8B96]"
          />
          <button
            onClick={addItem}
            className="bg-[#3E8B96] text-white p-3 rounded-lg w-full hover:bg-[#2E6D6F] focus:outline-none focus:ring-2 focus:ring-[#2E6D6F]"
          >
            Add Item
          </button>
        </div>

        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 border border-gray-300 p-6 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="text-xl font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-700">Description: {item.description}</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
                <p className="text-gray-700">Category: {item.category}</p>
                <p className="text-gray-700">Location: {item.location}</p>
                <p className="text-gray-700">Condition: {item.condition}</p>
                <p className="text-gray-700">NGO ID: {item.ngoId}</p>
                <p className="text-gray-700">Assigned To: {item.assignedTo}</p>
              </div>
              <button
                onClick={() => deleteItem(index)}
                className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InventoryManagement;
