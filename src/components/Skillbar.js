import React from 'react';

import './Skillbar.css';

function Skillbar({ item }) {
  return (
    <div className="skill-box">
      <div className="skill-title">
        <span>{item.title}</span>
        <span>{item.percentage}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-percentage" style={{ width: item.percentage }} />
      </div>
    </div>
  );
}

export default Skillbar;
