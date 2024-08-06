import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="nav-center">
        <span className="logo">Navbar Logo</span>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/english" className="nav-link">
          English
        </NavLink>
        <NavLink to="/hebrew" className="nav-link">
          Hebrew
        </NavLink>
        <NavLink to="/history" className="nav-link">
          History
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
