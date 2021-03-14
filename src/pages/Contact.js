import React from 'react';
import * as VscIcons from 'react-icons/vsc';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';

import './Contact.css';

function Contact() {
  return (
    <div className="page">
      <div className="card">
        <div className="section">
          <span className="section-text contact"> Contacto </span>
        </div>
        <ul className="info-cards">
          <li className="info-item">
            <VscIcons.VscLocation className="info-icon" />
            <span className="info-text"> Quilmes, Buenos Aires, Argentina </span>
          </li>
          <li className="info-item">
            <VscIcons.VscMail className="info-icon" />
            <span className="info-text"> feeerr95@gmail.com </span>
          </li>
          <li className="info-item">
            <FiIcons.FiPhone className="info-icon" />
            <span className="info-text"> +54 11-36349599 </span>
          </li>
          <li className="info-item social">
            <a href="https://www.linkedin.com/in/fernando-alvarez-38b020121/">
              <AiIcons.AiOutlineLinkedin className="info-icon" />
            </a>
            <a href="https://twitter.com/F3rAlvarez">
              <FiIcons.FiTwitter className="info-icon" />
            </a>
            <a href="https://www.instagram.com/feeerralvarez/">
              <AiIcons.AiOutlineInstagram className="info-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
