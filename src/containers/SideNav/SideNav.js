// React
import React, { Component } from 'react';

// Styles
import './SideNav.css';

// Components
import SideNavItem from 'components/SideNavItem/SideNavItem';

class SideNav extends Component {
  render() {
    return (
      <aside className="side-nav">
        <ul className="side-nav__nav-list">
          <li><SideNavItem title="Home" icon="🏠" active /></li>
          <li><SideNavItem title="Perfil" icon="👤" /></li>
          <li><SideNavItem title="Notificações" icon="🛎" /></li>
          <li><SideNavItem title="Mensagens" icon="✉️" /></li>
          <li><SideNavItem title="Metas" icon="📈" /></li>
          <li><SideNavItem title="Plataforma Vinver" icon="📱" /></li>
        </ul>

        <ul>
          <li>
            <SideNavItem title="Sair" icon="🔚" />
          </li>
          <li>
            <a href="/" className="side-nav__footer-link caption-2 dark-secondary">
              Ajuda & FAQ
            </a>
          </li>
          <li>
            <a href="/" className="side-nav__footer-link caption-2 dark-secondary">
              Sobre a plataforma
            </a>
          </li>
          <li>
            <a href="/" className="side-nav__footer-link caption-2 dark-secondary">
              Termos de uso
            </a>
          </li>
          <li>
            <a href="/" className="side-nav__footer-link caption-2 dark-secondary">
              Política de Privacidade
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideNav;
