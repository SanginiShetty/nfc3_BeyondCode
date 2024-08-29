import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GetInvolved = () => {
    const [ngos, setNgos] = useState([]);  // Initialize as an empty array

    useEffect(() => {
        const fetchNgos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/ngo/getAll'); // Adjust the endpoint as necessary
                console.log("Fetched NGOs data:", response.data); // Debugging log
                setNgos(response.data.ngos); // Adjust if necessary, e.g., response.data.data
            } catch (error) {
                console.error("Error fetching NGOs:", error);
            }
        };

        fetchNgos();
    }, []);

    console.log("ngos data", ngos);

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Get Involved
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Join an NGO Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Join an NGO
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Join our community of volunteers and make a difference. Whether you have a few hours to spare or want to commit long-term, there are plenty of ways to get involved and help out.
                        </p>
                        {ngos.length > 0 ? (
                            <ul className="list-disc list-inside mb-4">
                                {ngos.map(ngo => (
                                    <li key={ngo._id} className="mb-4">
                                        <h3 className="text-lg font-bold text-gray-800">{ngo.ngoName}</h3>
                                        <p className="text-gray-600">{ngo.ngoDesc}</p>
                                        <img src={ngo.ngoImage} alt={ngo.ngoName} className="w-full h-auto mt-2" />
                                        <p className="text-gray-500">Contact: {ngo.email}</p>
                                        <p className="text-gray-500">Phone: {ngo.phone}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No NGOs available at the moment.</p>
                        )}
                        <Link to="/RegNgo">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                                Learn More
                            </button>
                        </Link>
                    </div>

                    {/* Donate to an NGO Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Donate to an NGO
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Your donations make our work possible. Help us provide essential resources to those in need by donating to our cause. Every contribution, big or small, makes a significant impact.
                        </p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInvolved;
