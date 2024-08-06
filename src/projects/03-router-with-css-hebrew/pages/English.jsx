import React from 'react';
import { NavLink } from 'react-router-dom';

const English = () => {
  return (
    <>
      <div>
        <NavLink to={`/english/1`}>שאלה 1</NavLink>
      </div>
      <div>
        <NavLink to={`/english/2`}> שאלה 2 </NavLink>
      </div>
      <div>
        <NavLink to={`/english/3`}> שאלה 3 </NavLink>
      </div>
    </>
  );
};

export default English;
