import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://1.bp.blogspot.com/-ZkWC9H9Z7xE/Xy6J-_P1kgI/AAAAAAAAAAU/yRCb2ABdznA97f07B8tsc_9euJx4JaNyACLcBGAsYHQ/s700/191286_1.jpg', // Replace with your actual image URLs
      date: 'Sunday, 1 Jan 2023',
      title: 'Bill Walsh leadership lessons',
      description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
      tags: ['Leadership', 'Management', 'Presentation']
    },
    {
      id: 2,
      image: 'https://1.bp.blogspot.com/-ZkWC9H9Z7xE/Xy6J-_P1kgI/AAAAAAAAAAU/yRCb2ABdznA97f07B8tsc_9euJx4JaNyACLcBGAsYHQ/s700/191286_1.jpg',
      date: 'Sunday, 1 Jan 2023',
      title: 'PM mental models',
      description: 'Mental models are simple expressions of complex processes or relationships.',
      tags: ['Product', 'Research', 'Frameworks']
    },
    {
      id: 3,
      image: 'https://1.bp.blogspot.com/-ZkWC9H9Z7xE/Xy6J-_P1kgI/AAAAAAAAAAU/yRCb2ABdznA97f07B8tsc_9euJx4JaNyACLcBGAsYHQ/s700/191286_1.jpg',
      date: 'Sunday, 1 Jan 2023',
      title: 'What is Wireframing?',
      description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
      tags: ['Design', 'Research', 'Presentation']
    },
    {
      id: 4,
      image: 'https://1.bp.blogspot.com/-ZkWC9H9Z7xE/Xy6J-_P1kgI/AAAAAAAAAAU/yRCb2ABdznA97f07B8tsc_9euJx4JaNyACLcBGAsYHQ/s700/191286_1.jpg', // Replace with your actual image URLs
      date: 'Sunday, 1 Jan 2023',
      title: 'Bill Walsh leadership lessons',
      description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
      tags: ['Leadership', 'Management', 'Presentation']
    },
    {
      id: 5,
      image: 'https://1.bp.blogspot.com/-ZkWC9H9Z7xE/Xy6J-_P1kgI/AAAAAAAAAAU/yRCb2ABdznA97f07B8tsc_9euJx4JaNyACLcBGAsYHQ/s700/191286_1.jpg',
      date: 'Sunday, 1 Jan 2023',
      title: 'PM mental models',
      description: 'Mental models are simple expressions of complex processes or relationships.',
      tags: ['Product', 'Research', 'Frameworks']
    },
    {
      id: 6,
      image: 'https://1.bp.blogspot.com/-ZkWC9H9Z7xE/Xy6J-_P1kgI/AAAAAAAAAAU/yRCb2ABdznA97f07B8tsc_9euJx4JaNyACLcBGAsYHQ/s700/191286_1.jpg',
      date: 'Sunday, 1 Jan 2023',
      title: 'What is Wireframing?',
      description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
      tags: ['Design', 'Research', 'Presentation']
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to the Blog</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover rounded-t-lg mb-4"
            />
            <p className="text-purple-400 text-sm mb-2">{blog.date}</p>
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

