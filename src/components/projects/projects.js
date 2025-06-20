import React from 'react';
import './projects.css'

const projects = [
    {
        title: 'Example',
        description: 'testing',
        link: 'test.com'
    }
]

const Projects = () => {
    return (
    <section className = "projects-section" id = "projects">
        <h2 className='projects-title'>Projects</h2>
        <div className='projects-grid'>
        {projects.map((project, index) => (
            <div className = 'project-card' key={index}>
            <h3 className = 'project-title'>{project.title}</h3>
            <p className='project-desc'>{project.description}</p>
            <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                view on github
                </a>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Projects;