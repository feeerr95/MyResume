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
          <span className="resume-categorie-title">Estudios</span>
          <ul className="education-box">
            {Schooling.map((item, index) => (
              <li key={index}>
                <AcademicRecord item={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="stats">
          <div className="resume-languages">
            <span className="resume-categorie-title">Lenguajes y Frameworks</span>
            <ul className="skills-box" style={{ padding: 0 }}>
              {Skills.map((item, index) => (
                <li key={index} className="skills-item">
                  <Skillbar item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="resume-programs">
            <span className="resume-categorie-title">Programas</span>
            <ul className="skills-box" style={{ padding: 0 }}>
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
