import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('http://localhost:3000/api/v1/auth/login', formData);
      console.log('Login Success:', res.data);

      if (res.status === 200) {
          console.log(res)
          if (res.data.accessToken && res.data.refreshToken) {
              localStorage.setItem(
                  "accessToken",
                  res.data.accessToken
              );
              localStorage.setItem('user', JSON.stringify(user));
              Cookies.set("accessToken", res.data.accessToken);

              navigate("/");
          }
      } else {
          console.log("error", res.data.message); // Handle other response codes if necessary
      }

      // Navigate to the home page upon successful login
      navigate('/');
    } catch (error) {
      console.error('Login Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-400">
      <div
        className="flex-1 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://img.freepik.com/free-photo/hands-different-skin-color-ethnicities-coming-together-sign-diversity_23-2151763140.jpg?t=st=1724916275~exp=1724919875~hmac=e23e70f227bc35fbceec6c2183232ea944c8d404fc8be50b5708b8151c92db7e&w=1380)',
        }}
      >
        {/* This div serves as the background image */}
      </div>
      <div className="w-full h-full max-w-md p-8 space-y-6 bg-white bg-opacity-80 shadow-lg rounded-lg mx-8 my-auto">
        <div className='w-96 justify-center items-center flex flex-col'>
          <h2 className="text-2xl font-bold text-center text-gray-900">Login to Your Account</h2>

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
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account? 
            <Link to="/signup" className="text-indigo-600 hover:underline"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
