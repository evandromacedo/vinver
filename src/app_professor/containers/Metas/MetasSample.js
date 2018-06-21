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
    descricaoLonga:
      "The chancellor's machinations culminated in the execution of Order 66, a secret protocol that turned the Jedi's clone soldiers against them, leading to an all but total extermination of the Jedi Order. With the Jedi eliminated, Sidious supplanted a thousand years of democracy with a new government known as the Galactic Empire. In addition, Sidious succeeded in turning Anakin Skywalker—the prophesied Chosen One whom the Jedi believed would bring balance to the Force by destroying the Sith—to the dark side and anointed him Darth Vader.",
    regras: [
      {
        titulo: 'Ancient times',
        descricao:
          'The Jedi Order was founded on Ahch-To at least six thousand years prior to the Battle of Yavin by the Prime Jedi, the first Jedi of the Order.'
      },
      {
        titulo: 'Keepers of the peace',
        descricao:
          'It was after these events that the Galactic Republic was formed and ushered in a new era of democracy, peace, and prosperity.'
      },
      {
        titulo: 'Separatist Crisis',
        descricao:
          'Having broken all ties to the Jedi Order, secretly replacing Maul as Sidious\' apprentice, Dooku was believed to be a mere "political idealist" by his peers at the Jedi Order.'
      }
    ],
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
    descricaoLonga:
      "The chancellor's machinations culminated in the execution of Order 66, a secret protocol that turned the Jedi's clone soldiers against them, leading to an all but total extermination of the Jedi Order. With the Jedi eliminated, Sidious supplanted a thousand years of democracy with a new government known as the Galactic Empire. In addition, Sidious succeeded in turning Anakin Skywalker—the prophesied Chosen One whom the Jedi believed would bring balance to the Force by destroying the Sith—to the dark side and anointed him Darth Vader.",
    regras: [
      {
        titulo: 'Ancient times',
        descricao:
          'The Jedi Order was founded on Ahch-To at least six thousand years prior to the Battle of Yavin by the Prime Jedi, the first Jedi of the Order.'
      },
      {
        titulo: 'Keepers of the peace',
        descricao:
          'It was after these events that the Galactic Republic was formed and ushered in a new era of democracy, peace, and prosperity.'
      },
      {
        titulo: 'Separatist Crisis',
        descricao:
          'Having broken all ties to the Jedi Order, secretly replacing Maul as Sidious\' apprentice, Dooku was believed to be a mere "political idealist" by his peers at the Jedi Order.'
      }
    ],
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
    descricaoLonga:
      "The chancellor's machinations culminated in the execution of Order 66, a secret protocol that turned the Jedi's clone soldiers against them, leading to an all but total extermination of the Jedi Order. With the Jedi eliminated, Sidious supplanted a thousand years of democracy with a new government known as the Galactic Empire. In addition, Sidious succeeded in turning Anakin Skywalker—the prophesied Chosen One whom the Jedi believed would bring balance to the Force by destroying the Sith—to the dark side and anointed him Darth Vader.",
    regras: [
      {
        titulo: 'Ancient times',
        descricao:
          'The Jedi Order was founded on Ahch-To at least six thousand years prior to the Battle of Yavin by the Prime Jedi, the first Jedi of the Order.'
      },
      {
        titulo: 'Keepers of the peace',
        descricao:
          'It was after these events that the Galactic Republic was formed and ushered in a new era of democracy, peace, and prosperity.'
      },
      {
        titulo: 'Separatist Crisis',
        descricao:
          'Having broken all ties to the Jedi Order, secretly replacing Maul as Sidious\' apprentice, Dooku was believed to be a mere "political idealist" by his peers at the Jedi Order.'
      }
    ],
    cor: 'yellow'
  },
  {
    numero: '4',
    periodo: 'Anual',
    materia: 'Física',
    turma: 'Ensino Médio',
    dias: { inicio: '1', fim: '30' },
    descricao: 'Study the Force: Continue to experience, explore, and understand the Force better.',
    descricaoLonga:
      "The chancellor's machinations culminated in the execution of Order 66, a secret protocol that turned the Jedi's clone soldiers against them, leading to an all but total extermination of the Jedi Order. With the Jedi eliminated, Sidious supplanted a thousand years of democracy with a new government known as the Galactic Empire. In addition, Sidious succeeded in turning Anakin Skywalker—the prophesied Chosen One whom the Jedi believed would bring balance to the Force by destroying the Sith—to the dark side and anointed him Darth Vader.",
    regras: [
      {
        titulo: 'Ancient times',
        descricao:
          'The Jedi Order was founded on Ahch-To at least six thousand years prior to the Battle of Yavin by the Prime Jedi, the first Jedi of the Order.'
      },
      {
        titulo: 'Keepers of the peace',
        descricao:
          'It was after these events that the Galactic Republic was formed and ushered in a new era of democracy, peace, and prosperity.'
      },
      {
        titulo: 'Separatist Crisis',
        descricao:
          'Having broken all ties to the Jedi Order, secretly replacing Maul as Sidious\' apprentice, Dooku was believed to be a mere "political idealist" by his peers at the Jedi Order.'
      }
    ],
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
