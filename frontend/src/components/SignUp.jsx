import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an axios POST request to your backend API
      const response = await axios.post('http://localhost:3000/api/v1/auth/register', formData);
      console.log('Sign Up Success:', response.data);

      alert('Sign Up Success:', response.data);

      // Redirect or show success message based on your app's requirements
    } catch (error) {
      console.error('Sign Up Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-400">
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-photo/hands-different-skin-color-ethnicities-coming-together-sign-diversity_23-2151763140.jpg?t=st=1724916275~exp=1724919875~hmac=e23e70f227bc35fbceec6c2183232ea944c8d404fc8be50b5708b8151c92db7e&w=1380)',
        }}
      ></div>
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-80 shadow-lg rounded-lg mr-8 my-auto">
        <div className="w-96 justify-center items-center flex flex-col">
          <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username:</label>
              <input
                type="text"
                name="username"
                className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name:</label>
              <input
                type="text"
                name="fullName"
                className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
          </p>
        </div>

        <Link to="/RegNgo">
          <button className="w-full mt-4 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
            Register for a NGO
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
