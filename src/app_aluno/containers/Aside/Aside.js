// React
import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// Styles
import './Aside.css';

// Components
import ShortProfile from 'app_aluno/components/ShortProfile/ShortProfile';
import { Classes, Destaque, RedesSociais } from './SampleItems';
import Habilidades from './Habilidades';

class Aside extends Component {
  getUserInfo() {
    return {
      usuario: {
        imagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
        nome: 'Luke Skywalker',
        titulo: 'Padawan'
      },
      dados: [
        {
          label: 'Nível',
          value: '12',
        },
        {
          label: 'Ranking',
          value: '#64',
        }
      ]
    };
  }

  getHabilidades() {
    return [
      {
        fill: 'red-fill',
        shape: <p className="title-2">🎲</p> // eslint-disable-line
      },
      {
        fill: 'orange-fill',
        shape: <p className="title-2">🌎</p> // eslint-disable-line
      },
      {
        fill: 'yellow-fill',
        shape: <p className="title-2">🏀</p> // eslint-disable-line
      },
      {
        fill: 'green-fill',
        shape: <p className="title-2">🎸</p> // eslint-disable-line
      },
      {
        fill: 'cyan-fill',
        shape: <p className="title-2">🥊</p> // eslint-disable-line
      },
      {
        fill: 'blue-fill',
        shape: <p className="title-2">🏹</p> // eslint-disable-line
      },
      {
        fill: 'purple-fill',
        shape: <p className="title-2">🎱</p> // eslint-disable-line
      },
      {
        fill: 'pink-fill',
        shape: <p className="title-2">⭐️</p> // eslint-disable-line
      }
    ];
  }

  render() {
    return (
      <aside className="aside">
        <Switch>
          <Route exact path="/" render={() => (
            <Fragment>
              <ShortProfile {...this.getUserInfo()} />
              <Classes />
              <Destaque />
            </Fragment>
          )} />
          <Route path="/perfil" render={() => (
            <Fragment>
              <Habilidades habilidades={this.getHabilidades()}/>
              <RedesSociais />
            </Fragment>
          )} />
        </Switch>
      </aside>
    );
  }
}

export default withRouter(Aside);
