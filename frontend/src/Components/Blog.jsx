import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/blog/getAll');
        setBlogs(response.data.blogs); // Assuming the response structure has 'blogs' array
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to the Blog</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <div key={blog._id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={blog.blogImage || 'default-image-url.jpg'} // Use a default image if blogImage is missing
              alt={blog.title}
              className="h-48 w-full object-cover rounded-t-lg mb-4"
            />
            <p className="text-purple-400 text-sm mb-2">{new Date(blog.createdAt).toDateString()}</p>
            <h2 className="text-xl font-semibold text-white mb-2">{blog.title}</h2>
            <p className="text-gray-300 mb-4">{blog.description}</p>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="text-sm text-white bg-purple-500 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
