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
import Contact from './pages/Contatct';

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
      </Routes>
    </Router>
  
  );
};

export default App;