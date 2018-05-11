// React
import React, { Component } from 'react';

class QuestionAnswer extends Component {
  render() {
    const { fill: fillColor } = this.props;
    const fill = fillColor ? `var(--${fillColor})` : '';

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path
          style={{ fill }}
          d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
        />
      </svg>
    );
  }
}

export default QuestionAnswer;
