// InfrastructurePage.js

import Header from '../components/Header'; 
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Sample images (replace with your actual image paths)

const Infrastructure = () => {
  const infrastructureData = [
    {
      title: "Classrooms",
      images: ["class1.jpg", "class2.jpg"],
    },
    {
      title: "Labs",
      images: ["lab1.jpg", "lab2.jpg", "lab3.jpg", "lab4.jpg"],
    },
    {
      title: "Seminar Hall",
      images: ["seminar1.avif","seminar2.avif"],
    },
    {
      title: "College Library",
      images: ["library1.jpg", "library2.jpg"],
    },
  ];

  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        {infrastructureData.map((section, idx) => (
          <section key={idx} style={{ marginBottom: "40px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              {section.title}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {section.images.map((img, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/Infrastructure/${img}`}
                    alt={`${section.title} ${i + 1}`}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
