import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='flex fixed top-0 left-0 right-0 backdrop-blur bg-stone-400/80 justify-between items-center py-4 px-4 lg:px-20 z-30'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>Dhruv Saas</h1>
      <nav className='hidden md:flex items-center gap-12'>
        <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300'>COMPANY</a>
        <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300'>FEATURES</a>
        <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300'>RESOURCES</a>
        <a href="#" className='text-base tracking-wider transition-colors hover:text-gray-300'>DOCS</a>
      </nav>
      <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer'>
        SIGNIN
      </button>
      <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">
          <path d="M8 11h12v2H8zM12 18h8v-2h-8zM4 6h16v2H4z"></path>
        </svg>
      </button>
      <div className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-end p-6'>
          <button onClick={toggleMobileMenu} className='text-white text-2xl'>&times;</button>
        </div>
        <nav className='flex flex-col items-center gap-6 mt-10'>
          <a href="#" className='text-lg text-stone-300 tracking-wider transition-colors hover:text-gray-300' onClick={toggleMobileMenu}>COMPANY</a>
          <a href="#" className='text-lg text-stone-300 tracking-wider transition-colors hover:text-gray-300' onClick={toggleMobileMenu}>FEATURES</a>
          <a href="#" className='text-lg text-stone-300 tracking-wider transition-colors hover:text-gray-300' onClick={toggleMobileMenu}>RESOURCES</a>
          <a href="#" className='text-lg text-stone-300 tracking-wider transition-colors hover:text-gray-300' onClick={toggleMobileMenu}>DOCS</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
