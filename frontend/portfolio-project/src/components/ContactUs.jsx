import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id='section-contact'>
        <div className="container-fluid bg-dark text-white py-5">
            <div className="container">
              <p className='text-center text-decoration-underline'>GET IN TOUCH</p>
                <h1 className="mb-5 fw-bold text-center" style={{fontSize:'60px'}}>Contact Me</h1>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>  
            </div>
            <hr className='mx-5' />
            <div className='icons text-center mt-4'>
          <FaFacebook style={{color:'white', fontSize:'20px'}}/> &nbsp;
          <FaInstagram style={{color:'white', fontSize:'20px'}}/>&nbsp;

          <TbBrandFiverr style={{color:'white', fontSize:'20px'}} />
        </div>
        </div>
        
    </section>
  )
}

export default ContactUs