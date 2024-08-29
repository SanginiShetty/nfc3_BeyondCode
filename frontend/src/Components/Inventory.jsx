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
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>

      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <textarea
          name="description"
          placeholder="Item Description"
          value={newItem.description}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newItem.category}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newItem.location}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <p className='text-xl'>Condition</p>
        <select
          name="condition"
          value={newItem.condition}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
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
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="assignedTo"
          placeholder="Assigned To"
          value={newItem.assignedTo}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Item
        </button>
      </div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{item.name}</p>
              <p>Description: {item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Category: {item.category}</p>
              <p>Location: {item.location}</p>
              
              <p>Condition: {item.condition}</p>
              <p>NGO ID: {item.ngoId}</p>
              <p>Assigned To: {item.assignedTo}</p>
            </div>
            <button
              onClick={() => deleteItem(index)}
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

export default InventoryManagement;
