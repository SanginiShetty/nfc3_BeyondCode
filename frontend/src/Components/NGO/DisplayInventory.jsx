import React from 'react';

const inventories = [
  {
    id: 1,
    name: 'Medical Supplies',
    image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    quantity: 150,
    description: 'Includes first aid kits, bandages, antiseptics, and more.',
  },
  {
    id: 2,
    name: 'Educational Materials',
    image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    quantity: 500,
    description: 'Books, stationery, and other educational resources for children.',
  },
  {
    id: 3,
    name: 'Food Supplies',
    image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    quantity: 200,
    description: 'Non-perishable food items such as rice, beans, and canned goods.',
  },
  {
    id: 4,
    name: 'Clothing',
    image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    quantity: 350,
    description: 'Includes winter clothes, blankets, and shoes.',
  },
];

const InventoryPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Inventory</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {inventories.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-lg text-gray-700 mb-4">Quantity: {item.quantity}</p>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;
