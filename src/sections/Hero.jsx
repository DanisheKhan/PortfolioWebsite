import React from 'react'
import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/ParallaxBackground';

const Hero = () => {
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden '>
      <HeroText />
      <ParallaxBackground />
      <figure className='absolute inset-0'
        style={{
          height: '100vh',
          width: '100vw',
        }}>

      </figure>
    </section>
  )
}

export default Hero;
