// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/aboutMe">AboutMe</Link></li>
        <li><Link to="/projects" >Projects</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
