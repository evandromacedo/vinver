// React
import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Styles
import './Header.css';

// Components
import { Link } from 'react-router-dom';
import SideNav from 'app_admin/containers/SideNav/SideNav';
import InputSearch from 'common/Input/InputSearch';
import Logo from 'common/Icon/Logo';
import People from 'common/Icon/People';
import Menu from 'common/Icon/Menu';
import Search from 'common/Icon/Search';
import Apps from 'common/Icon/Apps';
import Close from 'common/Icon/Close';

class Header extends Component {
  state = {
    showNav: false
  };

  toggleNav = () => {
    this.setState({ showNav: !this.state.showNav });
  };

  renderHeaderDesktop() {
    return (
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
          <Link to="/alunos/cadastrar" className="header-right__aluno footnote-1 dark-secondary">
            Cadastrar aluno
            <span className="header-right__aluno-icon">
              <People fill="cyan-fill" />
            </span>
          </Link>
        </div>
      </div>
    );
  }

  renderHeaderMobile() {
    return (
      <Fragment>
        <div className="header-mobile-wrapper">
          <div onClick={this.toggleNav} className="cursor-pointer">
            {this.state.showNav ? <Close fill="grey-5" /> : <Menu fill="grey-5" />}
          </div>
          <a className="" href="/vinver">
            <Logo fill="cyan-fill" />
          </a>
          <div />
          <div className="cursor-pointer">
            <Search fill="grey-5" />
          </div>
          <div className="cursor-pointer">
            <Apps fill="grey-5" />
          </div>
          <Link to="/alunos/cadastrar">
            <People fill="cyan-fill" />
          </Link>
        </div>
        {this.state.showNav && <MobileNav toggleNav={this.toggleNav} />}
      </Fragment>
    );
  }

  render() {
    return (
      <header className="header">
        {this.renderHeaderDesktop()}
        {this.renderHeaderMobile()}
      </header>
    );
  }
}

export default Header;

class MobileNav extends Component {
  componentWillMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    const SideNavMobile = () => <SideNav toggleNav={this.props.toggleNav} />;

    return (
      <div className="header-mobile-nav">
        <Route path="/:active?" component={SideNavMobile} />
      </div>
    );
  }
}
