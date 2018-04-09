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
      ...props
    } = this.props;

    let className = 'input-search';
    className += classes ? ` ${classes}` : '';

    return (
      <input
        className={className}
        ref={inputRef}
        {...props}
      />
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputRef: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => null,
  inputRef: () => null
};

export default Input;
