import React, { Component } from 'react';
import './projects.scss';

class Projects extends Component {
  render() {
    const projectsItems = this.props.content.projects.map((project) => {
      const techItems = project.tech.map((tech) => <li>{tech}</li>);

      return <li>
        <h3>{project.name}</h3>
        <ul>{techItems}</ul>
        <p>{project.description}</p>
      </li>
    });

    return (
      <section className="Projects">
        <h2>Projects</h2>
        <ol>{projectsItems}</ol>
      </section>
    );
  }
}

export default Projects;