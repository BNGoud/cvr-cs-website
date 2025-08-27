import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col} from 'react-bootstrap';
// Card component for displaying sections using Bootstrap
const style = `
    .times-font {
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.25rem;
        text-align:justify;
    }
    .title{
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.75rem;
        font-weight: bolder;
    }
`
const Card = ({ title, children, customBackgroundColor = '' }) => {
  return (
    <div className={`card shadow mb-4`} style={{ backgroundColor: customBackgroundColor }}>
      <div className="card-body">
        <h5 className="title card-title text-center">{title}</h5>
        <hr />
        {children}
      </div>
    </div>
  );
};

// Main App component
const About = () => {
   // Data for the department vision, mission, POs, and PSOs
  const data = {
    about: {
      title: "About Department",
      text: "The Department of Computer Science and Engineering (Cyber Security) at CVR College of Engineering is dedicated to fostering excellence in the field of cybersecurity. Our curriculum is designed to equip students with a strong foundation in computer science principles and specialized skills in protecting digital assets, networks, and data from a wide range of cyber threats. We offer a dynamic learning environment that combines theoretical knowledge with hands-on practical experience, preparing our graduates to meet the challenges of the modern digital world."
    },
    vision: {
      title: "Vision",
      text: "To be a leading center for cybersecurity education and research, fostering innovation, critical thinking, and practical solutions that empower the next generation of engineers to protect and secure the digital world.",
    },
    mission: {
      title: "Mission",
      intro: "Our mission is to equip students with a comprehensive understanding of cybersecurity principles, tools, and technologies through rigorous academic programs and hands-on experiences. We aim to:",
      points: [
        "M1: Develop a strong foundation of security awareness within the college community",
        "M2: Encourage cutting-edge research to tackle emerging cybersecurity challenges",
        "M3: Create opportunities for students with strong industry interaction of real-world security scenarios",
        "M4: Provide proactive security measures for the protection of digital infrastructure and data of the college and society",
      ],
    },
    pos: {
      title: "Common Program Outcomes (POs)",
      points: [
        {
          po: "PO1: Engineering Knowledge",
          text: "Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization as specified in WK1 to WK4 respectively to develop to the solution of complex engineering problems."
        },
        {
          po: "PO2: Problem Analysis",
          text: "Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions with consideration for sustainable development. (WK1 to WK4)"
        },
        {
          po: "PO3: Design/Development of Solutions",
          text: "Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for the public health and safety, whole-life cost, net zero carbon, culture, society and environment as required. (WK5)"
        },
        {
          po: "PO4: Conduct Investigations of Complex Problems",
          text: "Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data to provide valid conclusions. (WK8)."
        },
        {
          po: "PO5: Engineering Tool Usage",
          text: "Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling recognizing their limitations to solve complex engineering problems. (WK2 and WK6)"
        },
        {
          po: "PO6: The Engineer and The World",
          text: "Analyze and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment. (WK1, WK5, and WK7)."
        },
        {
          po: "PO7: Ethics",
          text: "Apply ethical principles and commit to professional ethics, human values, diversity and inclusion; adhere to national & international laws. (WK9)"
        },
        {
          po: "PO8: Individual and Collaborative Team work",
          text: "Function effectively as an individual, and as a member or leader in diverse/multi-disciplinary teams."
        },
        {
          po: "PO9: Communication",
          text: "Communicate effectively and inclusively within the engineering community and society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations considering cultural, language, and learning differences."
        },
        {
          po: "PO10: Project Management and Finance",
          text: "Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments."
        },
        {
          po: "PO11: Life-Long Learning",
          text: "Recognize the need for, and have the preparation and ability for independent and life-long learning ii) adaptability to new and emerging technologies and iii) critical thinking in the broadest context of technological change. (WK8)"
        },
      ],
    },
    psos: {
      title: "Program Specific Outcomes (PSOs)",
      points: [
        {
          pso: "PSO1:",
          text: "Analyze and assess security threats and vulnerabilities in networks, systems, and applications, and implement appropriate countermeasures and risk management strategies."
        },
        {
          pso: "PSO2:",
          text: "Use modern tools, techniques, and technologies such as firewalls, intrusion detection/prevention systems, cryptography, and malware analysis for protecting information systems."
        },
        {
          pso: "PSO3:",
          text: "Understanding the importance of cyber laws, ethical hacking practices, and digital forensics to ensure compliance with legal frameworks and uphold ethical responsibilities in professional cybersecurity roles."
        },
      ],
    },
  };

  return (
    <div >
      <style>{style}</style>
      <Header />
      <div className="container">
        

        {/* About Card */}
        <div className="my-3">
          <Card title={data.about.title} customBackgroundColor="rgba(243, 202, 79, 0.65)">
            <p className="times-font card-text">{data.about.text}</p>
          </Card>
        </div>

        {/* Vision Card */}
        <Card title={data.vision.title} customBackgroundColor="rgba(88, 219, 240, 0.72)">
          <p className="times-font card-text">{data.vision.text}</p>
        </Card>

        {/* Mission Card */}
        <Card title={data.mission.title} customBackgroundColor="rgba(84, 237, 120, 0.7)">
          <p className="times-font card-text">{data.mission.intro}</p>
          <ul className="list-unstyled">
            {data.mission.points.map((point, index) => (
              <li key={index} className="times-font mb-2">
                <i className=" bi bi-arrow-right-short me-2"></i>
                {point}
              </li>
            ))}
          </ul>
        </Card>

        {/* POs Card */}
        <Card title={data.pos.title} customBackgroundColor="rgba(242, 92, 107, 0.44)">
          <div className="row g-3">
            {data.pos.points.map((po, index) => (
              <div key={index} className="col-12">
                <div className="d-flex flex-column h-100">
                  <p className="times-font fw-bold mb-1">{po.po}</p>
                  <p className="times-font card-text flex-grow-1">{po.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* PSOs Card */}
        <Card title={data.psos.title} customBackgroundColor="rgba(227, 255, 86, 0.64)">
          <div className="row g-3">
            {data.psos.points.map((pso, index) => (
              <div key={index} className="col-12">
                <div className="d-flex flex-column h-100">
                  <p className="times-font fw-bold mb-1">{pso.pso}</p>
                  <p className="times-font card-text flex-grow-1">{pso.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default About;