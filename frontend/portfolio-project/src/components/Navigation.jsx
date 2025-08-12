import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <div className="d-flex align-items-center ms-5">
          <img src={logo} alt="Logo" style={{ width: '60px', height: '60px' }} />
        </div>

        {/* Hamburger Button */}
        <button
          className="border-0 bg-transparent p-2 d-lg-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi bi-list"
            width="30"
            height="30"
            viewBox="0 0 16 16"
            fill={isOpen ? "#ffffff" : "#ffffff"} // modern blue when open
            style={{ transition: 'fill 0.3s ease' }}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"
            />
          </svg>
        </button>

        {/* Links + Button */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <div className="row w-100">
            {/* Links Section */}
            <div className="col-lg-6 ms-auto">
              <ul className="d-flex flex-column flex-lg-row justify-content-end list-unstyled m-0 p-0">
                {navItems.map((item, index) => (
                  <li key={index} className="mx-lg-3 my-2 my-lg-0">
                    <Link
                      to={item.link}
                      className="text-white fs-5 text-decoration-none"
                      onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hire Me Button */}
            {/* <div className="col-lg-2 justify-content-end text-lg-start text-center mt-3 mt-lg-0">
              <motion.button
                className="btn hire-btn fs-5"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 6px 20px rgba(0, 123, 255, 0.6)',
                  background: 'linear-gradient(45deg, #00d4ff, #007bff)',
                }}
                whileTap={{ scale: 0.95 }}>
                Hire Me
              </motion.button>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

