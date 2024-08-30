import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ngos = () => {
    const [ngos, setNgos] = useState([]); // State to store fetched NGO data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to handle errors
    const [selectedNgo, setSelectedNgo] = useState(null); // State to manage selected NGO for detail view

    useEffect(() => {
        // Function to fetch all NGOs
        const fetchNgos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/ngo/getAll');
                setNgos(response.data.ngos); // Update state with fetched NGOs
                setLoading(false); // Set loading to false after fetching data
            } catch (err) {
                setError('Error fetching NGOs'); // Set error message
                setLoading(false); // Set loading to false in case of error
            }
        };

        fetchNgos(); // Fetch NGOs when component mounts
    }, []);

    const handleNgoClick = async (ngoId) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/ngo/${ngoId}`);
            setSelectedNgo(response.data.ngo); // Update state with selected NGO details
        } catch (err) {
            setError('Error fetching NGO details'); // Set error message
        }
    };

    if (loading) {
        return <p className="text-center text-gray-600">Loading NGOs...</p>;
    }

    if (error) {
        return <p className="text-center text-red-600">{error}</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    All NGOs
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ngos.length > 0 ? (
                        ngos.map((ngo) => (
                            <div key={ngo._id} className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{ngo.ngoName}</h2>
                                <p className="text-gray-600 mb-4">{ngo.ngoDesc}</p>
                                <img src={ngo.ngoImage} alt={ngo.ngoName} className="w-full h-auto mb-4" />
                                <p className="text-gray-500 mb-2">Contact: {ngo.email}</p>
                                <p className="text-gray-500">Phone: {ngo.phone}</p>
                                <button 
                                    onClick={() => handleNgoClick(ngo._id)}
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    View Details
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No NGOs available at the moment.</p>
                    )}
                </div>

                {/* Modal or Detail View */}
                {selectedNgo && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{selectedNgo.ngoName}</h2>
                            <p className="text-gray-600 mb-4">{selectedNgo.ngoDesc}</p>
                            <img src={selectedNgo.ngoImage} alt={selectedNgo.ngoName} className="w-full h-auto mb-4" />
                            <p className="text-gray-500 mb-2">Contact: {selectedNgo.email}</p>
                            <p className="text-gray-500 mb-2">Phone: {selectedNgo.phone}</p>
                            <p className="text-gray-500 mb-4">Address: {selectedNgo.address}</p>
                            <p className="text-gray-500 mb-4">Registration No: {selectedNgo.ngoRegNo}</p>
                            <p className="text-gray-500 mb-4">Type: {selectedNgo.ngoType}</p>
                            <button 
                                onClick={() => setSelectedNgo(null)}
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Ngos;
