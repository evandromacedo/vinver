// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.css';

class Input extends Component {
  render() {
    const {
      className: classes,
      inputRef,
      light,
      disabled,
      hasError,
      ...props
    } = this.props;

    let className = 'input';
    className += classes ? ` ${classes}` : '';
    className += light ? ' input--light' : '';
    className += disabled ? ' input--disabled' : '';
    className += hasError ? ' input--has-error' : '';

    return (
      <input
        className={className}
        ref={inputRef}
        disabled={disabled}
        {...props}
      />
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.func,
  light: PropTypes.bool,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => null,
  inputRef: () => null,
  light: false,
  disabled: false,
  hasError: false
};

export default Input;
