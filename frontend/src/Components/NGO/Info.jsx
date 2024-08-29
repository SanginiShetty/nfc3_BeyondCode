import React from 'react';

const blogs = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    title: 'Our Recent Activities',
    description: 'We recently conducted a health camp in rural areas, impacting over 500 families.',
    link: '#',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    title: 'Education for All',
    description: 'Our education programs are empowering underprivileged children with quality education.',
    link: '#',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/400x300', // Replace with your image URL
    title: 'Sustainable Farming',
    description: 'Promoting sustainable farming practices among local farmers to ensure food security.',
    link: '#',
  },
];

const NGOPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gray-800 text-white">
        <div className="container mx-auto flex flex-col items-center py-16 w-96">
          <img
            src="https://via.placeholder.com/400x400" // Replace with your NGO image URL
            alt="NGO Image"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">Welcome to Our NGO</h1>
          <p className="text-lg text-center">
            Making the world a better place through our dedicated efforts and community support.
          </p>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Blog Posts</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <a href={blog.link} className="text-indigo-500 font-medium hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Option Section */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Cause</h2>
          <p className="text-lg mb-6">
            Your contributions help us continue our mission. Every donation makes a difference.
          </p>
          <button className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200">
            Donate Now
          </button>
        </div>
      </section>

      {/* Chat Option Section */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600">
          Chat with Us
        </button>
      </div>

    </div>
  );
};

export default NGOPage;
