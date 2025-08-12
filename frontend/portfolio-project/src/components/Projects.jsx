import React from 'react'
import project1 from '../assets/projects/project-2.png'
const Projects = () => {
    return (
        <section id='section-projects'>
            <div className="container-fluid bg-dark text-white py-5">
                <div className="container">
                    <h6 className='text-white fw-light text-decoration-underline my-3 intro-text'>MY WORK</h6>
                    <h1 style={{fontSize:'60px', fontWeight:'700'}}>PROJECTS</h1>
                    <p>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card bg-secondary h-100">
                                <img src={project1} className="card-img-top" alt="Project 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Project 1</h5>
                                    <p className="card-text">Description of Project 1.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <div className="col-md-4 mb-4">
                        <div className="card bg-secondary h-100">
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 2" />
                            <div className="card-body">
                                <h5 className="card-title">Project 2</h5>
                                <p className="card-text">Description of Project 2.</p>
                                <a href="#" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Projects