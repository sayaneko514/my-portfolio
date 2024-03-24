import React from 'react';
import './globals.css';
import Intro from "./components/home-page";
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/path/to/important/image.jpg"
          as="image"
        />
      </Head>

      <Intro />
    </>
  );
};

export default Home;