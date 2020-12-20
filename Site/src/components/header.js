import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import Dropdown from '../utils/Dropdown';
import Logo from '../elements/Logo';


function Header() {


  const [mobileNavOpen, setMobileNavOpen, scrolled, setScrolled] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">

            {/* Desktop menu links */}
            <ul className="flex justify-end flex-wrap items-left">
              <li>
                <Link to="https://github.com/PixelVision8/PixelVision8/wiki/api-cheat-sheet" className="text-palette-15 hover:text-palette-14 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="https://github.com/PixelVision8/PixelVision8/wiki" className="text-palette-15 hover:text-palette-14 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="https://github.com/PixelVision8/PixelVision8" className="text-palette-15 hover:text-palette-14 px-4 py-2 flex items-center transition duration-150 ease-in-out">Github</Link>
              </li>
              <li>
                <Link to="https://discord.gg/pixelvision8" className="text-palette-15 hover:text-palette-14 px-4 py-2 flex items-center transition duration-150 ease-in-out">Discord</Link>
              </li>
              <li>
                <Link to="https://medium.com/pixelvision8" className="text-palette-15 hover:text-palette-14 px-4 py-2 flex items-center transition duration-150 ease-in-out">Medium</Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="https://pixelvision8.substack.com" className="btn-sm text-palette-15 hover:text-palette-14 ml-3">Support</Link>
                <Link to="https://github.com/PixelVision8/PixelVision8/releases/latest" className="btn-sm text-palette-15 bg-palette-8 hover:bg-palette-9 ml-3">Latest Build</Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-palette-15 hover:text-palette-14 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/features" className="flex text-palette-15 hover:text-palette-14 py-2" onClick={() => setMobileNavOpen(false)}>Features</Link>
                </li>
                <li>
                  <Link to="/pricing" className="flex text-palette-15 hover:text-palette-14 py-2">Pricing</Link>
                </li>
                <li>
                  <Link to="/blog" className="flex text-palette-15 hover:text-palette-14 py-2">Blog</Link>
                </li>
                <li>
                  <Link to="/about" className="flex text-palette-15 hover:text-palette-14 py-2">About us</Link>
                </li>
                <li className="py-2 my-2 border-t border-b border-gray-700">
                  <span className="flex text-palette-6 py-2">Support</span>
                  <ul className="pl-4">
                    <li>
                      <Link to="/contact" className="text-sm flex font-medium text-gray-400 hover:text-palette-15 py-2">Contact us</Link>
                    </li>
                    <li>
                      <Link to="/help" className="text-sm flex font-medium text-gray-400 hover:text-palette-15 py-2">Help center</Link>
                    </li>
                    <li>
                      <Link to="/404" className="text-sm flex font-medium text-gray-400 hover:text-palette-15 py-2">404</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-palette-15 py-2 justify-center">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-palette-15 bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;