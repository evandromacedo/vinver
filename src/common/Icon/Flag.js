// React
import React, { Component } from 'react';

class Flag extends Component {
  render() {
    const { fill: fillColor } = this.props;
    const fill = fillColor ? `var(--${fillColor})` : '';

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path style={{ fill }} d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
      </svg>
    );
  }
}

export default Flag;
