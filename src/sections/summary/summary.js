import React, { Component } from 'react';
import './summary.scss';

class Summary extends Component {
  render() {
    const summaryItems = this.props.content.summary.map((paragraph, index) => <p key={ `summary_${ index }` }>{ paragraph }</p>);

    return (
      <section className="Summary">
        <h2 className="header">Summary</h2>
        <blockquote className="content">{ summaryItems }</blockquote>
      </section>
    );
  }
}

export default Summary;