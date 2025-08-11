import React, { useEffect } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    const style = `
        .objectives-container {
            font-family: 'Times New Roman', Times, serif;
            padding: 0 0;
        }

        .objectives-main-container {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 10px;
            padding: 1rem;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .objectives-title {
            text-align: center;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #02021aff; /* Blue color for the heading */
            font-size: 2.5rem;
        }
        .objectives-subtitle {
            font-size: 3rem;

        }
        
        .peo-card {
            background-color: #81747db4;; /* Purple background */
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            height: 100%;
            padding: 0rem;
        }
        .pso-card {
            background-color: #08d4c6c1;
            
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            height: 100%;
            padding: 0.5rem;
        }
        .po-card {
            background-color: #81747db4; /* Purple background */
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
            height: 100%;
            padding: 0.5rem;
        }

        .peo-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(251, 20, 132, 0.4);
        }
        .pso-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(246, 147, 9, 0.5);
        }
        .po-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(251, 20, 132, 0.4);
        }
        .text-description{
            text-align: justify;
            font-size: 1.1rem;
        }
        .cardsubtitle{
            font-size: 1.2rem;
        }

        .objective-card h5 {
            font-weight: bold;
            color: white;
            margin-bottom: 0.5rem;
            font-size: 1.25rem;
        }

        .objective-card p {
            font-size: 1rem;
            line-height: 1;
        }
    `;
const Objectives = () => {
    const peoData = [
        {
        title: 'PEO 1',
        // subtitle: 'Employability',
        description: 'Graduates will acquire capability to apply their knowledge and skills to solve various kinds of computational engineering problems.',
        },
        {
        title: 'PEO 2',
        // subtitle: 'Professionalism',
        description: 'Graduates will exhibit the ability to apply the acquired skills in various domains and multi-disciplinary areas, to function ethically and meet the ever-increasing technological and social challenges.',
        },
        {
        title: 'PEO 3',
        // subtitle: 'Managerial Skills',
        description: 'To evolve as resourceful engineers catering to dynamic industrial needs and engage in life-long learning.',
        },
        {
        title: 'PEO 4',
        // subtitle: 'Continuous Learning',
        description: 'Graduates will acquire soft skills to adapt and excel in diverse global environment.',
        },
    ];

const psoData = [
        {
        title: 'PSO 1',
        // subtitle: 'Employability',
        description: 'To acquire detailed understanding of security issues, goals, mechanisms and solutions for securing networks and systems.',
        },
        {
        title: 'PSO 2',
        // subtitle: 'Professionalism',
        description: 'To automate the forensic process using software penetration testing,  incident responses and quality assessment methods using Deep Learning algorithms.',
        },
        {
        title: 'PSO 3',
        // subtitle: 'Managerial Skills',
        description: 'To understand the impact of software vulnerabilities and need for secure software development.',
        },
        {
        title: 'PSO 4',
        // subtitle: 'Continuous Learning',
        description: 'To understand the process for security audit and assessment of information systems.',
        },
    ];


    const poData = [
        {
        title: 'PO 1',
        subtitle: 'Engineering knowledge',
        description: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.',
        },
        {
        title: 'PO 2',
        subtitle: 'Problem analysis',
        description: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.',
        },
        {
        title: 'PO 3',
        subtitle: 'Design/development of solutions',
        description: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.',
        },
        {
        title: 'PO 4',
        subtitle: 'Conduct investigations of complex problems',
        description: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.',
        },
        {
        title: 'PO 5',
        subtitle: 'Modern tool usage',
        description: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.',
        },
        {
        title: 'PO 6',
        subtitle: 'The engineer and society',
        description: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice..',
        },
        {
        title: 'PO 7',
        subtitle: 'Environment and sustainability',
        description: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.',
        },
        {
        title: 'PO 8',
        subtitle: 'Ethics',
        description: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.',
        },
        {
        title: 'PO 9',
        subtitle: 'Individual and team work',
        description: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.',
        },
        {
        title: 'PO 10',
        subtitle: 'Communication',
        description: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.',
        },
        {
        title: 'PO 11',
        subtitle: 'Project management and finance',
        description: 'Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.',
        },
        {
        title: 'PO 12',
        subtitle: 'Life-long learning',
        description: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
        },
        
        
    ];





    return (
        <div className="objectives-container">
        <style>{style}</style>
        <Header />
        <Container>
            <div className="objectives-main-container my-3">
            <h2 className="objectives-title">PROGRAM EDUCATIONAL OBJECTIVES</h2>
            <Row className="g-4 justify-content-center">
                {peoData.map((objective, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={3}>
                    <Card className="peo-card">
                    <Card.Body>
                        <h5 className='text-dark text-center'><strong>{objective.title}</strong></h5>
                        <p class='cardsubtitle'><strong>{objective.subtitle}</strong></p>
                        <p class='text-description'>{objective.description}</p>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </div>
        </Container>

        <Container>
            <div className="objectives-main-container my-3">
            <h2 className="objectives-title">PROGRAM SPECIFIC OUTCOMES</h2>
            <Row className="g-4 justify-content-center">
                {psoData.map((objective, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={3}>
                    <Card className="pso-card">
                    <Card.Body>
                        <h5 className='text-dark text-center'><strong>{objective.title}</strong></h5>
                        <p class='cardsubtitle'><strong>{objective.subtitle}</strong></p>
                        <p class='text-description'>{objective.description}</p>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </div>
        </Container>

        <Container>
            <div className="objectives-main-container my-3">
            <h2 className="objectives-title">PROGRAM OUTCOMES</h2>
            <Row className="g-4 justify-content-center">
                {poData.map((objective, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={4}>
                    <Card className="po-card">
                    <Card.Body>
                        <h5 className='text-dark text-center'><strong>{objective.title}</strong></h5>
                        <p className='cardsubtitle text-dark text-center'><strong>{objective.subtitle}</strong></p>
                        <p class='text-description'>{objective.description}</p>
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
export default Objectives;