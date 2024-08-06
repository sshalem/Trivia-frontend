import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const MainLayout = () => {
  return (
    <>
      <h1>MainLayout</h1>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
