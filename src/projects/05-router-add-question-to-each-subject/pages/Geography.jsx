import React from 'react';
import { NavLink } from 'react-router-dom';

const Geography = () => {
  return (
    <div>
      <div>
        <NavLink to="/" className="nav-link">
          חזרה לעמוד הראשי
        </NavLink>
      </div>
      <br />
      <h4>גיאוגרפיה</h4>
    </div>
  );
};

export default Geography;
