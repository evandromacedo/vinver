// React
import React, { Component } from 'react';

// Styles
import './Aside.css';

// Components
import ShortProfile from '../../components/ShortProfile/ShortProfile';
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
          value: '8',
        },
        {
          label: 'Número de alunos',
          value: '320',
        },
        {
          label: 'Projetos disponíveis',
          value: '20',
        }
      ]
    };
  }

  render() {
    return (
      <aside className="aside">
        <ShortProfile {...this.getUserInfo()} />
        <Classes />
        <Projetos />
        <Destaque />
      </aside>
    );
  }
}

export default Aside;
