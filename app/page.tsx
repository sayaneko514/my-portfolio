import React from 'react';
import './globals.css';
import Intro from "./components/intro-section";
import About from './components/about-section';
import Experience from './components/exp-section';

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Experience />
    </>
  );
};

export default Home;