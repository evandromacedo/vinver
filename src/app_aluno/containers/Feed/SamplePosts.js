// React
import React, { Fragment } from 'react';

import Post from 'app_aluno/components/Post/Post';

const allPosts = [
  {
    classe: {
      materia: 'Mecânica',
      turma: 'Física - EM - 2º ano A'
    },
    usuario: {
      imagem: 'https://topicimages.mrowl.com/large/jack_attack/the_force_is_strong/characters/prequeltrilogy/obi_wankenobi__1.jpg',
      nome: 'Obi-Wan Kenobi',
      id: '@benkenobi'
    },
    texto: 'The Jedi Code was a set of rules that governed the behavior of the Jedi Order. It taught its followers to not give in to feelings of anger toward other lifeforms, which would help them resist fear and prevent them from falling to the dark side of the Force. Amongst other dictates, the Jedi Code forbade Jedi Knights and Jedi Masters from taking on more than one Padawan at a given time; and forbade Jedi from forming attachments, such as marriage, and other specific, individual bonds, such as family and romantic love. Few understood that this practice of non-attachment did not mean the Jedi were strangers to compassion when, in fact, they believed that all lives were precious. The code also forbade the Jedi from killing unarmed opponents as well as seeking revenge.',
    curtidas: 128,
    comentarios: 32
  },
  {
    classe: {
      materia: 'Mecânica',
      turma: 'Física - EM - 2º ano A'
    },
    usuario: {
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/7/74/Anakin-Jedi.jpg',
      nome: 'Anakin Skywalker',
      id: '@skywalker'
    },
    texto: 'A group of at least 200 Jedi, including Jedi Mace Windu, Coleman Trebor, Eeth Koth, Kit Fisto, Plo Koon, Even Piell, Shaak Ti, Luminara Unduli, Aayla Secura, Barriss Offee, and Ki-Adi-Mundi were tasked with rescuing Obi-Wan Kenobi and investigating the reports of Separatist warmongering on Geonosis by the Jedi High Council. The Zilkin Meebur Gascon participated in devising a strategy for the battle and inspecting maps to advise Republic forces.',
    curtidas: 56,
    comentarios: 28
  },
  {
    classe: {
      materia: 'Mecânica',
      turma: 'Física - EM - 2º ano A'
    },
    usuario: {
      imagem: 'https://cdn.movieweb.com/img.news/NExUmTtbPVqVBF_1_1.jpg',
      nome: 'Mace Windu',
      id: '@windu.m'
    },
    texto: 'The Jedi Order was an ancient, monastic peacekeeping organization united in their observance of the Force, specifically the light side. A noble order of protectors noted for their lightsabers and ability to tap into the power of the Force, the Jedi served as guardians of peace and justice in the Galactic Republic for over a thousand generations. Like the Republic, the Order was headquartered on Coruscant—the political center of the galaxy—where thousands of Jedi Knights studied, trained and lived within the walls of the Jedi Temple, which additionally housed the Jedi Archives and by extension the Order\'s accumulated knowledge. The Jedi High Council, the highest governing body of the Order, consisted of twelve Jedi Masters including the Grand Master and the Master of the Order. The training of Jedi was one of the most important traditions in the history of the Order, with Padawans learning the ways of the Force and the Jedi Code from the more experienced Jedi who held the rank of Knight or Master. Over the millennia, the Jedi fought against the Sith—another ancient monastic order, but one whose members harnessed the power of the dark side—until the latter was all but destroyed due to internal fighting approximately one thousand years before the Invasion of Naboo. Unknown to the Jedi at the time, the Sith survived and—governed by the Rule of Two—conspired to gain absolute power over the galaxy by overthrowing both the Jedi and the Republic. Thereafter, the Jedi served, strictly, as peacekeepers by maintaining law and order during a thousand years of peace under the rule of the Galactic Senate.',
    curtidas: 84,
    comentarios: 16
  },
  {
    classe: {
      materia: 'Mecânica',
      turma: 'Física - EM - 2º ano A'
    },
    usuario: {
      imagem: 'https://pbs.twimg.com/profile_images/679543350630825984/fRn2iH-l.png',
      nome: 'Poe Dameron',
      id: '@x-wing'
    },
    texto: 'The most prominent lightsaber-oriented combat styles were the seven forms of the Jedi Order. The various combat forms owed their unique focuses and methods to the eras in which they were created, as they were oftentimes developed to answer a new generation of weapons technology.',
    curtidas: 16,
    comentarios: 2
  },
];

const ownPosts = [
  {
    classe: {
      materia: 'Mecânica',
      turma: 'Física - EM - 2º ano A'
    },
    usuario: {
      imagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
      nome: 'Obi-Wan Kenobi',
      id: '@benkenobi'
    },
    texto: 'The Jedi Code was a set of rules that governed the behavior of the Jedi Order. It taught its followers to not give in to feelings of anger toward other lifeforms, which would help them resist fear and prevent them from falling to the dark side of the Force. Amongst other dictates, the Jedi Code forbade Jedi Knights and Jedi Masters from taking on more than one Padawan at a given time; and forbade Jedi from forming attachments, such as marriage, and other specific, individual bonds, such as family and romantic love. Few understood that this practice of non-attachment did not mean the Jedi were strangers to compassion when, in fact, they believed that all lives were precious. The code also forbade the Jedi from killing unarmed opponents as well as seeking revenge.',
    curtidas: 50,
    comentarios: 6
  },
  {
    classe: {
      materia: 'Mecânica',
      turma: 'Física - EM - 2º ano A'
    },
    usuario: {
      imagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
      nome: 'Obi-Wan Kenobi',
      id: '@benkenobi'
    },
    texto: 'The Jedi Order was an ancient, monastic peacekeeping organization united in their observance of the Force, specifically the light side. A noble order of protectors noted for their lightsabers and ability to tap into the power of the Force, the Jedi served as guardians of peace and justice in the Galactic Republic for over a thousand generations. Like the Republic, the Order was headquartered on Coruscant—the political center of the galaxy—where thousands of Jedi Knights studied, trained and lived within the walls of the Jedi Temple, which additionally housed the Jedi Archives and by extension the Order\'s accumulated knowledge. The Jedi High Council, the highest governing body of the Order, consisted of twelve Jedi Masters including the Grand Master and the Master of the Order. The training of Jedi was one of the most important traditions in the history of the Order, with Padawans learning the ways of the Force and the Jedi Code from the more experienced Jedi who held the rank of Knight or Master. Over the millennia, the Jedi fought against the Sith—another ancient monastic order, but one whose members harnessed the power of the dark side—until the latter was all but destroyed due to internal fighting approximately one thousand years before the Invasion of Naboo. Unknown to the Jedi at the time, the Sith survived and—governed by the Rule of Two—conspired to gain absolute power over the galaxy by overthrowing both the Jedi and the Republic. Thereafter, the Jedi served, strictly, as peacekeepers by maintaining law and order during a thousand years of peace under the rule of the Galactic Senate.',
    curtidas: 26,
    comentarios: 2
  },
  {
    classe: {
      materia: 'Mecânica',
      turma: 'Física - EM - 2º ano A'
    },
    usuario: {
      imagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
      nome: 'Obi-Wan Kenobi',
      id: '@benkenobi'
    },
    texto: 'The Jedi Order was an ancient, monastic peacekeeping organization united in their observance of the Force, specifically the light side. A noble order of protectors noted for their lightsabers and ability to tap into the power of the Force, the Jedi served as guardians of peace and justice in the Galactic Republic for over a thousand generations. Like the Republic, the Order was headquartered on Coruscant—the political center of the galaxy—where thousands of Jedi Knights studied, trained and lived within the walls of the Jedi Temple, which additionally housed the Jedi Archives and by extension the Order\'s accumulated knowledge. The Jedi High Council, the highest governing body of the Order, consisted of twelve Jedi Masters including the Grand Master and the Master of the Order. The training of Jedi was one of the most important traditions in the history of the Order, with Padawans learning the ways of the Force and the Jedi Code from the more experienced Jedi who held the rank of Knight or Master. Over the millennia, the Jedi fought against the Sith—another ancient monastic order, but one whose members harnessed the power of the dark side—until the latter was all but destroyed due to internal fighting approximately one thousand years before the Invasion of Naboo. Unknown to the Jedi at the time, the Sith survived and—governed by the Rule of Two—conspired to gain absolute power over the galaxy by overthrowing both the Jedi and the Republic. Thereafter, the Jedi served, strictly, as peacekeepers by maintaining law and order during a thousand years of peace under the rule of the Galactic Senate.',
    curtidas: 128,
    comentarios: 32
  }
]

const SamplePosts = ({ type }) => {
  const posts = type === 'perfil' ? ownPosts : allPosts;

  return (
    <Fragment>
      {posts.map((post, index) => (
        <Post
          key={index}
          classe={post.classe}
          usuario={post.usuario}
          texto={post.texto}
          curtidas={post.curtidas}
          comentarios={post.comentarios}
        />
      ))}
    </Fragment>
  )
}

export default SamplePosts;
