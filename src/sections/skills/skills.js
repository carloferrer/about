import React, { Component } from 'react';
import './skills.scss';

class Skills extends Component {
  render() {
    const skillsLists = {
      Languages: ['JavaScript', 'HTML', 'CSS/SCSS/SASS', 'Bash', 'MATLAB', 'C', 'VBA'],
      'Frameworks & Libraries': ['Riot.js', 'React', 'Angular', 'Express.js', 'jQuery'],
      Testing: ['Mocha', 'Chai', 'Sinon'],
      Databases: ['MongoDB', 'PostgreSQL'],
      Workflow: ['JIRA', 'Node.js', 'MS Word', 'MS Excel', 'MS PowerPoint'],
      'CAD Modelling': ['AutoCAD', 'Inventor', 'SOLIDWORKS', 'Solid Edge']
    };

    const skillsNode = Object.keys(skillsLists).map((listTitle) => {
      const list = skillsLists[listTitle].map((item) => <li>{item}</li>);

      return <li>
        <h3>{listTitle}</h3>
        <ul>{list}</ul>
      </li>
    });

    return (
      <section className='Skills'>
        <h2>Skills</h2>
        <ul>
          {skillsNode}
        </ul>
      </section>
    );
  }
}

export default Skills;