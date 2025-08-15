import { motion } from "framer-motion";
import React from 'react';
import '../components/About.css'; // Assuming you have a CSS file for styles

const About = () => {
  // Stagger animation for list items
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  const skills = [
    "Frontend: React.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS",
    "Backend: Node.js, Express.js",
    "Database: MongoDB, MySQL",
    "CMS: WordPress, Elementor, ACF"
  ];

  return (
    <section id='section-skills' className="container-fluid bg-dark text-white py-5">
      <div className="container">

        {/* Heading */}
        <motion.p
          className="px-5 text-decoration-underline my-3 intro-text"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          INTRODUCTION
        </motion.p>

        <motion.h1 className="px-5"
          style={{ fontSize: '60px', fontWeight: '700' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h1>

        <div className="row align-items-center">
          {/* Short Intro */}
          <motion.div
            className="col-lg-12 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h5 className="px-5 justify fw-light">
              A skilled and experienced Web app developer passionate about creating dynamic
              and user-friendly web-Apps. With 2 years of experience, I deeply understand
              web development principles and have a proven track record of delivering high-quality projects.
              I am well-versed in various programming languages and frameworks, including HTML, CSS, JavaScript, React Js, Nodejs and MongoDB.
              I stay up-to-date with the latest trends and technologies in the field, continuously expanding my knowledge to ensure
              cutting-edge solutions to my clients.
            </h5>
          </motion.div>

          {/* Skills */}
          <motion.div
  className="col-lg-12 p-5"
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
  <h4 className="px-1 mx-2">Skills Summary</h4>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {skills.map((skill, index) => (
      <motion.li
        key={index}
        custom={index}
        variants={listVariants}
        initial="hidden"
        animate="visible"
        style={{ fontWeight: 300, marginBottom: '8px' }} // Light weight
      >
        <h5 className="fw-light m-0 mx-3">{skill}</h5>
      </motion.li>
    ))}
  </ul>

  <h5 className="mx-3 fw-light">
    My goal is to build scalable applications that help businesses and individuals succeed in the digital world.
  </h5>
</motion.div>

        </div>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          className="btn resume-btn btn-lg mt-3 text-center ms-5"
          download
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: skills.length * 0.2, duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 6px 20px rgba(0, 123, 255, 0.6)",
            background: "linear-gradient(45deg, #00d4ff, #007bff)"
          }}
          whileTap={{ scale: 0.95 }}
        >Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default About;
