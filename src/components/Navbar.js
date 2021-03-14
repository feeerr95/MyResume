import React from 'react';
import { NavbarData } from './NavbarData';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
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