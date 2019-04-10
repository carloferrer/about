import React, { Component } from 'react';
import Section from './sections';
import './resume.scss';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <Section.Header/>
        <Section.Summary/>
        <Section.Skills/>
        <Section.Employment/>
        <Section.Education/>
        <Section.Projects/>
      </div>
    );
  }
}

export default Resume;