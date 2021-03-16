import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  return (
    <header className='bg-blue-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
          >
            Will Norris
          </NavLink>
          {/* <NavLink
            to='/post'
            className='inline-flex items-center py-3 px-3 my-6 rounded-text-red-200 hover:text-green-800'
            activeClassName='text-red-100 bg-red-700'
          >
            Posts
          </NavLink> */}
          <NavLink
            to='/project'
            className='text-white inline-flex items-center py-3 px-3 my-6 rounded-text-red-200 hover:text-black-800'
            activeClassName='text-red-100 bg-gray-700'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='text-white inline-flex items-center py-3 px-3 my-6 rounded-text-red-200 hover:text-black-800'
            activeClassName='text-red-100 bg-gray-700'
          >
            About Me
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://github.com/norrw'
            className='mr-4'
            target='_blank'
            rel='noreferrer'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
