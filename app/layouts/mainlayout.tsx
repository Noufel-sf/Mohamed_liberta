"use client";

import React from 'react';
// import { useEffect } from 'react';
// import "aos/dist/aos.css";
// import AOS from 'aos';
import Navbarr from '../components/NavBar';
import Footer from '../components/Footer';
// import { Toaster } from 'react-hot-toast';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {


// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);


  return (
    <div className="min-h-screen grid-bg">
      <Navbarr />
      {children}
      <Footer />
      {/* <Toaster  position="top-center" reverseOrder={false} /> */}
    </div>
  );
}
