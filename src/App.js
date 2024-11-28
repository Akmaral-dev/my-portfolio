// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Contacts from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <NavBar /> {/* Добавляем навигацию */}
      <div className="container">
        <Routes>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
