import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'

export default function App() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
    </div>
  )
}
