// React
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import './Aside.css';

// Components
import ShortProfile from 'app_aluno/components/ShortProfile/ShortProfile';
import { Classes, Destaque } from './SampleItems';

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

  render() {
    const { page } = this.props.match.params;

    return (
      <aside className="aside">
        {page !== 'perfil' &&
          <ShortProfile {...this.getUserInfo()} />
        }
        <Classes />
        <Destaque />
      </aside>
    );
  }
}

export default withRouter(Aside);
