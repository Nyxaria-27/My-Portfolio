'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import ToggleDarkMode from './ToggleDarkMode';

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/70 dark:bg-[#121212]/70 backdrop-blur-md shadow-lg border-b border-black dark:border-[#33353F]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <Link
            href={'/'}
            className='text-2xl md:text-5xl text-black dark:text-white font-semibold'>
            LOGO
          </Link>
          <div className='mobile-menu block md:hidden'>
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className='flex items-center px-3 py-2 border rounded border-black dark:border-slate-200 text-black dark:text-slate-200 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'>
                <Bars3Icon className='h-5 w-5' />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className='flex items-center px-3 py-2 border rounded border-black dark:border-slate-200 text-black dark:text-slate-200 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'>
                <XMarkIcon className='h-5 w-5' />
              </button>
            )}
          </div>
          <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ToggleDarkMode />
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
