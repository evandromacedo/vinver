// React
import React, { Component } from 'react';

class Send extends Component {
  render() {
    const { fill: fillColor } = this.props;
    const fill = fillColor ? `var(--${fillColor})` : '';

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path style={{ fill }} d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
      </svg>
    );
  }
}

export default Send;
