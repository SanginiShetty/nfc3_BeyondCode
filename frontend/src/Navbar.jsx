import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#blog" className="nav-link">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#community" className="nav-link">Open Community</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
