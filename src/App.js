import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teaching from './pages/Teaching';
import NonTeaching from './pages/NonTeaching';
import Objectives from './pages/Objectives'
import AcademicCalendar from './pages/AcademicCalendar'
import SyllabusBooks from './pages/SyllabusBooks'
import TimeTables from './pages/TimeTables'
import Contact from './pages/Contact';
import About from './pages/About';
import Research from './pages/Research';
import TeachingFaculty from './pages/TeachingFaculty';
import Infrastructure from './pages/Infrastructure';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home.js" element={<Home />} />
        <Route path="Teaching.js" element={<Teaching />} />
        <Route path="NonTeaching.js" element={<NonTeaching />} />
        <Route path="Objectives.js" element={<Objectives />} />
        <Route path="AcademicCalendar.js" element={<AcademicCalendar />} />
        <Route path="SyllabusBooks.js" element={<SyllabusBooks />} />
        <Route path="TimeTables.js" element={<TimeTables />} />
        <Route path="Contact.js" element={<Contact />} />
        <Route path="About.js" element={<About />} />
        <Route path="Research.js" element={<Research />} />
        <Route path="TeachingFaculty.js" element={<TeachingFaculty />} />
        <Route path="Infrastructure.js" element={<Infrastructure />} /> 
      </Routes>
    </Router>
  
  );
};

export default App;