import React from 'react';
import { NavLink } from 'react-router-dom';

const History = () => {
  return (
    <div>
      <div>
        <NavLink to="/" className="nav-link">
          חזרה לעמוד הראשי
        </NavLink>
      </div>
      <br />
      <h4>היסטוריה</h4>
    </div>
  );
};

export default History;
