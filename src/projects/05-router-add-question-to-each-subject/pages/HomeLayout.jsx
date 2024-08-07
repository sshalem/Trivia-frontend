import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);

  // state can be: idel, loading, submitting
  const isPageLoading = navigation.state === 'loading';

  // Here I will demonstrate the use of Global Context
  const value = 'some value';

  return (
    <>
      {/* Instead of Having Trivia here , 
    I moved it to the Navabar */}
      {/* <div className="home-layout-center">
        <span className="logo">טריוויה</span>
      </div> */}

      <Navbar />
      <section className="outlet">{isPageLoading ? <div className="loading" /> : <Outlet context={{ value }} />}</section>
    </>
  );
};

export default HomeLayout;
