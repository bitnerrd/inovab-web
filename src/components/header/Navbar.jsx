import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 lg:px-20 py-4 bg-gradient-to-b from-gray-100 to-white">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="Logo" className="h-8 lg:h-11" />
          </Link>
        </div>

        {/* Mobile Menu (Full Screen) */}
        <div className={`${
          isOpen ? 'fixed inset-0 bg-white z-50 pt-20' : 'hidden'
        } lg:hidden`}>
          <div className="flex flex-col items-center space-y-4 p-4">
            <a href="/about" className="text-gray-700 hover:text-gray-900 w-full text-center py-2">About</a>
            <a href="/news" className="text-gray-700 hover:text-gray-900 w-full text-center py-2">News</a>
            <a href="/media" className="text-gray-700 hover:text-gray-900 w-full text-center py-2">Media</a>
            <a href="/facts" className="text-gray-700 hover:text-gray-900 w-full text-center py-2">Facts</a>
            <a href="/transparency" className="text-gray-700 hover:text-gray-900 w-full text-center py-2">Transparency</a>
            <a href="/whitepaper" className="text-gray-700 hover:text-gray-900 w-full text-center py-2">Whitepaper</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 w-full text-center py-2">Contact Us</a>
            
            {/* Auth Buttons in Mobile Menu */}
            <div className="flex flex-col w-full space-y-2 pt-4">
              <Link to="/login">
              <button className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50">
                Login
              </button>
              </Link>
              <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* Toggle Button for Mobile */}
        <button onClick={toggleMenu} className="z-50 lg:hidden">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:flex-row items-center space-x-6">
          <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="/news" className="text-gray-700 hover:text-gray-900">News</a>
          <a href="/media" className="text-gray-700 hover:text-gray-900">Media</a>
          <a href="/facts" className="text-gray-700 hover:text-gray-900">Facts</a>
          <a href="/transparency" className="text-gray-700 hover:text-gray-900">Transparency</a>
          <a href="/whitepaper" className="text-gray-700 hover:text-gray-900">Whitepaper</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login">
          <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50">
            Login
          </button>
          </Link>
         <Link to="/signUp">
         <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Get started
          </button>
         </Link>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
