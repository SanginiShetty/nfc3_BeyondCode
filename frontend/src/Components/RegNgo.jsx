import React, { useState } from 'react';

const RegNgo = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, 4));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex min-h-screen justify-center items-center bg-black">
      <div className="m-10 w-full max-w-lg p-8 space-y-6 bg-white bg-opacity-90 shadow-2xl rounded-xl backdrop-blur-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Register Your NGO</h2>

        <form className="space-y-6">
          {currentPage === 1 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
            </>
          )}

          {currentPage === 2 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">NGO Name</label>
                <input
                  type="text"
                  name="ngoName"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
            </>
          )}

          {currentPage === 3 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700">NGO Registration Number</label>
                <input
                  type="text"
                  name="ngoRegNo"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">NGO Type</label>
                <input
                  type="text"
                  name="ngoType"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">NGO Description</label>
                <textarea
                  name="ngoDesc"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
            </>
          )}

          {currentPage === 4 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700">NGO Image</label>
                <input
                  type="file"
                  name="ngoImage"
                  className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                />
              </div>
            </>
          )}

          <div className="flex justify-between">
            {currentPage > 1 && (
              <button
                type="button"
                onClick={prevPage}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Previous
              </button>
            )}
            {currentPage < 4 && (
              <button
                type="button"
                onClick={nextPage}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Next
              </button>
            )}
            {currentPage === 4 && (
              <button
                type="submit"
                className="px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
              >
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegNgo;