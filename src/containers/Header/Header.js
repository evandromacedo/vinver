// React
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Styles
import './Header.css';

// Components
import logo from 'static/img/logo.png';
import InputSearch from 'components/Input/InputSearch';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <div className="header-left">
            <a className="header-left__logo" href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="header-center">
            <InputSearch placeholder="Buscar no Vinver por..." />
          </div>
          <div className="header-right">
            <a className="footnote-1 dark-secondary" href="#">
              Cadastrar Meta
              <span className="header-right__meta-icon">🗓</span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
