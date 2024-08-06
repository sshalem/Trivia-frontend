import React from 'react';
import { NavLink } from 'react-router-dom';

const ScoreBoard = () => {
  return (
    <>
      <div>
        <NavLink to="/admin" className="nav-link">
          חזרה
        </NavLink>
      </div>
      <br />
      <h3>לוח תוצאות</h3>
    </>
  );
};

export default ScoreBoard;
