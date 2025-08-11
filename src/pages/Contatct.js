import React, { useEffect } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
const Contact = () => {
    const style = `
        .contact-container {
            font-family: 'Times New Roman', Times, serif;
            padding: 0 0;
        }
        .contact-title {
            text-align: center;
            font-weight: bold;
            color: #02021dff;
            font-size: 2.5rem;
        }
        .contact-card {
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            height: 100%;
        }
        .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.57);
        }
        .card-title {
            font-weight: bold;
            color: #0000ff;
            margin-bottom: 1.5rem;
        }
        .contact-detail {
            margin-bottom: 1rem;
        }
        .contact-detail p {
            margin: 0;
        }
        .contact-detail strong {
            color: #010114ff;
        }
        .department-head {
            font-weight: bold;
            color: red;
            margin-top: 1rem;
        }
        .campus-info {
        color: #000000;
        }
        .department-info {
        color: #000000;
        }
        .department-address {
        color: #000000;
        }
        .department-email {
        color: red;
        }
    `;

    return (
        <div className="contact-container">
        <style>{style}</style>
        <Header />
        <Container>
            <h2 className="contact-title">Contact Us</h2>
            <Row className="g-4 justify-content-center mb-3">
            <Col md={6} lg={5}>
                <Card className="contact-card">
                <Card.Body>
                    <h3 className="card-title">Campus</h3>
                    <div className="contact-detail">
                    <p className="campus-info">
                        <strong>CVR College Of Engineering,</strong><br />
                        Vastunagar, Mangalpalli (V), Ibrahimpatnam (M),<br />
                        Rangareddy (D), Telangana 501 510
                    </p>
                    </div>
                    <div className="contact-detail">
                    <p><strong>Phone no:</strong> 08414-661601</p>
                    </div>
                    <div className="contact-detail">
                    <p><strong>Email:</strong> <a href="mailto:principal@cvr.ac.in">principal@cvr.ac.in</a></p>
                    </div>
                </Card.Body>
                </Card>
            </Col>

            <Col md={6} lg={5}>
                <Card className="contact-card">
                <Card.Body>
                    <h3 className="card-title">Department</h3>
                    <div className="contact-detail">
                    <p className="department-head">Dr. Sunitha Maddhi</p>
                    <p className="department-info">Professor & Head of Department</p>
                    </div>
                    <div className="contact-detail">
                    <p className="department-address">
                        CVR College of Engineering,<br />
                        Vastunagar, Mangalpalli (V), Ibrahimpatnam (M),<br />
                        Rangareddy (D), Telangana 501 510
                    </p>
                    </div>
                    <div className="contact-detail">
                    <p><strong>Phone no:</strong> 9640333666</p>
                    </div>
                    <div className="contact-detail">
                    <p><strong>Email:</strong> <a href="mailto:head.cs@cvr.ac.in" className="department-email">head.cs@cvr.ac.in</a></p>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        <Footer />
        </div>
    );
};
export default Contact;