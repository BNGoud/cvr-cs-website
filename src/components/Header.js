import React from 'react';
import { Container, Row, Col, Navbar, Nav,NavDropdown } from 'react-bootstrap';


const style = `
.top-header {
    background-color: #ffffffd1 !important;
    width:100%;
}

.dept-name{
  font-family: 'Times New Roman', Times, serif;
  font-size:3.2rem;
  font-weight: bolder;
  color: #b30f0dbb;
}
nav{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

}
.navbar-custom {
  background: linear-gradient(to right, #fb59b5ff, #00008b); /* Custom gradient */
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.navbar-custom .nav-link {
  padding: 0px;
  margin:0 35px;
  color: white !important;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
   font-size: larger;
  
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


/* Medium devices */
@media (min-width: 768px) {
  .College-logo, .College-Name {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 90px;
    max-width: 80%; /* Adjust as needed */
    // object-fit: contain;
  }
}


}
`;

const Header = () => {
    return (
      <div className="header-container">
      <style>{style}</style>
      {/* <div className="d-flex justify-content-center align-items-center  bg-white  font-sans"> */}
      <Container className="text-center">
        {/* Layout for large devices (2 rows) */}
        <div className="d-none d-lg-block">
          {/* Row 1: Logo and College Name */}
          <Row className="justify-content-center align-items-center ">
            <Col lg={1}>
              <img
                src="dept-images/cvr_logo.jpg"
                alt="CVR College Logo"
                className="img-fluid"
                style={{  height: '75px', objectFit: 'contain' }}
              />
            </Col>
            <Col lg={7}>
              <img
                src="dept-images/College_Name1.JPG"
                alt="CVR College Name"
                className="img-fluid"
                style={{ height: '70px', objectFit: 'contain' }}
              />
            </Col>
          </Row>
          {/* Row 2: Department Name */}
          <Row className="justify-content-center align-items-center">
            <Col>
              <h1 className="dept-name">
                Department of CSE (Cyber Security)
              </h1>
            </Col>
          </Row>
        </div>

        {/* Layout for small and medium devices (stacked) */}
        <div className="d-lg-none d-flex flex-column align-items-center justify-content-center">
          <img
            src="dept-images/cvr_logo.jpg"
            alt="CVR College Logo"
            className="w-full mb-3 img-fluid"
            style={{ maxHeight: '75px', objectFit: 'contain' }}
          />
          <img
            src="dept-images/College_Name1.JPG"
            alt="CVR College Name"
            className="w-full mb-3 img-fluid"
            style={{ maxHeight: '75px', objectFit: 'contain' }}
          />
          <h1 className="dept-name">
            Department of CSE (Cyber Security)
          </h1>
        </div>
      </Container>
        {/* Navigation Bar */}
        <Navbar expand="lg" className="navbar-custom">
            <Container class="">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                <Nav.Link href="Home.js">Home</Nav.Link>
                <Nav.Link href="About.js">About</Nav.Link>

                {/* Academics Dropdown Menu */}
                <NavDropdown title="Academics" id="basic-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    {/* <NavDropdown.Item href="Objectives.js" className="dropdown-item">Objectives</NavDropdown.Item> */}
                    <NavDropdown.Item href="AcademicCalendar.js" className="dropdown-item">Academic Calendar</NavDropdown.Item>
                    <NavDropdown.Item href="SyllabusBooks.js" className="dropdown-item">Syllabus Books</NavDropdown.Item>
                    <NavDropdown.Item href="TimeTables.js" className="dropdown-item">Time Tables</NavDropdown.Item>
                </NavDropdown>
                {/* Infrastructure Dropdown Menu */}
                <Nav.Link href="Infrastructure.js">Infrastructure</Nav.Link>
                {/* <NavDropdown title="Infrastructure" id="basic-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="laboratories.js" className="dropdown-item">Laboratories</NavDropdown.Item>
                    <NavDropdown.Item href="classrooms.js" className="dropdown-item">Class Rooms</NavDropdown.Item>
                    <NavDropdown.Item href="seminarhall.js" className="dropdown-item">Seminar Hall</NavDropdown.Item>
                    <NavDropdown.Item href="library.js" className="dropdown-item">Library</NavDropdown.Item>
                </NavDropdown> */}
                {/* Faculty Dropdown Menu */}
                <NavDropdown title="Faculty" id="faculty-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="TeachingFaculty.js" className="dropdown-item">Teaching Faculty</NavDropdown.Item>
                    {/* <NavDropdown.Item href="Teaching.js" className="dropdown-item">Teaching</NavDropdown.Item> */}
                    <NavDropdown.Item href="NonTeaching.js" className="dropdown-item">Non-Teaching Faculty</NavDropdown.Item>
                </NavDropdown>
                {/* Student Corner Dropdown Menu */}
                {/* <NavDropdown title="Student Corner" id="student-corner-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="gallery.js" className="dropdown-item">Gallery</NavDropdown.Item>
                    <NavDropdown.Item href="placements.js" className="dropdown-item">Placements</NavDropdown.Item>
                    <NavDropdown.Item href="eresources.js" className="dropdown-item">E-Resources</NavDropdown.Item>
                </NavDropdown> */}

                {/* Publications Hub Dropdown Menu */}
                {/* <NavDropdown title="Publications Hub" id="publications-hub-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="technical.js" className="dropdown-item">Technical</NavDropdown.Item>
                    <NavDropdown.Item href="NonTechnical.js" className="dropdown-item">Non-Technical</NavDropdown.Item>
                    <NavDropdown.Item href="NewsLetter.js" className="dropdown-item">Newsletter</NavDropdown.Item>
                </NavDropdown> */}

                {/* Research Dropdown Menu */}
                <Nav.Link href="Research.js">Research</Nav.Link>
                {/* <NavDropdown title="Research" id="research-nav-dropdown" menuVariant="light" className="dropdown-menu-custom">
                    <NavDropdown.Item href="conferences.js" className="dropdown-item">Conferences</NavDropdown.Item>
                    <NavDropdown.Item href="workshops.js" className="dropdown-item">Workshops</NavDropdown.Item>
                    <NavDropdown.Item href="fdps.js" className="dropdown-item">FDP's</NavDropdown.Item>
                    <NavDropdown.Item href="patents.js" className="dropdown-item">Patents</NavDropdown.Item>
                    <NavDropdown.Item href="publications.js" className="dropdown-item">Publications</NavDropdown.Item>
                </NavDropdown> */}
                
                <Nav.Link href="Contact.js">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        // </div>

    );
};

export default Header;