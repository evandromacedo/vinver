// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';

// Components
import AsideList from '../../components/AsideList/AsideList';
import School from '../../components/Icon/School';
import Stars from '../../components/Icon/Stars';
import Assignment from '../../components/Icon/Assignment';

const decorator = story => (
  <div style={{ width: '300px', margin: '20px' }}>
    { story() }
  </div>
);

const AsideListStory = storiesOf('AsideList', module)
  .addDecorator(decorator)
  .add('Classes', () => (
    <AsideList
      titulo="Classes"
      itens={[
        {
          materia: 'Mecânica',
          turma: 'Física · EM · 2º ano A',
          icon: <School fill="red-fill" />
        },
        {
          materia: 'Termodinâmica',
          turma: 'Física · EM · 1º ano C',
          icon: <School fill="grey-5" />
        },
        {
          materia: 'Eletromagnetismo',
          turma: 'Física · EM · 3º ano A',
          icon: <School fill="grey-5" />
        },
        {
          materia: 'Óptica',
          turma: 'Física · EM · 3º ano B',
          icon: <School fill="grey-5" />
        },
        {
          materia: 'Ondulatória e acústica',
          turma: 'Física · EM · 2º ano B',
          icon: <School fill="grey-5" />
        }
      ]}
      buttonBottom={{
        titulo: 'Todos as Classes'
      }}
    />
  ))
  .add('Destaque', () => (
    <AsideList
      titulo="Destaque"
      itens={[
        {
          materia: 'Mecânica',
          turma: 'Física · EM · 2º ano A',
          icon: <Stars fill="grey-5" />
        },
        {
          materia: 'Termodinâmica',
          turma: 'Física · EM · 1º ano C',
          icon: <Stars fill="grey-5" />
        },
        {
          materia: 'Eletromagnetismo',
          turma: 'Física · EM · 3º ano A',
          icon: <Stars fill="grey-5" />
        }
      ]}
    />
  ))
  .add('Projetos', () => (
    <AsideList
      titulo="Projetos"
      itens={[
        {
          materia: 'Física teórica',
          turma: 'Física · EM',
          icon: <Assignment fill="grey-5" />
        },
        {
          materia: 'Física nuclear',
          turma: 'Física · EM',
          icon: <Assignment fill="grey-5" />
        },
        {
          materia: 'Física dos materiais',
          turma: 'Física · EM',
          icon: <Assignment fill="grey-5" />
        },
        {
          materia: 'Astrofísica',
          turma: 'Física · EM',
          icon: <Assignment fill="grey-5" />
        },
        {
          materia: 'Biofísica',
          turma: 'Física · EM',
          icon: <Assignment fill="grey-5" />
        }
      ]}
    />
  ));

export { AsideListStory };
