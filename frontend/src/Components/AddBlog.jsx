import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs'; // Import qs for encoding form data

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    tags: '',
    author: '',
    excerpt: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, content, tags, author, excerpt } = formData;

    if (!title || !description || !content || !tags || !author) {
      alert('All required fields must be filled');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/blog/create', 
        qs.stringify({
          title,
          description,
          content,
          tags,
          author,
          excerpt,
        }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      alert(response.data.message);
    } catch (error) {
      alert('Error creating blog post');
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a New Blog Post
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Share your thoughts, ideas, and stories with the world.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter the title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Blog Description
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter the description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Blog Tags
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter the tags (comma separated)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Blog Author
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter the author's name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Blog Excerpt
              </label>
              <input
                type="text"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter a short excerpt"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Blog Content
              </label>
              <textarea
                name="content"
                rows="10"
                value={formData.content}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your blog content here..."
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
