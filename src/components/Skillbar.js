import React from 'react';

import './Skillbar.css';

function Skillbar({ item }) {
  return (
    <div className="skill-box">
      <span className="skill-title">
        {item.title} - {item.percentage}
      </span>
      <div className="skill-bar">
        <div className="skill-percentage" style={{ width: item.percentage }} />
      </div>
    </div>
  );
}

export default Skillbar;
