// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.css';

class InputLabel extends Component {
  render() {
    const { label, options, ...props } = this.props;
    let className = 'input-label__label caption-2 ';
    className += props.disabled ? 'dark-disabled' : 'dark-secondary';

    return (
      <label className="input-label">
        <select className="input">
          {options.map((options, index) => (
            <option value={options.value}>{options.label}</option>
          ))}
        </select>
        <p className={className}>
          { label }
        </p>
      </label>
    );
  }
}

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
};

export default InputLabel;
