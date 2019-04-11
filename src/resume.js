import React, { Component } from 'react';
import Section from './sections';
import content from './content';
import './resume.scss';

class Resume extends Component {
  render() {
    return (
      <main className="Resume">
        <Section.Header content={ content }/>
        <Section.Contact content={ content }/>
        <Section.Summary content={ content }/>
        <Section.Skills content={ content }/>
        <Section.Employment content={ content }/>
        <Section.Education content={ content }/>
        <Section.Projects content={ content }/>
      </main>
    );
  }
}

export default Resume;