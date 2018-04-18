// React
import React, { Component } from 'react';

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
    return (
      <aside className="side-nav">
        <ul className="side-nav__nav-list">
          <li><SideNavItem title="Home" icon={<Home fill="blue-fill" />} active /></li>
          <li><SideNavItem title="Perfil" icon={<Person fill="grey-7" />} /></li>
          <li><SideNavItem title="Notificações" icon={<Notifications fill="grey-7" />} info="12" /></li>
          <li><SideNavItem title="Mensagens" icon={<Chat fill="grey-7" />} info="4" /></li>
          <li><SideNavItem title="Metas" icon={<Book fill="grey-7" />} /></li>
          <li><SideNavItem title="Plataforma Vinver" icon={<Dashboard fill="grey-7" />} /></li>
        </ul>

        <ul>
          <li>
            <SideNavItem title="Sair" icon={<Exit fill="grey-7" />} />
          </li>
          <li>
            <a href="#/" className="side-nav__footer-link caption-2 dark-secondary">
              Ajuda & FAQ
            </a>
          </li>
          <li>
            <a href="#/" className="side-nav__footer-link caption-2 dark-secondary">
              Sobre a plataforma
            </a>
          </li>
          <li>
            <a href="#/" className="side-nav__footer-link caption-2 dark-secondary">
              Termos de uso
            </a>
          </li>
          <li>
            <a href="#/" className="side-nav__footer-link caption-2 dark-secondary">
              Política de Privacidade
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideNav;
