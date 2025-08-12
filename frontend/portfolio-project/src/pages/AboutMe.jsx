import React from 'react'


const AboutMe = () => {
  return (
    <section className="container-fluid bg-dark text-white py-5">
      <div className="container">
        {/* Heading */}
        <h1 className="mb-5 fw-bold">About Me</h1>

        <div className="row align-items-center">
          {/* Left column - Short Introduction */}
          <div className="col-lg-12 mb-4">

            <h4>Hi, I'm Bilal Mukhtiar</h4>
            <p>I'm a passionate web developer specializing in creating clean,
              responsive, and user-friendly web applications. With a strong
              background in MERN stack and WordPress development, I enjoy
              turning ideas into functional and visually appealing solutions.
            </p>
          </div>

          {/* Right column - Skills and Resume */}
          <div className="col-lg-12">
            {/* Skills Summary */}
            <h4>Skills Summary</h4>
            <ul>
              <li>Frontend: React.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: MongoDB, MySQL</li>
              <li>CMS: WordPress, Elementor, ACF</li>
            </ul>

            {/* Career Goal */}
            <p className="mt-3">
              My goal is to build scalable applications that help businesses and individuals succeed in the digital world.
            </p>


          </div>

        </div>
        {/* Download Resume Button */}
        <a href="/resume.pdf" className="btn btn-primary mt-3 text-center" download>
          Download Resume
        </a>
      </div>
    </section>

  )
}

export default AboutMe