import React from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselItem from '../components/CarouselItem';
import { ProjectsData } from '../data/ProjectsData';
import Arrow from '../components/Arrow';

import './Projects.css';

function Projects() {
  return (
    <div className="page">
      <div className="card">
        <div className="section">
          <span className="section-text"> Proyectos </span>
        </div>
        <div className="carousel-container">
          <div className="carousel-box">
            <Carousel className="carousel" pagination={false} renderArrow={Arrow} infinite>
              {ProjectsData.map((item, index) => (
                <CarouselItem item={item} key={index} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
