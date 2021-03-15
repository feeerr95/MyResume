import React from 'react';
import { Skills, Schooling, Programs } from '../data/ResumeData';
import Skillbar from '../components/Skillbar';
import AcademicRecord from '../components/AcademicRecord';

import './Resume.css';

function Resume() {
  return (
    <div className="page">
      <div className="card">
        <div className="section">
          <span className="section-text">Resumen</span>
        </div>
        <div className="schooling">
          <span className="page-title">Estudios</span>
          <ul className="education-box">
            {Schooling.map((item, index) => (
              <li key={index} className="education-item">
                <AcademicRecord item={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="stats">
          <div className="skills-box">
            <span className="page-title">Lenguajes y Frameworks</span>
            <ul style={{ padding: 0 }}>
              {Skills.map((item, index) => (
                <li key={index} className="skills-item">
                  <Skillbar item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-box">
            <span className="page-title">Programas</span>
            <ul style={{ padding: 0 }}>
              {Programs.map((item, index) => (
                <li key={index} className="skills-item">
                  <Skillbar item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
