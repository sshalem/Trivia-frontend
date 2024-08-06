import React from 'react';
import { NavLink } from 'react-router-dom';
import { AddQuestion } from '../pages';

const Question = () => {
  return (
    <>
      <NavLink to="/admin" className="nav-link">
        חזרה
      </NavLink>
      <AddQuestion />
    </>
  );
};

export default Question;
