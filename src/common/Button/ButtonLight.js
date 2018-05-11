// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Button.css';

class ButtonLight extends Component {
  render() {
    const {
      className: classes,
      active,
      disabled,
      title,
      onClick,
      color
    } = this.props;

    let className = 'button button-light';
    className += classes ? ` ${classes}` : '';
    className += active ? ' button-light--active' : '';
    className += disabled ? ' button-light--disabled' : '';

    const buttonVars = {
      '--button-fill': `var(--${color}-fill)`,
      '--button-shadow': `var(--${color}-shadow)`,
    };

    return (
      <button
        onClick={onClick}
        className={className}
        disabled={disabled}
        style={buttonVars}
      >
        <span className="caption-2 light-primary">
          { title }
        </span>
      </button>
    );
  }
}

ButtonLight.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink']).isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

ButtonLight.defaultProps = {
  active: false,
  disabled: false,
  onClick: () => null
};

export default ButtonLight;
