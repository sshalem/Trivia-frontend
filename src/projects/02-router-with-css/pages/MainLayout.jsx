import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const MainLayout = () => {
  return (
    <>
      <h1>MainLayout</h1>
      <Navbar />
      <section className="page-center">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
