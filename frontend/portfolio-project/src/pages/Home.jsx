import React from 'react'
import HeroSections from '../components/HeroSections'
import SkillsCard from '../components/SkillsCard'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import About from '../components/About'


const Home = () => {
  return (
    <>
    
    <HeroSections/>
    <About/>
    <SkillsCard/>
    <Skills/>
    <WorkExperience/>
    <Projects/>
    <Testimonials/>
    <ContactUs/>
    </>
    

  )
}

export default Home