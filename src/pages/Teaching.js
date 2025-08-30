import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import { FaUserCircle } from 'react-icons/fa';

const style = `
    .faculty-list-container {
        font-family: 'Times New Roman', Times, serif;
        padding: 0rem 0;
    }
    .faculty-main{
        background-color: rgba(170, 236, 123, 0.51);
    }

    .faculty-list-title {
        text-align: center;
        font-weight: bold;
        margin-bottom: 2rem;
        color: #00008b;
    }

    .faculty-card {
        border: 1px solid #ddd;
        border-radius: 50px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        height: 100%;
        overflow: hidden;
        padding-top:2px;
    }

    .faculty-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(14, 151, 248, 0.78);
    }

    .faculty-card-image {
        Margin-top:5px;
        padding-top:5px;
        width: 80%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-self: center;
        object-fit: contain;
        border-radius: 50px;

    }
    // .faculty-card-image:hover {
    //     transform: translateY(-5px);
    //     box-shadow: 0 8px 16px rgba(243, 17, 17, 0.96);
    // }
    .faculty-card-body {
        text-align: center;
        padding: 0.5rem;
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
const Teaching = () => {
    const facultyData = [
        {
        name: 'Dr. Sunitha Maddhi',
        designation: "Professor & Head of the Department",
        joined: '15/06/2006',
        imageUrl: "/Teaching/Sunitha_M.JPG",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37417"
        },
        {
        name: 'Dr.B.Vikranth',
        designation: "Professor",
        joined: '05/08/2004',
        imageUrl: "/Teaching/Vikranth.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37418"
        },
        {
        name: 'Dr. M. Radha',
        designation: "Associate Professor ",
        joined: '01/03/2021',
        imageUrl: "/Teaching/Radha.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37419"
        },
        {
        name: 'Dr. C Raghavendra',
        designation: "Associate Professor",
        joined: '03/10/2021',
        imageUrl: "/Teaching/Raghavendra.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37420"
        },
        {
        name: 'Dr. R. Raja',
        designation: "Associate Professor",
        joined: '24/03/2021',
        imageUrl: "/Teaching/Raja.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37421"
        },
        {
        name: 'Dr. V. Deepika ',
        designation: "Associate Professor",
        joined: '05/05/2022',
        imageUrl: "/Teaching/Deepika.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37422"
        },
        {
        name: 'Mrs. G Sunitha Rekha',
        designation: "Sr. Assistant Professor",
        joined: '01/06/2010',
        imageUrl: "/Teaching/Sunitha_Rekha.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37423"
        },
        {
        name: 'Ms. M. Vasavi',
        designation: "Sr. Assistant Professor",
        joined: '01/04/2016',
        imageUrl: "/Teaching/Vasavi.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37424"
        },
        {
        name: 'Dr. L.Roshini',
        designation: "Sr. Assistant Professor",
        joined: '16/12/2021',
        imageUrl: "/Teaching/Roshini.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37425"
        },
        {
        name: 'Mrs. K. Manasa',
        designation: "Sr. Assistant Professor",
        joined: '01/02/2016',
        imageUrl: "/Teaching/Manasa.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37426"
        },
        {
        name: 'Mr. G.Sravan Kumar',
        designation: "Sr. Assistant Professor",
        joined: '06/12/2021',
        imageUrl: "/Teaching/Sravan.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37431"
        },
        {
        name: 'Mrs. Sahithi Godavarthi',
        designation: "Sr. Assistant Professor",
        joined: '16/026/2022',
        imageUrl: "/Teaching/Sahithi.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37432"
        },
        {
        name: 'Mrs. M. Silpa Raj',
        designation: "Sr. Assistant Professor",
        joined: '10/01/2023',
        imageUrl: "/Teaching/Silparaj.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37434"
        },
        {
        name: 'Mr. Avinash Amaranayani',
        designation: "Assistant Professor",
        joined: '06/07/2019',
        imageUrl: "/Teaching/Avinash.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37427"
        },
        {
        name: 'Mrs. Vasantha Lakshmi',
        designation: "Assistant Professor",
        joined: '07/03/2020',
        imageUrl: "/Teaching/VasanthaLakshimi.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37428"
        },
        {
        name: 'Mrs. K. Swathi',
        designation: "Assistant Professor",
        joined: '01/07/2020',
        imageUrl: "/Teaching/Swathi.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37429"
        },
        {
        name: 'Mr. Gadidala Venkatesh',
        designation: "Assistant Professor",
        joined: '01/12/2021',
        imageUrl: "/Teaching/Venkatesh.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37430"
        },
        {
        name: 'Mrs. M. Sumalatha',
        designation: "Assistant Professor",
        joined: '03/03/2022',
        imageUrl: "/Teaching/Sumalatha.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37433"
        },
        {
        name: 'Mr. K.Prakasha Chary',
        designation: "Assistant Professor",
        joined: '12/01/2023',
        imageUrl: "/Teaching/PrakashaChari.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37435"
        },
        {
        name: 'Mr. B.Naresh,',
        designation: "Assistant Professor",
        joined: '01/02/2023',
        imageUrl: "/Teaching/Naresh.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37436"
        },
        {
        name: 'Mr. Ravindrareddy Chilukuri',
        designation: "Assistant Professor",
        joined: '',
        imageUrl: "/Teaching/Ravindrareddy.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/37437"
        },
        {
        name: 'Mr. Ediga Amarnath Goud',
        designation: "Assistant Professor",
        joined: '23/12/2024',
        imageUrl: "/Teaching/AmarnathGoud.jpg",
        profileLink: "https://portal.vmedulife.com/institute/Faculty/viewDetails/Cvr-Telangana/39591"
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
        <div className="faculty-main">
        <Container class="m-3">
            {selectedFaculty ? (
            <div>
                <h2 className="faculty-list-title">{selectedFaculty.name}</h2>
                <Card className="mb-0">
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
                <h2 className="faculty-list-title pt-3 text-danger">Teaching Faculty</h2>
                <Row className="g-4 justify-content-center pb-5">
                {facultyData.map((faculty, index) => (
                    <Col key={index} xs={6} sm={6} md={4} lg={3}>
                    <Card className="faculty-card">
                        <Card.Img
                        variant="top"
                        src={faculty.imageUrl}
                        alt={faculty.name}
                        className="faculty-card-image pt-0"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/400x250/cccccc/333333?text=Image+Unavailable`;
                        }}
                        />
                        <Card.Body className="faculty-card-body">
                        <Card.Title as="h5">
                            <a href={faculty.profileLink} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                            {faculty.name}
                            </a>
                        </Card.Title>
                        <Card.Text>
                            {faculty.designation}<br/>
                            Joined: {faculty.joined}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            </>
            )}
        </Container>
        </div>
        <Footer />
        </div>
    );
};

export default Teaching;
