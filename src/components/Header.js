import React from 'react';
import { Container, Row, Col, Navbar, Nav,NavDropdown } from 'react-bootstrap';


const style = `
.top-header {
    background-color: white;
}
.logo-main {
    width: 130px;
    height: auto;
}
.text-dept{
    font-family: 'Times New Roman', Times, serif;
    color: #00008b !important;
    
}
nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

}
.navbar-custom {
  background: linear-gradient(to right, #b859fb, #00008b); /* Custom gradient */
  /* justify-content: space-around; */
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 10px;
}

.navbar-custom .nav-link {
  padding: 0 10px;
  color: white !important;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0 15px;
}


.navbar-custom .nav-link:hover {
  background-color: orange;
  border-radius: 5px;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.dropdown-menu-custom {
    border: none;
    border-radius: 0;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    font-size: 1rem;
    padding: 0;
}

.dropdown-menu-custom .dropdown-item {
    color: red !important;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    padding: 10px 15px;
    transition: background-color 0.2s;
}

.dropdown-menu-custom .dropdown-item:hover {
    background-color: #382c2c;
    border-radius: 5px;
}
/* Flexbox for center alignment of department name on large screens */
    @media (min-width: 992px) {
  .dept-name-col {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .dept-logo-col {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
@media (max-width: 991px) {
  .dept-name-col {
    text-align: center;
    margin-top: 1rem;
  }
  .dept-logo-col {
    text-align: center;
    margin-top: 1rem;
  }
  .logo-col {
    text-align: center;
  }
}
`;

const Header = () => {
    return (
        <div className="header-container">
        {/* Top Header Section */}
        <Container className="top-header p-0">
            {/* <Row className="align-items-center">
            <Col md={6} className="logo-section d-flex align-items-center"> */}
                {/* Replace with your logo */}
                {/* <img src="dept-images/cvr_logo.jpg" alt="CVR College of Engineering Logo" className="logo" />
                <div className="college-info ms-3">
                <h1 className="h5 text-primary fw-bold mb-0">CVR COLLEGE OF ENGINEERING</h1>
                <p className="pursuit mb-0 text-end">In Pursuit of Excellence</p>
                <p className="autonomous small mb-0 text-end">(An Autonomous Institution, NAAC 'A' Grade)</p>
                </div>
            </Col>
            <Col md={6} className="dept-section text-md-end mt-3 mt-md-0">
                <h3 className="deptname h3 text-primary fw-bold mb-0">Department of Computer Science and Engineering</h3>
                <h3 className="deptname h3 text-primary fw-bold text-center mt-1">(Cyber Security)</h3>
            </Col>
            </Row> */}
            <style>{style}</style>
            <Row className="container align-items-center">
            {/* College Logo (Left) */}
            <Col lg={2} className="logo-col">
                {/* Replace this with your actual college logo URL */}
                <img src="dept-images/cvr_logo.jpg" alt="CVR College Logo" className="logo-main" />
            </Col>

            {/* Department Name (Center) */}
            <Col lg={10} className="dept-name-col">
                <div>
                <h1 className="text-dept fw-bold mb-2">Department of Computer Science and Engineering</h1>
                <h1 className="text-dept fw-bold ">(Cyber Security)</h1>
                </div>
            </Col>

            {/* Department Logo (Right) */}
            {/* <Col lg={2} className="dept-logo-col"> */}
                {/* Replace this with your actual department logo URL */}
                {/* <img src="dept-images/Cybersecurity.jpeg" alt="Department Logo" className="logo-main" />
            </Col> */}
            </Row>


        </Container>
        
        {/* Navigation Bar */}
        <Navbar expand="lg" className="navbar-custom">
            <Container class="px-5">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                <Nav.Link href="Home.js">Home</Nav.Link>
                {/* Academics Dropdown Menu */}
                <NavDropdown title="Academics" id="basic-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="Objectives.js" className="dropdown-item">Objectives</NavDropdown.Item>
                    <NavDropdown.Item href="AcademicCalendar.js" className="dropdown-item">Academic Calendar</NavDropdown.Item>
                    <NavDropdown.Item href="SyllabusBooks.js" className="dropdown-item">Syllabus Books</NavDropdown.Item>
                    <NavDropdown.Item href="TimeTables.js" className="dropdown-item">Time Tables</NavDropdown.Item>
                </NavDropdown>
                {/* Infrastructure Dropdown Menu */}
                <NavDropdown title="Infrastructure" id="basic-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="laboratories.js" className="dropdown-item">Laboratories</NavDropdown.Item>
                    <NavDropdown.Item href="classrooms.js" className="dropdown-item">Class Rooms</NavDropdown.Item>
                    <NavDropdown.Item href="seminarhall.js" className="dropdown-item">Seminar Hall</NavDropdown.Item>
                    <NavDropdown.Item href="library.js" className="dropdown-item">Library</NavDropdown.Item>
                </NavDropdown>
                {/* Faculty Dropdown Menu */}
                <NavDropdown title="Faculty" id="faculty-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="Teaching.js" className="dropdown-item">Teaching</NavDropdown.Item>
                    <NavDropdown.Item href="NonTeaching.js" className="dropdown-item">Non-Teaching</NavDropdown.Item>
                </NavDropdown>
                {/* Student Corner Dropdown Menu */}
                <NavDropdown title="Student Corner" id="student-corner-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="gallery.js" className="dropdown-item">Gallery</NavDropdown.Item>
                    <NavDropdown.Item href="placements.js" className="dropdown-item">Placements</NavDropdown.Item>
                    <NavDropdown.Item href="eresources.js" className="dropdown-item">E-Resources</NavDropdown.Item>
                </NavDropdown>

                {/* Publications Hub Dropdown Menu */}
                <NavDropdown title="Publications Hub" id="publications-hub-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="technical.js" className="dropdown-item">Technical</NavDropdown.Item>
                    <NavDropdown.Item href="NonTechnical.js" className="dropdown-item">Non-Technical</NavDropdown.Item>
                    <NavDropdown.Item href="NewsLetter.js" className="dropdown-item">Newsletter</NavDropdown.Item>
                </NavDropdown>

                {/* Research Dropdown Menu */}
                <NavDropdown title="Research" id="research-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="conferences.js" className="dropdown-item">Conferences</NavDropdown.Item>
                    <NavDropdown.Item href="workshops.js" className="dropdown-item">Workshops</NavDropdown.Item>
                    <NavDropdown.Item href="fdps.js" className="dropdown-item">FDP's</NavDropdown.Item>
                    <NavDropdown.Item href="patents.js" className="dropdown-item">Patents</NavDropdown.Item>
                    <NavDropdown.Item href="publications.js" className="dropdown-item">Publications</NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="#">About</Nav.Link> */}
                <Nav.Link href="Contact.js">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;