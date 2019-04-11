import React, { Component } from 'react';
import './skills.scss';

class Skills extends Component {
  render() {
    const { skills } = this.props.content;

    const skillsItems = Object.keys(skills).map((listTitle, parentIndex) => {
      const list = skills[listTitle].map((item, childIndex) => <li key={ `skillChild_${ childIndex }` }>{item}</li>);

      return <li key={ `skillParent_${ parentIndex }` }>
        <h3>{ listTitle }</h3>
        <ul>{ list }</ul>
      </li>
    });

    return (
      <section className='Skills'>
        <h2>Skills</h2>
        <ul>{ skillsItems }</ul>
        <footer>** Denotes "has had exposure to".</footer>
      </section>
    );
  }
}

export default Skills;