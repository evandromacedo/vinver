// React
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const { fill: fillColor } = this.props;
    const fill = fillColor ? `var(--${fillColor})` : '';

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path style={{ fill }} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    );
  }
}

export default Menu;
