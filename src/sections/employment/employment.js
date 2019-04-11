import React, { Component } from 'react';
import './employment.scss';

class Employment extends Component {
  render() {
    const employmentItems = this.props.content.employment.map((employment, parentIndex) => {
      const dutyItems = employment.duties.map((duty, childIndex) => <p key={ `employmentChild_${ childIndex }` }>{ duty }</p>);

      return <li key={ `employmentParent_${ parentIndex }` }>
        <hgroup>
          <h3>{ employment.employer }</h3>
          <h5>{ employment.location }</h5>
          <h5>{ employment.dateStart} to { employment.dateEnd }</h5>
          <h4>{ employment.position }</h4>
        </hgroup>
        <div>{ dutyItems }</div>
      </li>
    });

    return (
      <section className="Employment">
        <h2>Employment</h2>
        <ol>{ employmentItems }</ol>
      </section>
    );
  }
}

export default Employment;