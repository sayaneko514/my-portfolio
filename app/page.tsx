import React from 'react';
import './globals.css';
import Intro from "./components/intro-section";
import About from './components/about-section';
import Experience from './components/experience-section';
import Project from './components/project-section';

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Experience />
      <Project />
    </div>
  );
};

export default Home;