import React, { Component } from 'react';
import './projects.scss';

class Projects extends Component {
  render() {
    const projectsList = [
      {
        name: 'about_me',
        tech: ['React', 'SCSS', 'gh-pages'],
        description: 'A more creative and robust take on my own resume.',
      },
      {
        name: 'fast_tracker',
        tech: ['mongoDB', 'Node.js', 'Express', 'Bash'],
        description: 'A tool for conveniently keeping track of your day, utilized via the command line.',
      },
      {
        name: 'TUNER.',
        tech: ['Spotify API', 'React', 'Express', 'SASS', 'Knex.js', 'PostgreSQL'],
        description: 'Lighthouse Labs final project, developed in a team of 4.  A social medium that analyzes musical compatibility between Spotify users based on their Spotify profile data.  From these analyses, Spotcheck will provide suggestions for new music in a way that encourages users to get to know each other better.',
      }
    ];

    const projectsNode = projectsList.map((project) => {
      const techList = project.tech.map((tech) => <li>{tech}</li>);

      return <li>
        <h3>{project.name}</h3>
        <ul>{techList}</ul>
        <p>{project.description}</p>
      </li>
    });

    return (
      <section className="Projects">
        <h2>Projects</h2>
        <ol>
          {projectsNode}
        </ol>
      </section>
    );
  }
}

export default Projects;