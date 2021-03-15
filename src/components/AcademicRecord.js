import React from 'react';

import './AcademicRecord.css';

function AcademicRecord({ item }) {
  const { startYear: sy, endYear: ey } = item;

  return (
    <div className="container">
      <div className="divider" />
      <div className="schooling-box">
        <span className="schooling-title">
          {'Nivel '} {item.level} {sy === ey ? `(${sy})` : `(${sy} - ${ey})`}
        </span>
        <div className="schooling-item">
          <span>{item.institution}</span>
        </div>
        <div className="schooling-item">
          <span>
            {'Promedio: '} {item.average}
          </span>
        </div>
        <div className="schooling-item">
          <span>{item.degree ? `Titulo: ${item.degree}` : ''}</span>
        </div>
      </div>
    </div>
  );
}

export default AcademicRecord;
