import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      icon: '🌐',
      title: 'Full Stack Web Development',
      items: [
        'React + Vite for modern frontend',
        'Node.js + Express backend APIs',
        'TypeScript / JavaScript',
        'MongoDB / MySQL databases',
        'Responsive UI and accessibility',
      ],
    },
    {
      icon: '🧠',
      title: 'Software Development',
      items: [
        'Clean architecture and design patterns',
        'Unit testing and debugging',
        'Git workflows and collaboration',
        'CI/CD deployment pipelines',
        'Problem solving and agile delivery',
      ],
    },
    {
      icon: '📊',
      title: 'Data Analysis',
      items: [
        'Data cleaning and transformation',
        'SQL querying and reporting',
        'Python with pandas / NumPy',
        'Data visualization and storytelling',
        'Insights-driven decision support',
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Core Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <div className="skill-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
