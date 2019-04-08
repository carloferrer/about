import React, { Component } from 'react';
import './employment.scss';

class Employment extends Component {
  render() {
    const employmentList = [
      {
        employer: 'GroupBy Inc.',
        position: 'StoreFront Developer',
        location: 'Toronto, ON',
        dateStart: 'Feb 2019',
        dateEnd: 'Apr 2019',
        duties: 'StoreFront development and stuff I guess.',
      },
      {
        employer: 'GroupBy Inc.',
        position: 'Front End Consultant',
        location: 'Toronto, ON',
        dateStart: 'Nov 2017',
        dateEnd: 'Feb 2019',
        duties: 'Front end stuff.',
      },
      {
        employer: 'Consolidated Energy Solutions Inc.',
        position: 'Design Engineer (EIT)',
        location: 'Toronto, ON',
        dateStart: 'Jul 2017',
        dateEnd: 'Sep 2015',
        duties: 'HVAC systems design and whatnot.',
      },
      {
        employer: 'GE-Hitachi Nuclear Energy Canada Inc.',
        position: 'Mechanical Engineering Intern',
        location: 'Peterborough, ON',
        dateStart: 'May 2013',
        dateEnd: 'Aug 2014',
        duties: 'Mechanical design and analysis for nuclear stuff.',
      }
    ];

    const employmentNode = employmentList.map((employment) => <li>
      <hgroup>
        <h3>{employment.employer}</h3>
        <h5>{employment.location}</h5>
        <h5>{employment.dateStart} to {employment.dateEnd}</h5>
        <h4>{employment.position}</h4>
        <p>{employment.duties}</p>
      </hgroup>
    </li>);

    return (
      <section className="Employment">
        <ol>
          {employmentNode}
        </ol>
      </section>
    );
  }
}

export default Employment;