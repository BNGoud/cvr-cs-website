import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';



// ========================================================================
// UPDATED MOCK DATA: Research Content with specific publication titles
// ========================================================================
const researchData = {
  Publications: {
    // NOTE: Added 2025 as requested
    2025: [
        { title: '2025_CSE(Cyber Security )_Publications', link: 'Publications/2025_Publications.pdf' },
    ],
    2024: [
      { title: '2024_CSE(Cyber Security )_Publications', link: 'Publications/2024_Publications.pdf' },
    ],
    2023: [
      { title: '2023_CSE(Cyber Security )_Publications', link: 'Publications/2023_Publications.pdf' },
    ],
    2022: [
        { title: '2022_CSE(Cyber Security )_Publications', link: 'Publications/2022_Publications.pdf' },
    ],
  },
//   Conferences: {
//     2024: [
//       { title: 'Securing IoT Devices in Smart Cities', link: '#conf-2024-1' },
//       { title: 'AI-Driven Threat Detection Models', link: '#conf-2024-2' },
//     ],
//     2023: [
//       { title: 'Post-Quantum Cryptography Challenges', link: '#conf-2023-1' },
//     ],
//   },
  FDPs: {
    2025: [
        { title: '2025_CSE(Cyber Security )_FDPS', link: 'FDPS/2025_fdps.pdf' },
    ],
    2024: [
      { title: '2024_CSE(Cyber Security )_FDPS', link: 'FDPS/2024_fdps.pdf' },
    ],
    2023: [
      { title: '2023_CSE(Cyber Security )_FDPS', link: 'FDPS/2023_fdps.pdf' },
    ],
  },
  Patents: {
    2025: [
        { title: '2025_CSE(Cyber Security )_Patents', link: 'Patents/2025_Patents.pdf' },
    ],
    2024: [
      { title: '2024_CSE(Cyber Security )_Patents', link: 'Patents/2024_Patents.pdf' },
    ],
    
  },
};

// ========================================================================
// STYLES (Adopting Times New Roman and the provided color scheme)
// ========================================================================
const style = `
    .research-main {
        background-color: #f7f9fb; /* Light background for the page */
    }
    .times-font {
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.1rem;
        text-align: justify;
    }
    .title {
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.75rem;
        font-weight: bolder;
    }
    .list-group-item-action.active {
        background-color: #007bff; /* Primary Blue */
        color: white !important;
        border-color: #007bff;
        border-radius: 5px;
    }
    .list-group-item-action {
        color: #007bff;
        font-weight: bold;
        transition: background-color 0.2s ease-in-out;
    }
    .list-group-item-action:hover {
        background-color: #e9ecef; /* Lighter hover color */
    }
    .card-title-lg {
      font-size: 1.5rem;
      font-weight: bold;
      color: #343a40;
    }
    .year-heading {
      color: #0056b3; /* Darker blue for year */
      font-weight: bold;
      margin-top: 10px;
      padding-bottom: 5px;
      border-bottom: 2px solid #007bff;
    }
    .pdf-link {
        color: #dc3545; /* Danger Red for PDF links (matching image) */
        text-decoration: underline;
        font-weight: 500;
    }
`;

// ========================================================================
// HELPER COMPONENT (Based on user's Card component)
// ========================================================================
const Card = ({ title, children, customBackgroundColor = '#fff' }) => {
    return (
        <div className={`card shadow mb-4`} style={{ backgroundColor: customBackgroundColor, borderRadius: '8px' }}>
            <div className="card-body">
                <h5 className="title card-title text-center text-primary">{title}</h5>
                <hr />
                {children}
            </div>
        </div>
    );
};

// ========================================================================
// MAIN RESEARCH COMPONENT
// ========================================================================
const Research = () => {
  // State for the currently active research tab (default to Publications)
  const [activeTab, setActiveTab] = useState('FDPs');

  // List of all tabs
  const tabs = [`FDPs`, 'Patents', 'Publications'];

  const renderContent = () => {
    const currentContent = researchData[activeTab];

    if (!currentContent) {
      return (
        <Card title={`${activeTab} Archive`} customBackgroundColor="#ffe0e0">
          <p className="times-font text-danger">No data found for this section.</p>
        </Card>
      );
    }

    // Determine if we should consolidate links without years (Publications, Patents, FDPs)
    const showConsolidatedList = ['FDPs', 'Patents','Publications' ].includes(activeTab);

    if (showConsolidatedList) {
        // 1. Get all year keys and sort them in DESCENDING order (2025, 2024, 2023...)
        const sortedYears = Object.keys(currentContent).sort((a, b) => b - a);

        // 2. Collect all links into a single flat array, maintaining the descending year order
        let allLinks = [];
        sortedYears.forEach(year => {
            // Prepend the year's links to maintain descending order for the whole list
            allLinks = allLinks.concat(currentContent[year]);
        });
        
        return (
            <Card title={`${activeTab}`} customBackgroundColor="#e9f7fe">
                {allLinks.length > 0 ? (
                    <ul className="list-unstyled mt-2 times-font">
                        {allLinks.map((item, index) => (
                            <li key={index} className="mb-2 d-flex align-items-baseline">
                                {/* Using a Bootstrap icon equivalent for visual bullet point in red */}
                                <span className="text-danger me-2" style={{fontSize: '1.2em'}}>&#9679;</span>
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="pdf-link"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="times-font text-muted">No links currently available for {activeTab}.</p>
                )}
            </Card>
        );
    }


    // Original logic for tabs that still need year headers (like Conferences)
    // The sort order is already descending here, which is good.
    const years = Object.keys(currentContent).sort((a, b) => b - a);
    
    return (
      <Card title={`${activeTab}`} customBackgroundColor="#e9f7fe">
        {years.length > 0 ? (
          <div className="times-font">
            {years.map((year) => (
              <div key={year} className="mb-4 p-3 border-start border-4 border-primary bg-light rounded shadow-sm">
                <h4 className="year-heading">{year}</h4>
                <ul className="list-unstyled mt-2">
                  {currentContent[year].map((item, index) => (
                    <li key={index} className="mb-2 d-flex align-items-baseline">
                      {/* Using a Bootstrap icon equivalent for visual bullet point in red */}
                      <span className="text-danger me-2" style={{fontSize: '1.2em'}}>&#9679;</span>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="pdf-link"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="times-font text-muted">No links currently available for {activeTab}.</p>
        )}
      </Card>
    );
  };

  return (
    <div className="research-page">
      {/* Apply custom styles */}
      <style>{style}</style>
      <Header />
      <div className="research-main p-4">
        <Container className="mt-4">
          <Row>
            {/* Left side navigation (3 columns wide) */}
            <Col md={3} className="mb-4">
              <div className="list-group shadow-lg" style={{ borderRadius: '8px' }}>
                {/* <div className="list-group-item text-center fw-bolder bg-primary text-white card-title-lg">
                    Research Categories
                </div> */}
                {tabs.map((tabName) => (
                  <button
                    key={tabName}
                    className={`list-group-item list-group-item-action ${activeTab === tabName ? 'active' : ''}`}
                    onClick={() => setActiveTab(tabName)}
                  >
                    {tabName}
                  </button>
                ))}
              </div>
            </Col>

            {/* Right side content (9 columns wide) */}
            <Col md={9}>
              {renderContent()}
            </Col>
          </Row>
        </Container>
      </div>
       <Footer />
    </div>
  );
};

export default Research;
