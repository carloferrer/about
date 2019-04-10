import React, { Component } from 'react';
import content from '../../content';
import './education.scss';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      education: content.education,
    };
  }

  render() {
    const educationItems = this.state.education.map((education) => <li>
      <hgroup>
        <h3>{education.institution}</h3>
        <h4>{education.discipline}</h4>
        <h5>{education.graduationYear}</h5>
      </hgroup>
    </li>);

    return (
      <section className="Education">
        <h2>Education</h2>
        <ol>{educationItems}</ol>
      </section>
    );
  }
}

export default Education;