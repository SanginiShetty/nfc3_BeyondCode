// src/components/EventManagement.js
import React, { useState } from 'react';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.location) {
      setEvents([...events, newEvent]);
      setNewEvent({
        title: '',
        date: '',
        location: '',
        description: '',
      });
    }
  };

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Event Management</h1>

      <div className="mb-6">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="date"
          name="date"
          placeholder="Event Date"
          value={newEvent.date}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={newEvent.location}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={handleInputChange}
          className="border rounded p-2 w-full mb-2"
        />
        <button
          onClick={addEvent}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Event
        </button>
      </div>

      <ul className="space-y-4">
        {events.map((event, index) => (
          <li
            key={index}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{event.title}</p>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
            </div>
            <button
              onClick={() => deleteEvent(index)}
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

export default EventManagement;
