import React from "react";
// Sections

import TopNavbar from '../../components/LandingPage/Nav/TopNavbar'
import Header from '../../components/LandingPage/Sections/Header'
import About from '../../components/LandingPage/Sections/About'
import Destinations from '../../components/LandingPage/Sections/Destinations'
import Testimonials from '../../components/LandingPage/Sections/Testimonials'
import Contact from '../../components/LandingPage/Sections/Contact'
import Footer from '../../components/LandingPage/Sections/Footer'

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <About />
      <Destinations />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}


