import React from 'react'
import portfolioImg from '../assets/hero-image.jpg';
import { motion } from "framer-motion";
import '../components/HeroSections.css';

const HeroSections = () => {
  return (
    <section id='section-hero' className='container-fluid bg-dark mt-5 p-5 text-sm-start'>
      <div className='container d-sm-flex'>

        {/* Left Section - Text */}
        <div className='col-md-6 text-center text-lg-start align-self-center '>
          <h1 className='text-white px-5 fw-bold'>
            Hi, I am <span className='fw-bold'>Bilal Mukhtiar</span>
          </h1>
          <p className='text-white px-5'>
            <span className='mern-stack'>MERN Stack Developer</span>
          </p>

          <motion.button
            className='btn contact-btn btn-lg ms-5'
            style={{ borderRadius: '30px' }} // Change this value
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 6px 20px rgba(0, 123, 255, 0.6)",
              background: "linear-gradient(45deg, #00d4ff, #007bff)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </div>

        {/* Right Section - Image */}
        <div className='col-md-6 d-none d-sm-block d-md-block'>
          <img src={portfolioImg} alt="Portfolio" className='img-fluid w-75' />
        </div>

      </div>
    </section>

  )
}

export default HeroSections
