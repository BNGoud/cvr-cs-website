// import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

  const style = `
    .timeTable-container {
        font-family: 'Times New Roman', Times, serif;
        // padding: 3rem 0;
        
    }
    .TimeTables-main{
        background-color: rgba(170, 236, 123, 0.51);
    }

    .timeTable-main-container {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 10px;
        padding: 2rem;
        margin:10px 0;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .timeTable-title {
        text-align: center;
        font-weight: bold;
        margin-bottom: 2rem;
        color: #f21212ff; 
        font-size: 2.5rem;
    }

    .time-card {
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        height: 100%;
        text-align: center;
        padding: 1.5rem;
    }

    .time-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }

    .time-card-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .time-card-title {
        font-weight: bold;
        font-size: 1.25rem;
    }

    .time-card-subtitle {
        font-size: 1rem;
        color: #6c757d;
        margin-bottom: 1rem;
    }

    .time-card .btn {
        width: 100%;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.2s;
    }
`;

    const timeTableData = [
        {
        year: 'I Year',
        regulation: '2025-26 - R25',
        pdfUrl: 'TimeTables/',
        iconUrl: 'https://placehold.co/64x64/4682B4/fff?text=%E2%9C%85',
        },
        {
        year: 'II Year',
        regulation: '2025-26 - R22',
        pdfUrl: 'TimeTables/II-I.pdf',
        iconUrl: 'https://placehold.co/64x64/4682B4/fff?text=%E2%9C%85',
        },
        {
        year: 'III Year',
        regulation: '2025-26 - R22',
        pdfUrl: 'TimeTables/III-I.pdf',
        iconUrl: 'https://placehold.co/64x64/4682B4/fff?text=%E2%9C%85',
        },
        {
        year: 'IV Year',
        regulation: '2025-26 - R22',
        pdfUrl: 'TimeTables/IV-I.pdf',
        iconUrl: 'https://placehold.co/64x64/4682B4/fff?text=%E2%9C%85',
        },
    ];
const TimeTables = () => {
    return (
        <div className="timeTable-container">
        <style>{style}</style>
        <Header />
        <div className="TimeTables-main p-2">
        <Container>
            <div className="timeTable-main-container">
            <h2 className="timeTable-title">Time Tables</h2>
            <Row className="g-4 justify-content-center">
                {timeTableData.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={3}>
                    <Card className="time-card">
                    <Card.Body>
                        {/* <img src={item.iconUrl} alt="TimeTable Icon" className="time-card-icon" /> */}
                        <h5 className="time-card-title">B.Tech</h5>
                        <p className="time-card-subtitle">{item.year} - {item.regulation}</p>
                        <a href={item.pdfUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        View Time Table
                        </a>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </div>
        </Container>
        </div>
        <Footer />
        </div>
    );
};
export default TimeTables;