import React, { Component } from 'react';
import Section from './sections';
import content from './content';
import './resume.scss';

export const LAYOUT = [
  {order: 1, width: 100, content: Section.Header},
  {}
]

class Resume extends Component {
  render() {
    return (
      // <main className="Resume">
      //   <div className="desktop">
      //     <div className="left">
      //       <Section.Header content={ content }/>
      //       <Section.Employment content={ content }/>
      //       <Section.Projects content={ content }/>
      //     </div>
      //     <div className="right">
      //       <Section.Contact content={ content }/>
      //       <Section.Summary content={ content }/>
      //       <Section.Education content={ content }/>
      //       <Section.Skills content={ content }/>
      //     </div>
      //   </div>
      //   <div className="mobile">
      //     <Section.Header content={ content }/>
      //     <Section.Contact content={ content }/>
      //     <Section.Summary content={ content }/>
      //     <Section.Employment content={ content }/>
      //     <Section.Projects content={ content }/>
      //     <Section.Skills content={ content }/>
      //     <Section.Education content={ content }/>
      //   </div>
      // </main>
      <div className="root">
        <div className='left left-top'>
          <div className='one'>1.Header</div>
        </div>
        <div className='right right-top'>
          <div className='three'>3.Contact</div>
          <div className='four'>4.Summary</div>
        </div>
        <div className='left left-bottom'>
         <div className='two'>2.Employment & Projects</div>
        </div>
        <div className='right right-bottom'>
          <div className='five'>5.Education</div>
          <div className='six'>6.Skills</div>
        </div>
      </div>
    );
  }
}

export default Resume;