import React from 'react';
import { NavbarData } from '../data/NavbarData';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a>
            <div className="nav-logo">
              <div className="logo">FA</div>
              <span className="logo-text">Fernando Alvarez</span>
            </div>
          </a>
        </li>
        {NavbarData.map((item, index) => (
          <li key={index} className="nav-item">
            <Link to={item.path}>
              <div className="nav-link">
                <div className="primary">{item.icon}</div>
                <span className="link-text">{item.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
