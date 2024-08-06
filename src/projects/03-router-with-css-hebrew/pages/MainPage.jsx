import React from 'react';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="page-section">
      <h3>עמוד ראשי</h3>
      <br />
      <div>
        <NavLink to="/history" className="nav-link">
          היסטוריה
        </NavLink>
      </div>
      <br />
      <div>
        <NavLink to="/geography" className="nav-link">
          גיאוגרפיה
        </NavLink>
      </div>
    </div>
  );
};

export default MainPage;
