import React from 'react'

const ContactUs = () => {
  return (
    <section id='section-contact'>
        <div className="container-fluid bg-dark text-white py-5">
            <div className="container">
              <p className='text-center text-decoration-underline'>Get in Touch</p>
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
        </div>
    </section>
  )
}

export default ContactUs