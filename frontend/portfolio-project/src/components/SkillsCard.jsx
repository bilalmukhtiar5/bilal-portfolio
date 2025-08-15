import React from 'react'
import Card from 'react-bootstrap/Card';
import img1 from '../assets/tool-icons/web.png';
import img2 from '../assets/tool-icons/frontend.png';
import img3 from '../assets/tool-icons/backend.png';

const SkillsCard = () => {
    const data = [
        {
            title: "Frontend Developer",
            description: "Skilled in building responsive and interactive user interfaces using React, HTML, CSS, and JavaScript.",
            imageUrl: img1
        },
        {
            title: "Backend Developer",
            description: "Experienced in creating robust server-side applications with Node.js, Express, and MongoDB.",
            imageUrl: img2
        },
        {
            title: "Full Stack Developer",
            description: "Proficient in both frontend and backend technologies to deliver complete web solutions.",
            imageUrl: img3
        },
        {
            title: "Wordpress Developer",
            description: "Expert in developing custom WordPress themes and plugins, including Elementor Pro and ACF integration.",
            imageUrl: img3
        },
    ];

    return (
        <section
            className='bg-dark p-5 text-center d-flex justify-content-center flex-wrap gap-3'
            style={{ width: '100%' }}>
            {data.map((item, idx) => (
                <Card key={idx} style={{ width: '18rem', backgroundColor: '#151f29ff', color: 'white' }}>
                    <div className="text-center mt-3">
                        <Card.Img 
                            variant="top" 
                            src={item.imageUrl} 
                            style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                    </div>
                    <Card.Body>
                        <Card.Title style={{ fontSize: '22px', marginTop: '10px' }}>
                            {item.title}
                        </Card.Title>
                        <Card.Text style={{fontWeight:'300'}}>{item.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default SkillsCard;
