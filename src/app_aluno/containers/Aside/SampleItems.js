// React
import React from 'react';

// Components
import AsideList from 'app_aluno/components/AsideList/AsideList';
import School from 'common/Icon/School';
import Stars from 'common/Icon/Stars';

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
