import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/community" className="nav-link">Open Community</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
