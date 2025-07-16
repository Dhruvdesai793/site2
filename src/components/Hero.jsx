import React from 'react';
import { IoDiamond, IoDocumentText } from "react-icons/io5";

const Hero = () => {
  return (
    <main className='flex h-[70vh] m-3 lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
      <div className='bg-black/50 backdrop-blur-md md:w-full lg:w-[45%] lg:p-12 md:ml-0 px-8 sm:px-10 lg:px-16 mt-[40%] sm:mt-[30%] md:mt-[15%] lg:mt-0 p-8 rounded-lg shadow-xl'>
        <div className="z-10 text-center lg:text-left">
          <div className='relative w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mx-auto lg:mx-0'>
            <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white'>
              <IoDiamond />
              INTRODUCING
            </div>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wider my-8 text-white'>
            EMAIL FOR <br />
            DEVELOPERS
          </h1>
          <p className='text-base sm:text-lg tracking-wider text-gray-300 max-w-[25rem] mx-auto lg:mx-0'>
            the best way to reach human instead of spam folders, deliver transactional and marketing emails at scale.
          </p>
          <div className='flex flex-col sm:flex-row gap-5 mt-8 items-center justify-center lg:justify-start'>
            <a className='border border-[#2a2a2a] py-3 px-5 items-center rounded-full text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white flex w-full sm:w-auto justify-center' href="#">
              Documentation
              <IoDocumentText className='ml-2' />
            </a>
            <a className='border border-[#2a2a2a] py-3 px-5 items-center rounded-full text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#ffffff] bg-gray-900 text-white hover:text-black flex w-full sm:w-auto justify-center' href="#">
              Get Started
              <IoDocumentText className='ml-2'/>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero;
