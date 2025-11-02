import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutPreview from '../components/AboutPreview'
import Projects from './Projects' // Changed from ProjectCard to Projects
import ContactForm from '../components/ContactForm'
import './Home.css'

const Home = () => {
  return (
   <>
      <section id="home"><HeroSection /></section>
      <div className='sectionspace'></div>
      <section id="about"><AboutPreview /></section>
      <div className='sectionspace'></div>
      <section id="projects"><Projects /></section> {/* Changed to Projects component */}
      <div className='sectionspace'></div>
      <section id="contact"><ContactForm /></section>
   </>
  )
}

export default Home