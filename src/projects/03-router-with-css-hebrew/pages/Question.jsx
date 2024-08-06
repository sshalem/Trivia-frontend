import React from 'react';
import { NavLink } from 'react-router-dom';

const Question = () => {
  return (
    <h2>
      <div>
        <NavLink to="/english" className="nav-link">
          חזרה לאנגלית
        </NavLink>
      </div>
      <br />
      <div>עמוד של שאלה</div>
    </h2>
  );
};

export default Question;
