import React, { Component } from 'react';
import Header from './header/header';
import Summary from './summary/summary';
import Skills from './skills/skills';
import Employment from './employment/employment';
import Education from './education/education';
import Projects from './projects/projects';
import './resume.scss';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <Header/>
        <Summary/>
        <Skills/>
        <Employment/>
        <Education/>
        <Projects/>
      </div>
    );
  }
}

export default Resume;