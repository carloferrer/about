import React, { Component } from 'react';
import './education.scss';

class Education extends Component {
  render() {
    const educationItems = this.props.content.education.map((education, index) => <li className="item" key={ `education_${ index }` }>
      <h3 className="institution">{ education.institution }</h3>
      <h4 className="discipline">{ education.discipline }</h4>
      <h5 className="year">{ education.graduationYear }</h5>
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