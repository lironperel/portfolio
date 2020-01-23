import React, { Component } from 'react';
import WorksTabs from './WorksTabs';

export class MyWorks extends Component {
  render() {
    return (
      <div
        data-aos='fade-in'
        data-aos-offset='100'
        style={{ fontSize: '1.4rem' }}
      >
        <p id='aboutme-title'>
          My Works
          <br />
        </p>
        <WorksTabs />
      </div>
    );
  }
}

export default MyWorks;
