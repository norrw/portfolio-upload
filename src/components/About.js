import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import image from '../backgroundPic.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { Helmet } from 'react-helmet';

const TITLE = 'About Me';

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) {
    return <div>Loading...</div>;
  } else {
    return (
      <main className='relative'>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <img
          src={image}
          alt='Background Image'
          className='absolute w-full'
        ></img>
        <div className='p-10 lg:pt-48 container mx-auto relative'>
          <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
            <img
              src={urlFor(author.authorImage).url()}
              className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 custom'
              alt={author.name}
            ></img>
            <div className='text-lg flex flex-col justify-center'>
              <h1 className='cursive text-6xl text-green-300 mb-4'>
                Hi! I'm <span className='text-green-100'>{author.name}</span>
              </h1>
              <div className='prose lg:prose-xl text-white'>
                <BlockContent
                  blocks={author.bio}
                  projectId='sv8acbkn'
                  dataset='production'
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
};

export default About;
