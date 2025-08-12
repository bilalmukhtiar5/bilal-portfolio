import React from 'react'
import Card from 'react-bootstrap/Card';
import img1 from '../assets/tool-icons/web.png';
import img2 from '../assets/tool-icons/frontend.png';
import img3 from '../assets/tool-icons/backend.png';

const SkillsCard = () => {
    const data = [
        {
            title: "Frontend Developer",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imageUrl: img1
        },
        {
            title: "Backend Developer",
            description: "Another quick example text for the backend developer card.",
            imageUrl: img2
        },
        {
            title: "Full Stack Developer",
            description: "Full stack development involves both frontend and backend skills.",
            imageUrl: img3
        },
        {
            title: "Wordpress Developer",
            description: "Wordpress development involves both Elementor Pro and ACF.",
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
