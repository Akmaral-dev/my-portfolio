// src/components/Projects.js
import React from 'react';
import './style.css'; // Importing the CSS styles

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <h2> Task Management App</h2>
          <p>
            This app allows users to efficiently manage their tasks. It provides the ability to create tasks,
            set priorities, define deadlines, and track progress. The project uses React for the frontend and
            Node.js with Express for the backend. The app integrates with a database to store tasks and user data.
            The goal of the project was to create a user-friendly and efficient task management tool that can be used
            by both individuals and teams to organize their work more effectively.
          </p>
        </div>
        <div className="project-card">
          <h2> Personal Portfolio Website</h2>
          <p>
            The personal portfolio website showcases my projects, skills, and achievements. It contains sections
            detailing my work, contact information, and a contact form for easy communication. The site is responsive,
            optimized for mobile devices, and utilizes modern technologies such as React for dynamic content rendering
            and CSS Grid for flexible layout. The purpose of this project was to provide a platform where potential
            employers and clients could easily explore my work and get in touch with me.
          </p>
        </div>
        <div className="project-card">
          
          <h2> API Integration App</h2>
          <p>
            This application is designed to interact with external APIs. It allows users to input queries, send them
            to the server, and display the results on the webpage. The project utilizes React, Axios for making HTTP
            requests, and Redux for state management. The goal of the project was to demonstrate skills in working with
            APIs and showcase how to effectively handle and display data fetched from various external sources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
