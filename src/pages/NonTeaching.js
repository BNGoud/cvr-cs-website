import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const style = `
    .faculty-list-container {
        font-family: 'Times New Roman', Times, serif;
        padding: 0rem 0;
        // background-color: bisque
    }
    .custom-container{
        // background-color:#0f0ff14b;
        padding-left:20px;
        padding-right:20px;
    }

    .faculty-list-title {
        text-align: center;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #0f0ff14b;
    }

    .faculty-card {
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        height: 100%;
        overflow: hidden;
        padding-top:5px;
        //background-color: bisque
    }

    .faculty-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(14, 151, 248, 0.78);
    }

    .faculty-card-image {
        Margin-top:5px;
        padding-top:5px;
        width: 75%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-self: center;
        object-fit: scale-down;
    }
    .faculty-card-image:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(243, 17, 17, 0.96);
    }
    .faculty-card-body {
        text-align: center;
        padding: 1rem;
    }

    .faculty-card-body h5 {
        font-weight: bold;
        color: #333;
    }

    .faculty-card-body p {
        color: #777;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }
`;

/**
 * A responsive component to display a list of teaching faculty in a card format.
 * The layout adjusts based on screen size:
 * - 4 cards per row on large screens (lg)
 * - 3 cards per row on medium screens (md)
 * - 1 card per row on small (sm) and extra small (xs) screens
 */
const NonTeaching = () => {
    const facultyData = [
        {
        name: 'Mr.B.Ramesh',
        designation: "Lab Programmer",
        joined: '5th Dec 2022',
        imageUrl: "/NonTeaching/Ramesh.jpg",
        profileLink: "/profiles/faculty1.html"
        },
        {
        name: 'Mrs.B.Aruna',
        designation: "Lab Programmer",
        joined: '17th Jan 2024',
        imageUrl: "/NonTeaching/Aruna.jpg",
        profileLink: "/profiles/faculty1.html"
        },
        {
        name: 'Ms. N.Sreelatha',
        designation: "Lab Programmer",
        joined: '4th Feb 2025',
        imageUrl: "/NonTeaching/Sreelatha.jpg",
        profileLink: "/profiles/faculty1.html"
        },
        {
        name: 'Mr.T.Dinesh Chandra',
        designation: "DTP Operator",
        joined: '2nd Dec 2022',
        imageUrl: "/NonTeaching/DineshChandra.jpg",
        profileLink: "/profiles/faculty1.html"
        },
        {
        name: 'Mrs.P.Vijaya Durga',
        designation: "DTP Operator",
        joined: '24th Apr 2021',
        imageUrl: "/NonTeaching/VijayaDurga.jpg",
        profileLink: "/profiles/faculty1.html"
        },
        
    ];

    const [selectedFaculty, setSelectedFaculty] = React.useState(null);

    const handleFacultyClick = (faculty) => {
        setSelectedFaculty(faculty);
    };

    const handleBackToList = () => {
        setSelectedFaculty(null);
    };

    return (
        <div className="faculty-list-container">
        <style>{style}</style>
        <Header />
        <Container class="custom-container m-3">
            {selectedFaculty ? (
            <div>
                <h2 className="faculty-list-title">{selectedFaculty.name}</h2>
                <Card className="mb-4">
                <Row noGutters >
                    <Col md={4}>
                    <Card.Img 
                        src={selectedFaculty.imageUrl} 
                        alt={selectedFaculty.name} 
                        onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/400x250/cccccc/333333?text=Image+Unavailable`;
                        }}
                    />
                    </Col>
                    <Col md={8}>
                    <Card.Body>
                        <Card.Title>{selectedFaculty.name}</Card.Title>
                        <Card.Text>
                        <p><strong>Designation:</strong> {selectedFaculty.designation}</p>
                        <p><strong>Joined:</strong> {selectedFaculty.joined}</p>
                        <p>{selectedFaculty.details}</p>
                        </Card.Text>
                        <button className="btn btn-primary" onClick={handleBackToList}>Back to List</button>
                    </Card.Body>
                    </Col>
                </Row>
                </Card>
            </div>
            ) : (
            <>
                <h2 className="faculty-list-title pt-3 text-danger">Non-Teaching Faculty</h2>
                <Row className="g-4 justify-content-center pb-5">
                {facultyData.map((faculty, index) => (
                    <Col key={index} xs={12} sm={12} md={4} lg={4}>
                    <Card className="faculty-card">
                        <Card.Img
                        variant="top"
                        src={faculty.imageUrl}
                        alt={faculty.name}
                        className="faculty-card-image pt-2"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/400x250/cccccc/333333?text=Image+Unavailable`;
                        }}
                        />
                        <Card.Body className="faculty-card-body mb-3">
                        <Card.Title as="h5">
                            {/* <a href="#" class="text-decoration-none" onClick={() => handleFacultyClick(faculty)}> */}
                            <p>{faculty.name}</p>
                        </Card.Title>
                        <Card.Text>
                            <p>{faculty.designation}</p>
                            <p>Joined: {faculty.joined}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            </>
            )}
        </Container>
        <Footer />
        </div>
    );
};

export default NonTeaching;
