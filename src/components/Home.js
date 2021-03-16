import React from 'react';
import image from '../backgroundPic.jpg';
import { Helmet } from 'react-helmet';

const TITLE = 'Home';

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <img
        src={image}
        alt='Homepage Background'
        className='absolute object-cover w-full h-full'
      ></img>
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>
          Hi. My name is Will!
        </h1>
      </section>
    </main>
  );
};

export default Home;
