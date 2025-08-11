import React from 'react';
import Header from '../components/Header'; // Adjust the path as needed
import Footer from '../components/Footer';
import { Container, Row, Col, Navbar, Nav, Card, Carousel } from 'react-bootstrap';

// import { Container, Row, Col, Card } from 'react-bootstrap';

const styles = `
/* Home Page Specific Styles */
.dept-about{
    background-color: #c9c9f2ff;
    font-family: 'Times New Roman', Times, serif;
    text-align: justify;
}
.hod-msg{
    background-color: #ede8ebff;
    font-family: 'Times New Roman', Times, serif;
    text-align: justify;
}
.text-Heading{
    color: #b90d0dff;
    font-weight: bolder;
    font-family: 'Times New Roman', Times, serif;
}
.All-text{
    font-size: 1.2rem;
}
.text-primary-dept {
    color: #030334ff !important;
}
.carousel-img {
    height: 400px;
    object-fit: cover;
}
.hod-name{
    font-weight: bolder;
    font-family: 'Times New Roman', Times, serif;
    text-decoration: underline;
}
.profile-img-hod {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10%;
    border: 5px solid #00008b;
}`;

const customStyles = `
    .department-strength-container {
        background-color: #f0e5c7ff; /* Light yellow background */
        padding: 1rem 0;
        font-family: 'Times New Roman', Times, serif;
        border-radius:10px
    }
    .department-strength-title {
        font-weight: bold;
        text-align: center;
        margin-bottom: 1rem;
        color: #b90d0dff;
    }
    .card-item {
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.21);
        transition: transform 0.2s;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem;
    }
    .card-item:hover {
        // transform: translate(5px,-5px);
        transform: scale(1.1);
    }
    .card-item .number {
        font-size: 2.5rem;
        font-weight: bold;
        color: #000;
    }
    
    .card-item .role {
        font-size: 1rem;
        margin-top: 0.5rem;
        color: #555;
    }
        .card-item:hover .number,
    .card-item:hover .role {
    color: red;
    }

`;


const Home = () => {
    // Data for the department strength, structured as an array of objects.
    const strengthData = [
        { number: '2', role: 'Professors' },
        { number: '4', role: 'Associate Professors' },
        { number: '4', role: 'Sr. Assistant Professors' },
        { number: '10', role: 'Assistant Professors' },
        { number: '3', role: 'Programmers and Admins' },
        { number: '2', role: 'Office Staff' },
    ];

return (
        <div>
        <Header />
        <style>{styles}</style>
       
        <h1 className="text-center my-4 text-Heading fw-bold">Welcome to Department of CSE(Cyber Security)</h1>
        {/* You can add other content for your home page here */}
        <div className="d-flex flex-column min-vh-100 m-2">
        <main className="flex-grow-1">
            
            {/* Automatic Image Carousel */}
            <Carousel fade controls={false} indicators={false} interval={1000}>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="dept-images/Cybersecurity.jpeg"
                alt="CyberSecurity"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="dept-images/lab1.PNG"
                alt="Cyber Security Labs"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="dept-images/College_Building1.png"
                alt="Department Block"
                />
            </Carousel.Item>
            </Carousel>

            <Container className="p-3">
            {/* Welcome and About Section */}
                <Card className="mb-3 shadow-sm dept-about">
                    <Card.Body>
                    <Card.Title as="h2" className="text-Heading text-center">About Department</Card.Title>
                    <Card.Text class="All-text">
                        The Department of Computer Science and Engineering (Cyber Security) at CVR College of Engineering
                        is dedicated to fostering excellence in the field of cybersecurity. Our curriculum is designed to
                        equip students with a strong foundation in computer science principles and specialized skills
                        in protecting digital assets, networks, and data from a wide range of cyber threats. We offer a
                        dynamic learning environment that combines theoretical knowledge with hands-on practical experience,
                        preparing our graduates to meet the challenges of the modern digital world.
                    </Card.Text>
                    </Card.Body>
                </Card>

                {/* HoD's Message Section */}
                <Card className=" shadow-sm hod-msg">
                    <Card.Body>
                    <Card.Title as="h2" className="text-Heading text-center pb-4">Message by Head of the Department</Card.Title>
                    <Row className="g-1 align-items-center">
                        <Col md={5} className="d-flex justify-content-center">
                        {/* Placeholder for HoD's Photo */}
                        <img src="dept-images/hod.jpg" alt="HoD's Photo" className="profile-img-hod" />
                        </Col>
                        <Col md={7}>
                        <Card.Title as="h2" class="hod-name" >Dr. Sunitha Maddhi (Professor and HOD)</Card.Title>
                        <Card.Text class="All-text">
                            "It is with immense pleasure that I welcome you to the Department of Computer Science and Engineering (Cyber Security). 
                            In today's interconnected world, cybersecurity is not just a field of study—it's a necessity. Our department is committed to 
                            nurturing a new generation of experts who are not only technically proficient but also ethically responsible. We are proud of 
                            our state-of-the-art labs, dedicated faculty, and an innovative curriculum that constantly evolves to meet industry demands. 
                            We encourage our students to explore, innovate, and lead the way in building a secure digital future."
                        </Card.Text>
                        {/* <footer className="blockquote-footer mt-2">
                            Dr. Sunitha Maddhi,
                            <cite title="Source Title"> Head of Department</cite>
                        </footer> */}
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>

            {/* Vision and Mission Section */}
            {/* <Row className="g-4 ">
                <Col md={4}>
                <Card className="h-100 shadow-sm bg-secondary text-white">
                    <Card.Body>
                    <Card.Title as="h3">Our Vision</Card.Title>
                    <Card.Text>
                        To be a leading centre for Cyber Security education and research, fostering innovation, critical thinking, 
                        and practical solutions that empower the next generation of engineers to protect and secure the digital world.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={8}>
                <Card className="h-100 shadow-sm bg-secondary text-white">
                    <Card.Body>
                    <Card.Title as="h3">Our Mission</Card.Title>
                    <Card.Text>
                        Our mission is to equip students with a thorough and practical understanding of Cyber Security principles, tools, and technologies through rigorous academic programs and immersive hands-on experiences. We strive to:
                        <br/><div>M1:Provide quality education in computer science with a specialized focus on cyber security,    
                            preparing students to meet global technological and ethical challenges.
                        </div><br/>
                        <div>M2:Encourage cutting-edge research to tackle emerging cybersecurity challenges.</div>
                        <br/><div>M3:Create opportunities for students with strong industry interaction of real-world security scenarios.</div>
                        <br/><div>M4:Provide proactive security measures for the protection of digital infrastructure and data of the college and society.</div>
                        
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row> */}
            {/* <div className="mt-5 text-center">
                <a href="#" className="btn btn-primary-cvr btn-lg text-white">Learn More About Us</a>
            </div> */}

            </Container>
        </main>

        </div>
        <div className="department-strength-container mx-5 mb-4">
        <style>{customStyles}</style>
        <Container>
            <h2 className="department-strength-title ">DEPARTMENT STRENGTH</h2>
            <Row className="justify-content-center g-4">
            {strengthData.map((item, index) => (
                // The `Col` component makes the layout responsive.
                // On large screens, it will show 6 columns in a row.
                // On medium screens, it will show 3 columns per row.
                // On extra small screens, it will show 2 columns per row.
                <Col xs={6} md={4} lg={2} key={index}>
                <Card className="card-item">
                    <Card.Body>
                    <div className="number">{item.number}</div>
                    <div className="role">{item.role}</div>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
        </div>

    <Footer />
    </div>
    );
};

export default Home;