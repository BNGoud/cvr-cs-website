// TeachingFaculty.js
import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

const faculties = [
  {
    name: "Dr. Sunitha Maddhi",
    designation: "Prof. & Head",
    qualification: "Ph.D",
    doj: "15-06-2006",
    nature: "Regular",
    specialization: "CSE",
    email: "m.sunitha@cvr.ac.in",
    photo: "Teaching/Sunitha_M.jpg"
  },
  {
    name: "Dr. B. Vikranth",
    designation: "Prof.",
    qualification: "Ph.D",
    doj: "05-08-2004",
    nature: "Regular",
    specialization: "Parallel & Distributed Computing",
    email: "b.vikranth@cvr.ac.in",
    photo: "Teaching/Vikranth.jpg"
  },
  {
    name: "Dr. M. Radha",
    designation: "Assoc. Prof.",
    qualification: "Ph.D",
    doj: "01-03-2021",
    nature: "Regular",
    specialization: "CSE",
    email: "m.radha@cvr.ac.in",
    photo: "Teaching/Radha.jpg"
  },
  {
    name: "Dr. C Raghavendra",
    designation: "Assoc. Prof.",
    qualification: "Ph.D",
    doj: "10-03-2021",
    nature: "Regular",
    specialization: "CSE",
    email: "drraghavendra@cvr.ac.in",
    photo: "Teaching/Raghavendra.jpg"
  },
  {
    name: "Dr. R. Raja",
    designation: "Assoc. Prof.",
    qualification: "Ph.D",
    doj: "24-03-2021",
    nature: "Regular",
    specialization: "CSE",
    email: "r.raja@cvr.ac.in",
    photo: "Teaching/Raja.jpg"
  },
  {
    name: "Dr. V. Deepika",
    designation: "Assoc. Prof.",
    qualification: "Ph.D",
    doj: "05-05-2022",
    nature: "Regular",
    specialization: "CSE",
    email: "dr.v.deepika@cvr.ac.in",
    photo: "Teaching/Deepika.jpg"
  },
  {
    name: "Mrs. G Sunitha Rekha",
    designation: "Sr. Asst. Prof.",
    qualification: "M.Tech",
    doj: "01-06-2010",
    nature: "Regular",
    specialization: "CSE",
    email: "gs.rekha@cvr.ac.in",
    photo: "Teaching/Sunitha_Rekha.jpg"
  },
  {
    name: "Ms. M. Vasavi",
    designation: "Sr. Asst. Prof.",
    qualification: "M.Tech",
    doj: "01-04-2016",
    nature: "Regular",
    specialization: "CSE",
    email: "m.vasavi@cvr.ac.in",
    photo: "Teaching/Vasavi.jpg"
  },
  {
    name: "Dr. L. Roshini",
    designation: "Sr. Asst. Prof.",
    qualification: "Ph.D",
    doj: "16-12-2021",
    nature: "Regular",
    specialization: "CSE",
    email: "roshini@cvr.ac.in",
    photo: "Teaching/Roshini.jpg"
  },
  {
    name: "Ms. K. Manasa",
    designation: "Sr. Asst. Prof.",
    qualification: "M.Tech",
    doj: "01-02-2016",
    nature: "Regular",
    specialization: "CSE",
    email: "k.manasa@cvr.ac.in",
    photo: "Teaching/Manasa.jpg"
  },
  {
    name: "Mr. G. Sravan Kumar",
    designation: "Sr. Asst. Prof.",
    qualification: "M.Tech",
    doj: "06-12-2021",
    nature: "Regular",
    specialization: "CS",
    email: "g.sravankumar@cvr.ac.in",
    photo: "Teaching/Sravan.jpg"
  },
  {
    name: "Sahithi Godavarthi",
    designation: "Sr. Asst. Prof.",
    qualification: "M.Tech",
    doj: "16-02-2022",
    nature: "Regular",
    specialization: "Network Security",
    email: "sahithi.g@cvr.ac.in",
    photo: "Teaching/Sahithi.jpg"
  },
  {
    name: "Mrs. M. Silpa Raj",
    designation: "Sr. Asst. Prof.",
    qualification: "M.Tech",
    doj: "10-01-2023",
    nature: "Regular",
    specialization: "CSE",
    email: "silpa.raj@cvr.ac.in",
    photo: "Teaching/Silparaj.jpg"
  },
  {
    name: "Mrs. P. Vasantha Lakshmi",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "07-03-2020",
    nature: "Regular",
    specialization: "CSE",
    email: "vasantha.lakshmi@cvr.ac.in",
    photo: "Teaching/VasanthaLakshmi.jpg"
  },
  {
    name: "Ms. K. Swathi",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "01-07-2020",
    nature: "Regular",
    specialization: "CSE",
    email: "kathiswathi@cvr.ac.in",
    photo: "Teaching/Swathi.jpg"
  },
  {
    name: "Mr. Gadidala Venkatesh",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "01-12-2021",
    nature: "Regular",
    specialization: "CSE",
    email: "g.venkatesh@cvr.ac.in",
    photo: "Teaching/Venkatesh.jpg"
  },
  {
    name: "Ms. M. Sumalatha",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "03-03-2022",
    nature: "Regular",
    specialization: "CSE",
    email: "sumagopagalla91@cvr.ac.in",
    photo: "Teaching/Sumalatha.jpg"
  },
  {
    name: "Mr. B. Naresh",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "01-02-2023",
    nature: "Regular",
    specialization: "CSE",
    email: "b.naresh@cvr.ac.in",
    photo: "Teaching/Naresh.jpg"
  },
  {
    name: "Mr. Ch. Ravindra Reddy",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "26-10-2024",
    nature: "Regular",
    specialization: "CSE",
    email: "ravindrareddy.ch94@cvr.ac.in",
    photo: "Teaching/Ravindrareddy.jpg"
  },
  {
    name: "Mr. E. Amarnath Goud",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "23-12-2024",
    nature: "Regular",
    specialization: "CSE",
    email: "amarnath.goud@cvr.ac.in",
    photo: "Teaching/amarnathGoud.jpg"
  },
  {
    name: "Mr. K. Prakasha Chary",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "12-01-2023",
    nature: "Regular",
    specialization: "CSE",
    email: "kpc@cvr.ac.in",
    photo: "Teaching/PrakashaChari.jpg"
  },
  {
    name: "Mr. Avinash Amaranayani",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "07-06-2019",
    nature: "Regular",
    specialization: "CSE",
    email: "a.avinash@cvr.ac.in",
    photo: "Teaching/Avinash.jpg"
  },
  {
    name: "Mr. B. Mahender Reddy",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "03-09-2025",
    nature: "Regular",
    specialization: "CSE",
    email: "mahi.bobbali@cvr.ac.in",
    photo: "Teaching/Mahender.jpeg"
  },
  {
    name: "Mr. T. Shashi Kumar",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "03-09-2025",
    nature: "Regular",
    specialization: "CSE",
    email: "tirupatishashi@cvr.ac.in",
    photo: "Teaching/Shashi.jpeg"
  },
  {
    name: "Mrs. M. Prathyusha",
    designation: "Asst. Prof.",
    qualification: "M.Tech",
    doj: "03-09-2025",
    nature: "Regular",
    specialization: "CSE",
    email: "muppuprathyusha@cvr.ac.in",
    photo: "Teaching/Prathyusha.png"
  }
 
];

const TeachingFaculty = () => {
  return (
    <div >
      <Header /><br/>
    <center><h3><b>UG - B.Tech CSE(Cyber Security)</b></h3></center>
      <div style={{ padding: "20px", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>S. No.</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Designation</th>
              <th style={thStyle}>Qualification</th>
              <th style={thStyle}>Date of Joining</th>
              <th style={thStyle}>Nature</th>
              <th style={thStyle}>Specialization</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Photo</th>
            </tr>
          </thead>
          <tbody>
            {faculties.map((fac, index) => (
              <tr key={index}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{fac.name}</td>
                <td style={tdStyle}>{fac.designation}</td>
                <td style={tdStyle}>{fac.qualification}</td>
                <td style={tdStyle}>{fac.doj}</td>
                <td style={tdStyle}>{fac.nature}</td>
                <td style={tdStyle}>{fac.specialization}</td>
                <td style={tdStyle}>{fac.email}</td>
                <td style={tdStyle}>
                  <img
                    src={fac.photo}
                    alt={fac.name}
                    style={{ width: "80px", height: "80px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

// Styles
const thStyle = {
//   border: "1px solid #ccc",
  padding: "8px",
  backgroundColor: "#e3f699ff",
  textAlign: "left"
};

const tdStyle = {
//   border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left"
};

export default TeachingFaculty;
