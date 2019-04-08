import React, { Component } from 'react';
import './education.scss';

class Education extends Component {
  render() {
    const educationList = [
      {
        institution: 'Lighthouse Labs',
        discipline: 'Web Development Bootcamp',
        graduationYear: '2017',
      },
      {
        institution: "Queen's University",
        discipline: 'Mechanical Engineering',
        graduationYear: '2015',
      },
    ];

    const educationNode = educationList.map((education) => <li>
      <hgroup>
        <h3>{education.institution}</h3>
        <h4>{education.discipline}</h4>
        <h5>{education.graduationYear}</h5>
      </hgroup>
    </li>);

    return (
      <section className="Education">
        <ol>
          {educationNode}
        </ol>
      </section>
    );
  }
}

export default Education;