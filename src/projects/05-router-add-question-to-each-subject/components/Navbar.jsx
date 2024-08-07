import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="nav-center">
        <div>
          <span className="logo">טריוויה</span>
        </div>
        <NavLink to="/" className="nav-link">
          עמוד ראשי
        </NavLink>
        <NavLink to="/tanach" className="nav-link">
          תנ"ך
        </NavLink>
        <NavLink to="/hebrew" className="nav-link">
          עברית
        </NavLink>
        <NavLink to="/math" className="nav-link">
          חשבון
        </NavLink>
        <NavLink to="/english" className="nav-link">
          אנגלית
        </NavLink>
        <NavLink to="/admin" className="nav-link">
          מנהל
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
