

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Mainlayout = () => {
  return (
    <>
      
     <Header/>
      <main >
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Mainlayout;
