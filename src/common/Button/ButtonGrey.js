// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Button.css';

class ButtonGrey extends Component {
  render() {
    const {
      className: classes,
      active,
      disabled,
      title,
      onClick,
      type
    } = this.props;

    let className = `button button-grey-${type}`;
    className += classes ? ` ${classes}` : '';
    className += active ? ` button-grey-${type}--active` : '';
    className += disabled ? ` button-grey-${type}--disabled` : '';

    return (
      <button
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
        <span className="caption-2">
          { title }
        </span>
      </button>
    );
  }
}

ButtonGrey.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

ButtonGrey.defaultProps = {
  active: false,
  disabled: false,
  type: '1',
  onClick: () => null
};

export default ButtonGrey;
