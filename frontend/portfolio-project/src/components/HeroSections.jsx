import React from 'react'
import portfolioImg from '../assets/portfolio-img.jpg';
import { motion } from "framer-motion";
import '../components/HeroSections.css';

const HeroSections = () => {
  return (
    <section id='section-hero' className='container-fluid bg-dark'>
      <div className='container d-flex flex-column-reverse flex-md-row justify-content-between align-items-center py-5'>

        {/* Left Section - Text */}
        <div className='text-center text-md-start mt-4 mt-md-0'>
          <h1 className='text-white px-3 px-md-5 fw-bold'>
            Hi, I am Bilal Mukhtiar
          </h1>
          <h6 className='text-white px-3 px-md-5 mt-3 mb-4'>
            I develop Full Stack Web Application, using MERN Stack
          </h6>

          <motion.button
            className='btn contact-btn btn-lg px-4 px-md-5 ms-5'
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
        <div className='text-center'>
          <img
            src={portfolioImg}
            alt="Portfolio"
            className='img-fluid rounded w-100 w-lg-75'
            
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSections
