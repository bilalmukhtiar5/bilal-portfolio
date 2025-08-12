import React from 'react'
import img1 from '../assets/skills-icons/html.png'
import img2 from '../assets/skills-icons/css.png'
import img3 from '../assets/skills-icons/javascript.png'
import img4 from '../assets/skills-icons/reactjs.png'
import img5 from '../assets/skills-icons/nodejs.png'
import img6 from '../assets/skills-icons/mongodb.png'
import img7 from '../assets/skills-icons/expressjs.png'
import img8 from '../assets/skills-icons/tailwind.png'
import img9 from '../assets/tool-icons/ChatGPT.png'
import img10 from '../assets/tool-icons/chrome.png'
import img11 from '../assets/tool-icons/vscode.png'
import img12 from '../assets/tool-icons/postman.png'

const Skills = () => {
    return (
        <section
            id='section-skills'
            className='container-fluid d-flex flex-column align-items-center justify-content-center bg-dark text-white py-5'
        >
            {/* Heading */}
            <div className='text-center mb-4'>
                <h1 style={{ fontSize: '60px', fontWeight: '700' }}>Skills</h1>
                <h5>Here are some of the skills I have acquired over my career:</h5>
            </div>

            {/* Skills Icons */}
            <div className='d-flex flex-wrap justify-content-center gap-3 mb-5'>
                <img src={img1} alt="" style={{ width: '100px', height: '100px' }} />
                <img src={img2} alt="" style={{ width: '100px', height: '100px' }} />
                <img src={img3} alt="" style={{ width: '90px', height: '90px' }} />
                <img src={img4} alt="" style={{ width: '90px', height: '90px' }} />
                <img src={img5} alt="" style={{ width: '90px', height: '90px' }} />
                <img src={img6} alt="" style={{ width: '90px', height: '90px' }} />
                <img src={img7} alt="" style={{ width: '90px', height: '90px' }} />
                <img src={img8} alt="" style={{ width: '90px', height: '90px' }} />
            </div>

            {/* Tools and Software */}
            <div className='text-center'>
                <h1 style={{ fontSize: '30px', fontWeight: '700' }} className='mt-3'>
                    Tools and Software
                </h1>
                <p>Here are some of the tools and software I use:</p>

                <div className='d-flex flex-wrap justify-content-center gap-3'>
                    <img src={img9} alt="Git" style={{ width: '90px', height: '90px' }} />
                    <img src={img10} alt="GitHub" style={{ width: '90px', height: '90px' }} />
                    <img src={img11} alt="Visual Studio Code" style={{ width: '90px', height: '90px' }} />
                    <img src={img12} alt="Visual Studio Code" style={{ width: '90px', height: '90px' }} />
                </div>
            </div>
        </section>

    )
}

export default Skills