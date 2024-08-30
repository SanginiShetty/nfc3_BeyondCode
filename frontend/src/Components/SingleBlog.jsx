import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/blog/get/${id}`);
                setBlog(response.data.blog); // Assuming the response structure has 'blog'
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    return (
        <div className="bg-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <img src={blog.blogImage || 'https://via.placeholder.com/800x400'} alt={blog.title} className="w-full h-64 object-cover mb-4" />
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <p className="text-gray-500 mb-2">Author: {blog.author}</p>
                <p className="text-gray-500 mb-2">Tags: {blog.tags.join(', ')}</p>
                <p className="text-gray-500 mb-2">Likes: {blog.likes.length}</p>
                <p className="text-gray-500 mb-4">Comments: {blog.comments.length}</p>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
            </div>
        </div>
    );
};

export default SingleBlog;
