import React from 'react';
import image from '../backgroundPic.jpg';

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt='Homepage Background'
        className='absolute object-cover w-full h-full'
      ></img>
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>
          Hi. My name is Will!
        </h1>
        <h3>I'm an motivated economics graduate turned web developer!</h3>
        <h3>
          <strong>My technical skills:</strong> HTML, CSS, JavaScript, React,
          Redux, Express, Node.js, MongoDB, PostgreSQL, Git.
        </h3>
      </section>
    </main>
  );
};

export default Home;
