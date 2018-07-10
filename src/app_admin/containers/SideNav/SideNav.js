// React
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Styles
import './SideNav.css';

// Components
import SideNavItem from 'common/SideNavItem/SideNavItem';
import Home from 'common/Icon/Home';
import People from 'common/Icon/People';
import Person from 'common/Icon/Person';
import School from 'common/Icon/School';
import Dashboard from 'common/Icon/Dashboard';
import Exit from 'common/Icon/Exit';
import FolderShared from 'common/Icon/FolderShared';

class SideNav extends Component {
  render() {
    const { url } = this.props.match;
    const { toggleNav } = this.props;

    return (
      <aside className="side-nav">
        <ul className="side-nav__nav-list">
          <li>
            {/* Enquanto não houver conteúdo no Home */}
            {/* <SideNavItem title="Home" exact to="/" icon={<Home fill={url === '/' ? 'cyan-fill' : 'grey-7'} />} /> */}
            <SideNavItem title="Home" icon={<Home fill="grey-7" />} />
          </li>
          <li>
            <SideNavItem
              title="Alunos"
              to="/alunos"
              toggleNav={toggleNav}
              icon={<People fill={url === '/alunos' ? 'cyan-fill' : 'grey-7'} />}
            />
          </li>
          <li>
            {/* Enquanto não houver conteúdo dos Professores */}
            {/* <SideNavItem
              title="Professores"
              to="/professores"
              icon={<Person fill={url === '/professores' ? 'cyan-fill' : 'grey-7'} />}
            /> */}
            <SideNavItem title="Professores" icon={<Person fill="grey-7" />} />
          </li>
          <li>
            <SideNavItem title="Turmas" icon={<FolderShared fill="grey-7" />} />
          </li>
          <li>
            <SideNavItem title="Classes" icon={<School fill="grey-7" />} />
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
