import React, { useState, useEffect } from 'react';
import logo from "../../assets/epics.png";
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToFooter = (sectionId) => {
    const footerElement = document.getElementById(sectionId);
    footerElement.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close the menu after clicking on a link
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu toggle state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`shadow-md bg-gray-100 dark:bg-gray-900 duration-200 ${
          isScrolled ? 'fixed top-0 left-0 right-0 z-10' : ''
        }`}
      >
        <div className='container py-3 sm:py-0'>
          <div className="flex justify-between items-center">
            <div>
              <a href='#' className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                <img src={logo} alt="Epic Designers" className='w-10' />
                EPIC DESIGNERS
              </a>
            </div>
            <div className='flex items-center gap-4'>
              <button
                className='sm:hidden'
                onClick={toggleMenu}
                aria-label='Toggle Menu'
              >
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
              {/* <div>
                <DarkMode />
              </div> */}
              <ul className={`sm:flex gap-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li>
                  <Link to="/">
                    <a href='#' onClick={() => scrollToFooter("home")} className='inline-block py-4 px-4 hover:text-primary'>
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <a href='#' onClick={() => scrollToFooter("about")} className='inline-block py-4 px-4 hover:text-primary'>
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <a href='#' onClick={() => scrollToFooter("service")} className='inline-block py-4 px-4 hover:text-primary'>
                    Service
                  </a>
                </li>
                <li>
                  <a href='#' onClick={() => scrollToFooter("footer")} className='inline-block py-4 px-4 hover:text-primary'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
