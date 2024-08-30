import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ngos = () => {
    const [ngos, setNgos] = useState([]); // State to store fetched NGO data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to handle errors

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
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No NGOs available at the moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Ngos;
