import React from 'react';
import * as AiIcons from 'react-icons/ai';

import './CarouselItem.css';

function CarouselItem({ item }) {
  return (
    <div className="carousel-card">
      <div className="project-title">{item.title}</div>
      <div className="project-description">{item.description}</div>
      <ul className="project-lenguages">
        {item.lenguages.map((language, index) => (
          <li key={index} className="project-lenguages-item">
            <span>{language}</span>
          </li>
        ))}
      </ul>
      <a target="_blank" href={item.repo} className="project-repo-icon">
        <AiIcons.AiOutlineGithub />
      </a>
    </div>
  );
}

export default CarouselItem;
