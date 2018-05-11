// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.css';

// Components
import Input from './Input';

class InputLabel extends Component {
  render() {
    const { label, ...props } = this.props;
    let className = 'input-label__label caption-1 ';
    className += props.disabled ? 'dark-disabled' : 'dark-secondary';

    return (
      <label className="input-label">
        <Input {...props} />
        <p className={className}>
          { label }
        </p>
      </label>
    );
  }
}

InputLabel.propTypes = {
  label: PropTypes.string.isRequired
};

export default InputLabel;
