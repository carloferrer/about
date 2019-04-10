import React, { Component } from 'react';
import content from '../../content';
import './summary.scss';

class Summary extends Component {
  constructor() {
    super();

    this.state = {
      summary: content.summary,
    };
  }

  render() {
    const summaryItems = this.state.summary.map((paragraph) => <p>{paragraph}</p>);

    return (
      <section className="Summary">
        <h2>Summary</h2>
        <blockquote>{summaryItems}</blockquote>
      </section>
    );
  }
}

export default Summary;