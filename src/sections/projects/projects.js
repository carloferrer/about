import React, { Component } from 'react';
import './projects.scss';

class Projects extends Component {
  render() {
    const projectsItems = this.props.content.projects.map((project, parentIndex) => {
      const techItems = project.tech.map((tech, childIndex) => <li key={ `projectChild_${ childIndex }` }>{tech}</li>);

      return <li key={ `projectParent_${ parentIndex }` }>
        <h3>{ project.name }</h3>
        <ul>{ techItems }</ul>
        <p>{ project.description }</p>
      </li>
    });

    return (
      <section className="Projects">
        <h2>Projects</h2>
        <ol>{ projectsItems }</ol>
      </section>
    );
  }
}

export default Projects;