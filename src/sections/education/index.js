import React, { Component } from 'react';
import './index.scss';

class Education extends Component {
  render() {
    const educationItems = this.props.content.education.map((education, index) => <li className="item" key={ `education_${ index }` }>
      <h3 className="institution">{ education.institution }</h3>
      <h4 className="discipline">{ education.discipline } <span className="year">({ education.graduationYear })</span></h4>
      <h4 className="note">{ education.note }</h4>
    </li>);

    return (
      <section className="Education">
        <h2 className="header">Education</h2>
        <ol className="list">{ educationItems }</ol>
      </section>
    );
  }
}

export default Education;