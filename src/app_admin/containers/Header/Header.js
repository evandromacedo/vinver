// React
import React, { Component } from 'react';

// Styles
import './Header.css';

// Components
import { Link } from 'react-router-dom';
import InputSearch from 'common/Input/InputSearch';
import IconAluno from 'common/Icon/People';
import Logo from 'common/Icon/Logo';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <div className="header-left">
            <a className="header-left__logo" href="/vinver">
              <Logo fill="cyan-fill" />
            </a>
          </div>
          <div className="header-center">
            <InputSearch placeholder="Buscar no Vinver por..." />
          </div>
          <div className="header-right">
            <Link to="/alunos/cadastrar" className="header-right__meta footnote-1 dark-secondary">
              Cadastrar aluno
              <span className="header-right__meta-icon">
                <IconAluno fill="cyan-fill" />
              </span>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
