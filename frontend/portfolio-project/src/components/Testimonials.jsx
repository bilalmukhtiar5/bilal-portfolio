import React from 'react'
import ss1 from '../assets/testimonials/01.png'
import ss2 from '../assets/testimonials/02.png'
import ss3 from '../assets/testimonials/03.png'

const Testimonials = () => {
  return (

    <section id='section-testimonials' className="container-fluid bg-dark text-white p-5">
      <div className="container">
        {/* Text section */}
        <div className="mb-4">
          <p className="mb-1 text-decoration-underline">WHAT OTHERS SAY</p>
          <h1 style={{ fontSize: '60px' }}>Testimonials</h1>
        </div>

        {/* Images section */}
        <div className="row g-3">
          <div className="col-md-6">
            <img src={ss1} alt="Testimonial 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <img src={ss2} alt="Testimonial 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <img src={ss3} alt="Testimonial 3" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>



  )
}

export default Testimonials