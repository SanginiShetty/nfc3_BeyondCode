// src/components/ImpactManagement.js
import React, { useState } from 'react';

const ImpactManagement = () => {
  const [impacts, setImpacts] = useState([]);
  const [newImpact, setNewImpact] = useState({
    programName: '',
    date: '',
    metric: '',
    value: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewImpact({ ...newImpact, [name]: value });
  };

  const addImpact = () => {
    if (newImpact.programName && newImpact.date && newImpact.metric && newImpact.value) {
      setImpacts([...impacts, newImpact]);
      setNewImpact({
        programName: '',
        date: '',
        metric: '',
        value: '',
        description: '',
      });
    }
  };

  const deleteImpact = (index) => {
    const updatedImpacts = impacts.filter((_, i) => i !== index);
    setImpacts(updatedImpacts);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Impact Management</h1>

      <div className="mb-6">
        <input
          type="text"
          name="programName"
          placeholder="Program Name"
          value={newImpact.programName}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={newImpact.date}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="metric"
          placeholder="Impact Metric"
          value={newImpact.metric}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="number"
          name="value"
          placeholder="Impact Value"
          value={newImpact.value}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newImpact.description}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <button
          onClick={addImpact}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Impact
        </button>
      </div>

      <ul className="space-y-4">
        {impacts.map((impact, index) => (
          <li
            key={index}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{impact.programName}</p>
              <p>Date: {impact.date}</p>
              <p>Metric: {impact.metric}</p>
              <p>Value: {impact.value}</p>
              <p>Description: {impact.description}</p>
            </div>
            <button
              onClick={() => deleteImpact(index)}
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

export default ImpactManagement;
