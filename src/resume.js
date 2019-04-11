import React, { Component } from 'react';
import Section from './sections';
import content from './content';
import './resume.scss';

class Resume extends Component {
  render() {
    return (
      <main className="Resume">
        <div className="desktop">
          <div className="left">
            <Section.Header content={ content }/>
            <Section.Employment content={ content }/>
            <Section.Projects content={ content }/>
          </div>
          <div className="right">
            <Section.Contact content={ content }/>
            <Section.Summary content={ content }/>
            <Section.Education content={ content }/>
            <Section.Skills content={ content }/>
          </div>
        </div>
      </main>
    );
  }
}

export default Resume;