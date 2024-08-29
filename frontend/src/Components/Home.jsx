import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch top 3 blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/blog/getAll');
        setBlogs(response.data.blogs.slice(0, 3)); // Assuming response.data.blogs is the array of blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?ngo,community)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Empowering Communities</h1>
          <p className="text-lg mb-6 max-w-2xl">
            Join us in making a difference. Explore our initiatives, read our latest blogs, and get involved!
          </p>
          <a href="/get-involved" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Get Involved
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center my-8">Top 3 Blogs</h2>
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {blogs.map((blog, index) => (
            <div key={index} className="max-w-sm w-full bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.excerpt || blog.content.substring(0, 100)}...</p>
              <a href={`/blogs/${blog._id}`} className="text-blue-600 hover:text-blue-800 font-medium transition duration-200">Read More</a>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/blogs" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            View More Blogs
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
