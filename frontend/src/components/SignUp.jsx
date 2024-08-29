import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex min-h-screen bg-gray-400">
    <div className="flex-1 bg-cover bg-center" 
    style={{ 
        backgroundImage: 'url(https://img.freepik.com/free-photo/hands-different-skin-color-ethnicities-coming-together-sign-diversity_23-2151763140.jpg?t=st=1724916275~exp=1724919875~hmac=e23e70f227bc35fbceec6c2183232ea944c8d404fc8be50b5708b8151c92db7e&w=1380)' 
        }}>

        </div>
      <div className="w-full max-w-md p-8 space-y-6 
      bg-white bg-opacity-80 shadow-lg rounded-lg mr-8 my-auto">
        <div className= "w-96 justify-center items-center flex flex-col">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
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
      <button className=''> 
        Register for a NGO
      </button>
      </Link>
      </div>
    </div>

  );
};

export default SignUp;
