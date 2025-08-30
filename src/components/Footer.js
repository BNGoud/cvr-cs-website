import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// The import for the CSS file is now handled by the inline style block.
// This resolves the "Could not resolve" error because the file doesn't need to be
// in the file system for the code to compile.

const style = `

.footer-custom-bg {
    background-color: #1a1a1a !important;
    font-family: 'Times New Roman', Times, serif;
}
.footer-link-hover:hover {
    text-decoration: underline;
}
.footer-link {
    text-decoration: none;
}
`;

/**
 * A responsive footer component using React-Bootstrap.
 *
 * This component displays a multi-column footer with various links and a copyright notice.
 * It uses Bootstrap's grid system to create a responsive layout that adapts to different
 * screen sizes, stacking the columns on mobile and spreading them out on larger displays.
 * A separate CSS file is used for custom styling that is not available in Bootstrap's
 * default utility classes.
 */
const Footer = () => {
  // A data structure to hold the footer links. Each item now includes a 'url' property.
    const footerLinks = [
        {
        title: 'MAJOR LINKS',
        items: [
            { text: 'Home', url: '/' },
            { text: 'Contact', url: '/Contact.js' },
        ],
        },
        {
        title: 'ACADEMICS',
        items: [
            { text: 'Academic Calendar', url: '/AcademicCalendar.js' },
            { text: 'Syllabus', url: '/SyllabusBooks.js' },
            { text: 'Time Tables', url: '/TimeTables.js' },
        ],
        },
        {
        title: 'FACULTY',
        items: [
            { text: 'Teaching', url: '/Teaching.js' },
            { text: 'Non-Teaching', url: '/NonTeaching.js' },
        ],
        },
        {
        title: 'RESEARCH',
        items: [
            { text: 'Conferences', url: '/Conferences.js' },
            { text: 'Workshops', url: '/Workshops.js' },
            { text: "FDP's", url: '/Fdps.js' },
            { text: 'Patents', url: '/Patents.js' },
        ],
        },
        {
        title: 'STUDENT CORNER',
        items: [
            { text: 'E-Resources', url: '/Eresources.js' },
            { text: 'Gallery', url: '/Gallery.js' },
            { text: 'Placements', url: '/Placements.js' },
        ],
        },
        {
        title: 'PUBLICATIONS HUB',
        items: [
            { text: 'Technical', url: '/TechnicalPublications.js' },
            { text: 'Non Technical', url: '/NonTechnicalPublications.js' },
            { text: 'News Letter', url: '/Newsletter.js' },
        ],
        },
    ];

    return (
        <>
        <style>{style}</style>
        {/* The main footer container. 'bg-dark' and 'text-white' are Bootstrap classes,
            while 'footer-custom-bg' is a custom class for the exact dark color. */}
        <footer className="bg-dark text-white p-1 footer-custom-bg">
            <Container>
            {/*
                This Row creates the grid for the link columns.
                - On extra small screens (xs), it defaults to stacking one column per row.
                - On medium screens (md), it shows 3 columns per row (col-md-4).
                - On large screens (lg), we use `col-lg-2` for each column. Since there are
                6 columns, this will cause the layout to be more balanced.
                - `g-4` adds gutter (gap) spacing between columns.
            */}
            <Row className="g-4 mb-1">
                {footerLinks.map((column, index) => (
                <Col xs={6} md={4} lg={2} key={index}>
                    <h6 className="fw-bold mb-3">{column.title}</h6>
                    <ul className="list-unstyled small">
                    {column.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-2">
                        {/* The 'text-white' class keeps the link color white, and 'footer-link'
                            is a custom class to remove the underline. */}
                        <a href={item.url} className="text-white footer-link">
                            {item.text}
                        </a>
                        </li>
                    ))}
                    </ul>
                </Col>
                ))}
            </Row>

            {/* This is the bottom section for the copyright notice.
                'border-top' and 'border-secondary' create the separating line.
                'pt-3' adds top padding, and 'text-center' centers the text. */}
            <Row className="border-top pt-2 border-secondary text-center">
                <Col>
                <p className="large mb-0">Copyright © CVRCE CSE(CS) DEPT</p>
                </Col>
            </Row>
            </Container>
        </footer>
        </>
    );
};

export default Footer;
