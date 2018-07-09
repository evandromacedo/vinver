// React
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Styles
import './SideNav.css';

// Components
import SideNavItem from 'common/SideNavItem/SideNavItem';
import Home from 'common/Icon/Home';
import Person from 'common/Icon/Person';
import Notifications from 'common/Icon/Notifications';
import Chat from 'common/Icon/Chat';
import Book from 'common/Icon/Book';
import Dashboard from 'common/Icon/Dashboard';
import Exit from 'common/Icon/Exit';

class SideNav extends Component {
  render() {
    const { url } = this.props.match;
    const { toggleNav } = this.props;

    return (
      <aside className="side-nav">
        <ul className="side-nav__nav-list">
          <li>
            <SideNavItem
              title="Home"
              toggleNav={toggleNav}
              exact
              to="/"
              icon={<Home fill={url === '/' ? 'blue-fill' : 'grey-7'} />}
            />
          </li>
          <li>
            <SideNavItem
              title="Perfil"
              toggleNav={toggleNav}
              to="/perfil"
              icon={<Person fill={url === '/perfil' ? 'blue-fill' : 'grey-7'} />}
            />
          </li>
          <li>
            <SideNavItem title="Notificações" icon={<Notifications fill="grey-7" />} info="12" />
          </li>
          <li>
            <SideNavItem title="Mensagens" icon={<Chat fill="grey-7" />} info="4" />
          </li>
          <li>
            <SideNavItem
              title="Metas"
              toggleNav={toggleNav}
              to="/metas"
              icon={<Book fill={url === '/metas' ? 'blue-fill' : 'grey-7'} />}
            />
          </li>
          <li>
            <SideNavItem title="Plataforma Vinver" icon={<Dashboard fill="grey-7" />} />
          </li>
        </ul>

        <ul>
          <li>
            <SideNavItem title="Sair" icon={<Exit fill="grey-7" />} />
          </li>
          <li>
            <Link to="#" className="side-nav__footer-link caption-2 dark-secondary">
              Ajuda & FAQ
            </Link>
          </li>
          <li>
            <Link to="#" className="side-nav__footer-link caption-2 dark-secondary">
              Sobre a plataforma
            </Link>
          </li>
          <li>
            <Link to="#" className="side-nav__footer-link caption-2 dark-secondary">
              Termos de uso
            </Link>
          </li>
          <li>
            <Link to="#" className="side-nav__footer-link caption-2 dark-secondary">
              Política de Privacidade
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}

export default withRouter(SideNav);
