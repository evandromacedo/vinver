// React
import React, { Component } from 'react';

class Book extends Component {
  render() {
    const { fill: fillColor } = this.props;
    const fill = fillColor ? `var(--${fillColor})` : '';

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path
          style={{ fill }}
          d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"
        />
      </svg>
    );
  }
}

export default Book;
