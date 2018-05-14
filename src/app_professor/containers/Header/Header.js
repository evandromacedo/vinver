// React
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Styles
import './Header.css';

// Components
import InputSearch from 'common/Input/InputSearch';
import IconBook from 'common/Icon/Book';
import Logo from 'common/Icon/Logo';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <div className="header-left">
            <a className="header-left__logo" href="http://evandromacedo.com/vinver/">
              <Logo fill="blue-fill" />
            </a>
          </div>
          <div className="header-center">
            <InputSearch placeholder="Buscar no Vinver por..." />
          </div>
          <div className="header-right">
            <a className="header-right__meta footnote-1 dark-secondary" href="#/">
              Cadastrar Meta
              <span className="header-right__meta-icon">
                <IconBook fill="blue-fill" />
              </span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
