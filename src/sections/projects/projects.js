import React, { Component } from 'react';
import './projects.scss';

class Projects extends Component {
  render() {
    const { projects, contact } = this.props.content;

    const projectsItems = projects.map((project, parentIndex) => {
      const techItems = project.tech.map((tech, childIndex) => <li className="tech-item" key={ `projectChild_${ childIndex }` }>• { tech }</li>);

      return <li className="item" key={ `projectParent_${ parentIndex }` }>
        <h3 className="name"><a href={ `https://${ contact.github }/${ project.name }` }>{ project.name }<br/><span className="host">{ contact.github }/{ project.name }</span></a></h3>
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