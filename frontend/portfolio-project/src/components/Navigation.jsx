import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../components/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'ABOUT ME', link: '/aboutme' },
    { name: 'PROJECTS', link: '/projects' },
    { name: 'EXPERIENCE', link: '/experience' },
    { name: 'CONTACT', link: '/contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        {/* Logo */}
        <h3 className="text-white m-0">Bilal Mukhtiar</h3>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Hire Me Button */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item mx-lg-3">
                <Link
                  to={item.link}
                  className="nav-link text-white fs-5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Hire Me Button */}
            <li className="nav-item mt-3 mt-lg-0">
              <motion.button
                className="hire-btn fs-5"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 6px 20px rgba(0, 123, 255, 0.6)',
                  background: 'linear-gradient(45deg, #00d4ff, #007bff)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
