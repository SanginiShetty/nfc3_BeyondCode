import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="flex flex-wrap justify-between mb-8">
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Reach out to us via the form or through the contact details below.
          </p>

          <div className="space-y-4">
            <p className="text-gray-700"><i className="fas fa-phone mr-2"></i> Phone: +123-456-7890</p>
            <p className="text-gray-700"><i className="fas fa-envelope mr-2"></i> Email: info@ngo.org</p>
            <p className="text-gray-700"><i className="fas fa-map-marker-alt mr-2"></i> Address: 123 NGO St, City, Country</p>
          </div>
        </div>

        <div className="w-full lg:w-6/12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354344963086!2d144.95592331577413!3d-37.81720927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777dd8f7b0c3a1!2sGoogle%20Australia!5e0!3m2!1sen!2sus!4v1615882329001!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
