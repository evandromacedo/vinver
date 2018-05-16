// React
import React from 'react';

// Components
import AsideList from 'app_aluno/components/AsideList/AsideList';
import School from 'common/Icon/School';
import Stars from 'common/Icon/Stars';
import AsideHabilidades from 'app_aluno/components/AsideHabilidades/AsideHabilidades';
import AsideProfile from 'app_aluno/components/AsideProfile/AsideProfile';
import AsideCanais from 'app_aluno/components/AsideCanais/AsideCanais';

export const Classes = () => (
  <AsideList
    titulo="Classes"
    itens={[
      {
        materia: 'Mecânica',
        turma: 'Física · EM · 2º ano A',
        icon: <School fill="orange-fill" />
      },
      {
        materia: 'Termodinâmica',
        turma: 'Física · EM · 1º ano C',
        icon: <School fill="grey-6" />
      },
      {
        materia: 'Eletromagnetismo',
        turma: 'Física · EM · 3º ano A',
        icon: <School fill="grey-6" />
      },
      {
        materia: 'Óptica',
        turma: 'Física · EM · 3º ano B',
        icon: <School fill="grey-6" />
      },
      {
        materia: 'Ondulatória e acústica',
        turma: 'Física · EM · 2º ano B',
        icon: <School fill="grey-6" />
      }
    ]}
    buttonBottom={{
      titulo: 'Todos as Classes'
    }}
  />
);

export const Destaque = () => (
  <AsideList
    titulo="Destaque"
    itens={[
      {
        materia: 'Mecânica',
        turma: 'Física · EM · 2º ano A',
        icon: <Stars fill="grey-6" />
      },
      {
        materia: 'Termodinâmica',
        turma: 'Física · EM · 1º ano C',
        icon: <Stars fill="grey-6" />
      },
      {
        materia: 'Eletromagnetismo',
        turma: 'Física · EM · 3º ano A',
        icon: <Stars fill="grey-6" />
      }
    ]}
  />
);

export const RedesSociais = () => (
  <AsideList
    titulo="Redes Sociais"
    itens={[
      {
        materia: 'Tumblr',
        turma: '@luke.skywalker',
        icon: <p className="title-2 light-primary">ⓣ</p> // eslint-disable-line
      },
      {
        materia: 'Twitter',
        turma: '@luke.skywalker',
        icon: <p className="title-2 light-primary">Ⓣ</p> // eslint-disable-line
      },
      {
        materia: 'Instagram',
        turma: '@luke.skywalker',
        icon: <p className="title-2 light-primary">ⓘ</p> // eslint-disable-line
      },
      {
        materia: 'Facebook',
        turma: '@luke.skywalker',
        icon: <p className="title-2 light-primary">ⓕ</p> // eslint-disable-line
      },
      {
        materia: 'Spotify',
        turma: '@luke.skywalker',
        icon: <p className="title-2 light-primary">ⓢ</p> // eslint-disable-line
      }
    ]}
  />
);

export const Habilidades = () => (
  <AsideHabilidades
    habilidades={[
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
    ]}
  />
);

export const ShortProfile = () => {
  const userInfo = {
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

  return <AsideProfile {...userInfo} />
};

export const Canais = () => (
  <AsideCanais
    canais={[
      {
        fill: 'grey-6',
        title: 'general',
        lastMessage: '@x-wing · An ensuing pearing',
        hasMessage: true
      },
      {
        fill: 'red-fill',
        title: 'jeditempleguard',
        lastMessage: '@x-wing · The respective Jedi who made',
        hasMessage: true
      },
      {
        fill: 'green-fill',
        title: 'coruscant-temple',
        lastMessage: '@x-wing · At different times the galaxy',
        hasMessage: true
      },
      {
        fill: 'blue-fill',
        title: 'jedihighcouncil',
        lastMessage: '@x-wing · Unknown to the Jedi powers'
      },
      {
        fill: 'pink-fill',
        title: 'off',
        lastMessage: '@x-wing · From the remmants of the guilds'
      }
    ]}
  />
);
