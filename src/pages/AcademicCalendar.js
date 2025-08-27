import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

  const style = `
    .academic-calendar-container {
        font-family: 'Times New Roman', Times, serif;
        // padding: 3rem 0;
        
    }

    .academic-calendar-main-container {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 10px;
        padding: 2rem;
        margin:10px 0;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .academic-calendar-title {
        text-align: center;
        font-weight: bold;
        margin-bottom: 2rem;
        color: #f21212ff;  /* Blue color for the heading */
        font-size: 2.5rem;
    }

    .calendar-card {
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        height: 100%;
        text-align: center;
        padding: 1.5rem;
    }

    .calendar-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }

    .calendar-card-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .calendar-card-title {
        font-weight: bold;
        font-size: 1.25rem;
    }

    .calendar-card-subtitle {
        font-size: 1rem;
        color: #6c757d;
        margin-bottom: 1rem;
    }

    .calendar-card .btn {
        width: 100%;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.2s;
    }
`;

    const calendarData = [
        {
        year: 'I Year',
        regulation: '2025-26 - R25',
        pdfUrl: 'AcademicCalendar/WT_SUB.pdf',
        iconUrl: 'https://placehold.co/64x64/4682B4/fff?text=%E2%9C%85',
        },
        {
        year: 'II Year',
        regulation: '2025-26 - R22',
        pdfUrl: 'AcademicCalendar/II-I&II(2025-26).pdf',
        iconUrl: 'https://placehold.co/64x64/4682B4/fff?text=%E2%9C%85',
        },
        {
        year: 'III Year',
        regulation: '2025-26 - R22',
        pdfUrl: 'AcademicCalendar/III-I&II(2025-26).pdf',
        iconUrl: 'https://placehold.co/64x64/4682B4/fff?text=%E2%9C%85',
        },
        {
        year: 'IV Year',
        regulation: '2025-26 - R22',
        pdfUrl: 'AcademicCalendar/IV-I&II(2025-26).pdf',
        iconUrl: 'https://placehold.co/64x64/4682B4/fff?text=%E2%9C%85',
        },
    ];
const AcademicCalendar = () => {
    return (
        <div className="academic-calendar-container">
        <style>{style}</style>
        <Header />
        <Container>
            <div className="academic-calendar-main-container">
            <h2 className="academic-calendar-title">B.Tech Programs</h2>
            <Row className="g-4 justify-content-center">
                {calendarData.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={3}>
                    <Card className="calendar-card">
                    <Card.Body>
                        {/* <img src={item.iconUrl} alt="Calendar Icon" className="calendar-card-icon" /> */}
                        <h5 className="calendar-card-title">B.Tech</h5>
                        <p className="calendar-card-subtitle">{item.year} - {item.regulation}</p>
                        <a href={item.pdfUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        View Academic Calendar
                        </a>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </div>
        </Container>
        <Footer />
        </div>
    );
};
export default AcademicCalendar;