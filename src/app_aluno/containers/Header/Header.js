// React
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Styles
import './Header.css';

// Components
import InputSearch from 'common/Input/InputSearch';
import Logo from 'common/Icon/Logo';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <div className="header-left">
            <a className="header-left__logo" href="http://evandromacedo.com/vinver/">
              <Logo fill="orange-fill" />
            </a>
          </div>
          <div className="header-center">
            <InputSearch className="input-search__aluno" placeholder="Buscar no Vinver por..." />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
