import React from 'react';

import './Home.css';

function Home() {
  return (
    <div className="page">
      <div className="card">
        <div className="section">
          <span className="section-text"> Home </span>
        </div>
        <div className="home">
          <div>
            <span className="name p">F</span>
            <span className="name s">ernando </span>
            <span className="name p">A</span>
            <span className="name s">lvarez</span>
          </div>
          <span className="profession">Estudiante de ingeniería informática</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
