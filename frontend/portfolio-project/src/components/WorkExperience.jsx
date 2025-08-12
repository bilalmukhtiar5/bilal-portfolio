import React, { useEffect } from 'react';
import { FaWordpress, FaHtml5, FaDatabase } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WorkExperience.css'; // Assuming you have a CSS file for styling

const WorkExperience = () => {
  

  return (
    <section id='section-experience' className="container-fluid bg-dark text-white py-5">
      <div className="container mt-5">
        <p className="text-center text-decoration-underline my-3 intro-text">WHAT I HAVE DONE SO FAR</p>
        <h2 className="text-center mb-5 display-4 fw-bold text-white" style={{ fontSize: '60px' }}
         >Work Experience</h2>

        <div className="row">
          {/* Fiverr */}
          <div className="col-md-6 mb-4">
            <div className="p-4 rounded shadow bg-secondary h-100">
              <h4 className="fw-bold text-warning mb-2">
                <FaWordpress className="me-2" /> WordPress Developer
              </h4>
              <h6 className="text-light mb-1">Fiverr</h6>
              <p className="text-info mb-2 fst-italic">June 2019 - Present</p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-white-50">•</span> Built responsive websites using <span className="fw-semibold text-info">Elementor Pro</span> and <span className="fw-semibold text-info">Bootstrap</span>.
                </li>
                <li className="mb-2">
                  <span className="text-white-50">•</span> Created <span className="fw-semibold text-info">user-friendly interfaces</span> with designers.
                </li>
                <li>
                  <span className="text-white-50">•</span> Ensured <span className="fw-semibold text-info">cross-browser compatibility</span>.
                </li>
              </ul>
            </div>
          </div>

          {/* MIS-LRH */}
          <div className="col-md-6 mb-4">
            <div className="p-4 rounded shadow bg-secondary h-100">
              <h4 className="fw-bold text-warning mb-2">
                <FaHtml5 className="me-2" /> UI Designing
              </h4>
              <h6 className="text-light mb-1">MIS-LRH</h6>
              <p className="text-info mb-2 fst-italic">January 2024 - Present</p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-white-50">•</span> Built forms using <span className="fw-semibold text-info">HTML</span> and <span className="fw-semibold text-info">Bootstrap</span>.
                </li>
                <li className="mb-2">
                  <span className="text-white-50">•</span> Handled database with <span className="fw-semibold text-info">MongoDB</span> and <span className="fw-semibold text-info">MySQL</span>.
                </li>
                <li>
                  <span className="text-white-50">•</span> Secured <span className="fw-semibold text-info">sensitive user data</span>.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 rounded shadow bg-secondary h-100">
              <h4 className="fw-bold text-warning mb-2">
                <FaHtml5 className="me-2" /> Frontend Developer
              </h4>
              <h6 className="text-light mb-1">MIS-LRH</h6>
              <p className="text-info mb-2 fst-italic">January 2024 - Present</p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-white-50">•</span> Built forms using <span className="fw-semibold text-info">HTML</span> and <span className="fw-semibold text-info">Bootstrap</span>.
                </li>
                <li className="mb-2">
                  <span className="text-white-50">•</span> Handled database with <span className="fw-semibold text-info">MongoDB</span> and <span className="fw-semibold text-info">MySQL</span>.
                </li>
                <li>
                  <span className="text-white-50">•</span> Secured <span className="fw-semibold text-info">sensitive user data</span>.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 rounded shadow bg-secondary h-100">
              <h4 className="fw-bold text-warning mb-2">
                <FaHtml5 className="me-2" /> Backend Developer
              </h4>
              <h6 className="text-light mb-1">MIS-LRH</h6>
              <p className="text-info mb-2 fst-italic">January 2024 - Present</p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-white-50">•</span> Built forms using <span className="fw-semibold text-info">HTML</span> and <span className="fw-semibold text-info">Bootstrap</span>.
                </li>
                <li className="mb-2">
                  <span className="text-white-50">•</span> Handled database with <span className="fw-semibold text-info">MongoDB</span> and <span className="fw-semibold text-info">MySQL</span>.
                </li>
                <li>
                  <span className="text-white-50">•</span> Secured <span className="fw-semibold text-info">sensitive user data</span>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
