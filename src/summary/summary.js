import React, { Component } from 'react';
import './summary.scss';

class Summary extends Component {
  render() {
    return (
      <section className="Summary">
        <h2>Summary</h2>
        <p>
          Mechanical engineer turned web developer with: 1.5 years in e-commerce as a front-end developer; 2 years in HVAC and 1.5 years in nuclear power generation as an engineer.
        </p>
        <p>
          I had a desire for generating creative solutions that exceeded the pace of the mechanical engineering industry, so the transition into the tech industry was only natural.  I'm a proven quick learner, natural problem solver, and obsessed with optimization (e.g., DRY code).
        </p>
      </section>
    );
  }
}

export default Summary;