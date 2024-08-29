// src/components/StaffManagement.js
import React, { useState } from 'react';

const StaffManagement = () => {
  const [staff, setStaff] = useState([]);
  const [newStaff, setNewStaff] = useState({
    name: '',
    position: '',
    email: '',
    phone: '',
    department: '',
    joinDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  const addStaff = () => {
    if (newStaff.name && newStaff.position && newStaff.email) {
      setStaff([...staff, newStaff]);
      setNewStaff({
        name: '',
        position: '',
        email: '',
        phone: '',
        department: '',
        joinDate: '',
      });
    }
  };

  const deleteStaff = (index) => {
    const updatedStaff = staff.filter((_, i) => i !== index);
    setStaff(updatedStaff);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Staff Management</h1>

      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Staff Name"
          value={newStaff.name}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newStaff.position}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newStaff.email}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={newStaff.phone}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={newStaff.department}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="date"
          name="joinDate"
          placeholder="Join Date"
          value={newStaff.joinDate}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <button
          onClick={addStaff}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Staff
        </button>
      </div>

      <ul className="space-y-4">
        {staff.map((member, index) => (
          <li
            key={index}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{member.name}</p>
              <p>Position: {member.position}</p>
              <p>Email: {member.email}</p>
              <p>Phone: {member.phone}</p>
              <p>Department: {member.department}</p>
              <p>Join Date: {member.joinDate}</p>
            </div>
            <button
              onClick={() => deleteStaff(index)}
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

export default StaffManagement;
