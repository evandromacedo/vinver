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
import Exit from 'common/Icon/Exit';
import Flag from 'common/Icon/Flag';

class SideNav extends Component {
  render() {
    const { url } = this.props.match;

    return (
      <aside className="side-nav">
        <ul className="side-nav__nav-list">
          <li>
            <SideNavItem
              className="side-nav-item__aluno"
              title="Home"
              exact
              to="/"
              icon={<Home fill={url === '/' ? 'orange-fill' : 'grey-8'} />}
            />
          </li>
          <li>
            <SideNavItem
              className="side-nav-item__aluno"
              title="Perfil"
              to="/perfil"
              icon={<Person fill={url === '/perfil' ? 'orange-fill' : 'grey-8'} />}
            />
          </li>
          <li>
            <SideNavItem
              className="side-nav-item__aluno"
              title="Notificações"
              icon={<Notifications fill="grey-8" />}
              info="12"
            />
          </li>
          <li>
            <SideNavItem
              className="side-nav-item__aluno"
              title="Mensagens"
              to="/mensagens"
              icon={<Chat fill={url === '/mensagens' ? 'orange-fill' : 'grey-8'} />}
              info="4"
            />
          </li>
          <li>
            <SideNavItem
              className="side-nav-item__aluno"
              title="Metas"
              icon={<Book fill="grey-8" />}
            />
          </li>
          <li>
            <SideNavItem
              className="side-nav-item__aluno"
              title="Ranking"
              icon={<Flag fill="grey-8" />}
            />
          </li>
        </ul>

        <ul>
          <li>
            <SideNavItem
              className="side-nav-item__aluno"
              title="Sair"
              icon={<Exit fill="grey-8" />}
            />
          </li>
          <li>
            <Link to="#" className="side-nav__footer-link caption-2 light-secondary">
              Ajuda & FAQ
            </Link>
          </li>
          <li>
            <Link to="#" className="side-nav__footer-link caption-2 light-secondary">
              Sobre a plataforma
            </Link>
          </li>
          <li>
            <Link to="#" className="side-nav__footer-link caption-2 light-secondary">
              Termos de uso
            </Link>
          </li>
          <li>
            <Link to="#" className="side-nav__footer-link caption-2 light-secondary">
              Política de Privacidade
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}

export default withRouter(SideNav);
