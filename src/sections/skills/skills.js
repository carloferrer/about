import React, { Component } from 'react';
import content from '../../content';
import './skills.scss';

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skills: content.skills,
    };
  }

  render() {
    const skillsItems = Object.keys(this.state.skills).map((listTitle) => {
      const list = this.state.skills[listTitle].map((item) => <li>{item}</li>);

      return <li>
        <h3>{listTitle}</h3>
        <ul>{list}</ul>
      </li>
    });

    return (
      <section className='Skills'>
        <h2>Skills</h2>
        <ul>{skillsItems}</ul>
      </section>
    );
  }
}

export default Skills;