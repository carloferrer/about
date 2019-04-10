import React, { Component } from 'react';
import content from '../../content';
import './employment.scss';

class Employment extends Component {
  constructor() {
    super();

    this.state = {
      employment: content.employment,
    };
  }

  render() {
    const employmentItems = this.state.employment.map((employment) => <li>
      <hgroup>
        <h3>{employment.employer}</h3>
        <h5>{employment.location}</h5>
        <h5>{employment.dateStart} to {employment.dateEnd}</h5>
        <h4>{employment.position}</h4>
      </hgroup>
      <p>{employment.duties}</p>
    </li>);

    return (
      <section className="Employment">
        <h2>Employment</h2>
        <ol>{employmentItems}</ol>
      </section>
    );
  }
}

export default Employment;