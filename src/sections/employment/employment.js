import React, { Component } from 'react';
import './employment.scss';

class Employment extends Component {
  render() {
    const employmentItems = this.props.content.employment.map((employment, parentIndex) => {
      const dutyItems = employment.duties.map((duty, childIndex) => <p key={ `employmentChild_${ childIndex }` }>{ duty }</p>);

      return <li className="item" key={ `employmentParent_${ parentIndex }` }>
        <hgroup>
          <h3 className="employer">{ employment.employer }</h3>
          <h5 className="location">{ employment.location }</h5>
          <h5 className="dates">{ employment.dateStart} to { employment.dateEnd }</h5>
          <h4 className="position">{ employment.position }</h4>
        </hgroup>
        <div className="duties">{ dutyItems }</div>
      </li>
    });

    return (
      <section className="Employment">
        <h2 className="header">Employment</h2>
        <ol className="list">{ employmentItems }</ol>
      </section>
    );
  }
}

export default Employment;