// React
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Styles
import './SideNav.css';

// Components
import SideNavItem from 'components/SideNavItem/SideNavItem';
import Home from 'components/Icon/Home';
import Person from 'components/Icon/Person';
import Notifications from 'components/Icon/Notifications';
import Chat from 'components/Icon/Chat';
import Book from 'components/Icon/Book';
import Dashboard from 'components/Icon/Dashboard';
import Exit from 'components/Icon/Exit';

class SideNav extends Component {
  render() {
    const { url } = this.props.match;

    return (
      <aside className="side-nav">
        <ul className="side-nav__nav-list">
          <li>
            <SideNavItem
              title="Home"
              to="/"
              icon={<Home fill={url === '/' ? 'blue-fill' : 'grey-7'} />}
            />
          </li>
          <li>
            <SideNavItem
              title="Perfil"
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
            <SideNavItem title="Metas" icon={<Book fill="grey-7" />} />
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
