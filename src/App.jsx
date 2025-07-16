import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero';
import bg from './assets/bg.jpg'
import Spline from '@splinetool/react-spline';

const App = () => {
  return (
    <div className="overflow-x-hidden w-screen relative min-h-screen">
      <Spline
        className='fixed top-0 left-0 w-full h-full opacity-50 -z-20'
        scene="https://prod.spline.design/tSNm-2-rcxwPOzwj/scene.splinecode"
      />
      <img src={bg} alt="" className="absolute bg top-0 right-0 opacity-70 w-full h-full object-cover -z-10" />
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>
      <Header />
      <Hero />
    </div>
  )
}

export default App
