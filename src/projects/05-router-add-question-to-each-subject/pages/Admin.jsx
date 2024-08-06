import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <article>
        <div>
          <NavLink to="/admin/add-question" className="nav-link">
            הוספת שאלה
          </NavLink>
        </div>
        <br />
        <div>
          <NavLink to="/admin/question-list" className="nav-link">
            רשימת שאלות
          </NavLink>
        </div>
        <br />
        <div>
          <NavLink to="/admin/score-board" className="nav-link">
            לוח תוצאות
          </NavLink>
        </div>
        <br />
      </article>
    </>
  );
};

export default Admin;
