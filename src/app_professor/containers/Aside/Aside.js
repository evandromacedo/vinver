// React
import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// Styles
import './Aside.css';

// Components
import ShortProfile from 'app_professor/components/ShortProfile/ShortProfile';
import { Classes, Projetos, Destaque } from './SampleItems';

class Aside extends Component {
  getUserInfo() {
    return {
      usuario: {
        imagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
        nome: 'Luke Skywalker',
        titulo: 'Jedi Master'
      },
      dados: [
        {
          label: 'Total de classes',
          value: '8'
        },
        {
          label: 'Número de alunos',
          value: '320'
        },
        {
          label: 'Projetos disponíveis',
          value: '20'
        }
      ]
    };
  }

  render() {
    return (
      <aside className="aside">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <ShortProfile {...this.getUserInfo()} />
                <Classes />
                <Destaque />
                <Projetos />
              </Fragment>
            )}
          />
          <Route
            path="/perfil"
            render={() => (
              <Fragment>
                <Classes />
                <Destaque />
                <Projetos />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/metas"
            render={() => (
              <Fragment>
                <ShortProfile {...this.getUserInfo()} />
                <Classes />
                <Destaque />
                <Projetos />
              </Fragment>
            )}
          />
        </Switch>
      </aside>
    );
  }
}

export default withRouter(Aside);
