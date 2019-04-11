import React, { Component } from 'react';
import './projects.scss';

class Projects extends Component {
  render() {
    const projectsItems = this.props.content.projects.map((project, parentIndex) => {
      const techItems = project.tech.map((tech, childIndex) => <li className="tech-item" key={ `projectChild_${ childIndex }` }>{ tech }</li>);

      return <li className="project-item" key={ `projectParent_${ parentIndex }` }>
        <h3 className="name">{ project.name }</h3>
        <ul className="tech-list">{ techItems }</ul>
        <p className="description">{ project.description }</p>
      </li>
    });

    return (
      <section className="Projects">
        <h2 className="header">Projects</h2>
        <ol className="list">{ projectsItems }</ol>
      </section>
    );
  }
}

export default Projects;