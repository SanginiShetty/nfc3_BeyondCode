import React from 'react';
import './Card.css';

const Card = ({ title, imageUrl, description, link }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-button">Learn More</a>
      </div>
    </div>
  );
}

export default Card;
