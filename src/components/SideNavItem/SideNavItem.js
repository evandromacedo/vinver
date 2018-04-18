// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './SideNavItem.css';

class SideNavItem extends Component {
  render() {
    const {
      className: classes,
      title,
      icon,
      info,
      active,
      linkTo,
    } = this.props;

    let className = 'side-nav-item';
    className += classes ? ` ${classes}` : '';
    className += active ? ' side-nav-item--active' : '';

    return (
      <a className={className} href={linkTo}>
        <span className="side-nav-item__icon">{ icon }</span>
        <span className="side-nav-item__title footnote-1 dark-secondary">
          { title }
          {info &&
            <span className="side-nav-item__title__info footnote-2 dark-disabled">
              { info }
            </span>
          }
        </span>
      </a>
    );
  }
}

SideNavItem.propTypes = {
  linkTo: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element.isRequired,
  info: PropTypes.string,
  active: PropTypes.bool
};

SideNavItem.defaultProps = {
  linkTo: '#',
  title: '',
  info: '',
  active: false
};

export default SideNavItem;
