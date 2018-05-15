// React
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Styles
import './Perfil.css';

// Components
import Feed from 'app_aluno/containers/Feed/Feed';
import PerfilConquistas from './PerfilConquistas';
import PerfilMetas from './PerfilMetas';

class Perfil extends Component {
  render() {
    return (
      <div className="perfil">
        <PerfilConquistas conquistas={conquistas} />
        <PerfilMetas metas={metas} />
        <Route path="/:type?" component={Feed} />
      </div>
    );
  }
}

export default Perfil;

const conquistas = [
  {
    fill: 'blue-deep-shadow',
    shape: <p className="title-2">💎</p> // eslint-disable-line
  },
  {
    fill: 'yellow-deep-shadow',
    shape: <p className="title-2">🏅</p> // eslint-disable-line
  },
  {
    fill: 'cyan-fill',
    shape: <p className="title-2">🎯</p> // eslint-disable-line
  },
  {
    fill: 'red-fill',
    shape: <p className="title-2">❤️</p> // eslint-disable-line
  },
  {
    fill: 'green-deep-shadow',
    shape: <p className="title-2">🍀</p> // eslint-disable-line
  },
  {
    fill: 'pink-fill',
    shape: <p className="title-2">👑</p> // eslint-disable-line
  },
  {
    fill: 'grey-4',
    shape: <p className="title-2">🏆</p> // eslint-disable-line
  }
];

const metas = [
  {
    fill: 'red-fill',
    numero: 1
  },
  {
    fill: 'orange-fill',
    numero: 2
  },
  {
    fill: 'yellow-fill',
    numero: 3
  },
  {
    fill: 'green-fill',
    numero: 4
  },
  {
    fill: 'grey-7',
    numero: 5
  }
];
