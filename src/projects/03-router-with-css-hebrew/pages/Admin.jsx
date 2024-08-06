import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <article>
        <div>
          <NavLink to="/add-question" className="nav-link">
            הוספת שאלה
          </NavLink>
        </div>
        <br />
      </article>
    </>
  );
};

export default Admin;
