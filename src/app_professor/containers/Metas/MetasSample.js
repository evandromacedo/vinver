import React from 'react';
import Meta from 'app_professor/components/Meta/Meta';

export const metasSample = [
  {
    numero: '1',
    periodo: 'Semanal',
    materia: 'Física',
    turma: 'Ensino Médio',
    dias: { inicio: '68', fim: '96' },
    descricao: 'Train dillegently: Be capable of fulfilling the goals and course of the Jedi.',
    cor: 'red'
  },
  {
    numero: '2',
    periodo: 'Mensal',
    materia: 'Física',
    turma: 'Ensino Médio',
    dias: { inicio: '1', fim: '30' },
    descricao:
      'Provide support: A Jedi does not always serve directly. We must take a backseat at times and provide support for those frontrunners.',
    cor: 'orange'
  },
  {
    numero: '3',
    periodo: 'Semestral',
    materia: 'Física',
    turma: 'Ensino Médio',
    dias: { inicio: '1', fim: '30' },
    descricao:
      'Render aid: A Jedi is not always needed physically. Sometimes what is needed is our time, caring, and/or supplies.',
    cor: 'yellow'
  },
  {
    numero: '4',
    periodo: 'Anual',
    materia: 'Física',
    turma: 'Ensino Médio',
    dias: { inicio: '1', fim: '30' },
    descricao: 'Study the Force: Continue to experience, explore, and understand the Force better.',
    cor: 'green'
  }
];

export const MetasSampleComponent = () => (
  <div className="metas-list">
    <Meta
      type="small"
      numero="1"
      periodo="Semanal"
      materia="Física"
      turma="Ensino Médio"
      dias={{ inicio: '68', fim: '96' }}
      descricao="Train dillegently: Be capable of fulfilling the goals and course of the Jedi."
      cor="red"
    />
    <Meta
      type="small"
      numero="2"
      periodo="Mensal"
      materia="Física"
      turma="Ensino Médio"
      dias={{ inicio: '1', fim: '30' }}
      descricao="Provide support: A Jedi does not always serve directly. We must take a backseat at times and provide support for those frontrunners."
      cor="orange"
    />
    <Meta
      type="small"
      numero="3"
      periodo="Semestral"
      materia="Física"
      turma="Ensino Médio"
      dias={{ inicio: '1', fim: '30' }}
      descricao="Render aid: A Jedi is not always needed physically. Sometimes what is needed is our time, caring, and/or supplies."
      cor="yellow"
    />
    <Meta
      type="small"
      numero="4"
      periodo="Anual"
      materia="Física"
      turma="Ensino Médio"
      dias={{ inicio: '1', fim: '30' }}
      descricao="Study the Force: Continue to experience, explore, and understand the Force better."
      cor="green"
    />
  </div>
);
