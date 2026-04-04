import React from 'react';

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card interactive-card">
          <div className="project-header gradient-1">
            <h3>DiRec - Digital Record Book</h3>
            <span className="project-badge">Academic Capstone</span>
          </div>
          <p>
            Developed a paperless record system for academic institutions with attendance tracking,
            performance reports, and role-based access, built with .NET and SQL.
          </p>
          <div className="project-tech">
            <span>C#</span>
            <span>.NET</span>
            <span>SQL Server</span>
          </div>
          <a href="#" className="project-link">
            See Details →
          </a>
        </div>

        <div className="project-card interactive-card">
          <div className="project-header gradient-2">
            <h3>Live Task Manager</h3>
            <span className="project-badge">Web App</span>
          </div>
          <p>
            Built a real-time team workflow tool with React, Firebase Auth, and realtime updates.
            Focused on usability and productivity insights.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Firebase</span>
            <span>REST API</span>
          </div>
          <a href="#" className="project-link">
            See Details →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
