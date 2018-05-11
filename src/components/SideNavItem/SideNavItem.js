// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Styles
import './SideNavItem.css';

class SideNavItem extends Component {
  render() {
    const {
      className: classes,
      title,
      icon,
      info,
      to
    } = this.props;

    let className = 'side-nav-item';
    className += classes ? ` ${classes}` : '';

    return (
      <NavLink exact to={to} className={className} activeClassName="side-nav-item--active">
        <span className="side-nav-item__icon">{ icon }</span>
        <span className="side-nav-item__title footnote-1 dark-secondary">
          { title }
          {info &&
            <span className="side-nav-item__title__info footnote-2 dark-disabled">
              { info }
            </span>
          }
        </span>
      </NavLink>
    );
  }
}

SideNavItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element.isRequired,
  info: PropTypes.string,
  active: PropTypes.bool
};

SideNavItem.defaultProps = {
  to: '#',
  title: '',
  info: '',
  active: false
};

export default SideNavItem;
