import React, { Component } from 'react';
import './index.scss';

class Skills extends Component {
  render() {
    const { skills } = this.props.content;

    const skillsItems = Object.keys(skills).map((type, parentIndex) => {
      const typeList = skills[type].map((item, childIndex) => <li className="type-item" key={ `skillChild_${ childIndex }` }>• { item }</li>);

      return <li className="skill-item" key={ `skillParent_${ parentIndex }` }>
        <h3 className="type">{ type }:</h3>
        <ul className="type-list">{ typeList }</ul>
      </li>
    });

    return (
      <section className='Skills'>
        <h2 className="header">Proficiencies</h2>
        <ul className="list">{ skillsItems }</ul>
        <footer className="disclaimer">** Denotes "has had exposure to".</footer>
      </section>
    );
  }
}

export default Skills;