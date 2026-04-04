import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">Fresher</span>
          <h1 className="hero-title">Hi, I'm Ganesh Dongare</h1>
          <p className="hero-subtitle">BCA Graduate | Software Developer</p>
          <p className="hero-description">
            Dedicated fresher with a solid foundation in software development and digital systems.
            I create intuitive applications and polished user experiences using modern technologies.
          </p>
          <div className="hero-stats">
            <div><strong>4x</strong> real-world projects</div>
            <div><strong>3</strong> certifications</div>
            <div><strong>100%</strong> growth mindset</div>
          </div>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="cta-button primary">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="cta-button secondary">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-aside">
          <div className="profile-card">
            <img
              src="Photo new.png"
              alt="Ganesh Dongare"
              className="profile-photo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/140';
              }}
            />
            <div className="profile-info">
              <h3>Ganesh Dongare</h3>
              <p>BCA Graduate</p>
              <p>Open to software developer roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
