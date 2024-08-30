import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, imageUrl, description, link, author, tags, excerpt, comments, likes }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">Excerpt: {excerpt}</p>
        <p className="text-gray-600 mb-4">Description: {description}</p>
        <p className="text-gray-500 mb-2">Author: {author}</p>
        <p className="text-gray-500 mb-2">Tags: {tags.join(', ')}</p>
        <p className="text-gray-500 mb-2">Likes: {likes.length}</p>
        <p className="text-gray-500 mb-4">Comments: {comments.length}</p>
        <Link to={link} className="inline-block px-4 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition duration-300">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card;
