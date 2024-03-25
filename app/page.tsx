import React from 'react';
import './globals.css';
import Intro from "./components/intro-section";
import About from './components/about-section';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="images/intro_bg.jpg"
          as="image"
        />
      </Head>

      <Intro />
      <About />
    </>
  );
};

export default Home;