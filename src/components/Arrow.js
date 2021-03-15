import React from 'react';
import { consts } from 'react-elastic-carousel';
import * as MdIcons from 'react-icons/md';

import './Arrow.css';

function Arrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? <MdIcons.MdKeyboardArrowLeft /> : <MdIcons.MdKeyboardArrowRight />;
  return (
    <button className="arrow" onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  );
}

export default Arrow;
