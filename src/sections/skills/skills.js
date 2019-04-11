import React, { Component } from 'react';
import './skills.scss';

class Skills extends Component {
  render() {
    const { skills } = this.props.content;

    const skillsItems = Object.keys(skills).map((listTitle) => {
      const list = skills[listTitle].map((item) => <li>{item}</li>);

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