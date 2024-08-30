import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './BlogCard'; // Adjust the import path as needed

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
  }, []);

  console.log("all blogs", blogs);

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">Welcome to the Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map(blog => (
          <Card
            key={blog._id}
            title={blog.title}
            imageUrl={blog.blogImage || 'https://via.placeholder.com/300'} // Use a placeholder image if blogImage is missing
            description={blog.description}
            link={`/blog/${blog._id}`} // Assuming you have a route for individual blog posts
            author={blog.author}
            tags={blog.tags}
            excerpt={blog.excerpt}
            comments={blog.comments}
            likes={blog.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
