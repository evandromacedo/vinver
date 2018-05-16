// React
import React from 'react';
import shortid from 'shortid';

// Components
import ChatMensagem from 'app_aluno/components/ChatMensagem/ChatMensagem';

export const Mensagens = () => (
  mensagensMock.map((mensagem) => (
    <ChatMensagem
      key={shortid.generate()}
      urlImagem={mensagem.urlImagem}
      user={mensagem.user}
      mensagem={mensagem.mensagem}
    />
  ))
);

const mensagensMock = [
  {
    urlImagem: 'https://topicimages.mrowl.com/large/jack_attack/the_force_is_strong/characters/prequeltrilogy/obi_wankenobi__1.jpg',
    user: 'benkenobi',
    mensagem: 'Upon entering the system, the fleet of Jedi starfighters were fired upon by Anti-orbital cannons, taking several casualties. Mace Windu and Luminara Unduli slipped past the firing range of the cannons and piloted TX-130S fighter tanks, and employed communications jamming to stop any CIS forces from calling for reinforcements.'
  },
  {
    urlImagem: 'https://topicimages.mrowl.com/large/jack_attack/the_force_is_strong/characters/prequeltrilogy/obi_wankenobi__1.jpg',
    user: 'benkenobi',
    mensagem: 'The training of Jedi was one of the most important traditions in the history of the Order, with Padawans learning the ways of the Force and the Jedi Code from the more experienced Jedi who held the rank of Knight or Master.'
  },
  {
    urlImagem: 'https://topicimages.mrowl.com/large/jack_attack/the_force_is_strong/characters/prequeltrilogy/obi_wankenobi__1.jpg',
    user: 'benkenobi',
    mensagem: 'Over the millennia, the Jedi fought against the Sith—another ancient monastic order, but one whose members harnessed the power of the dark side—until the latter was all but destroyed due to internal fighting approximately one thousand years before the Invasion of Naboo.'
  },
  {
    urlImagem: 'https://topicimages.mrowl.com/large/jack_attack/the_force_is_strong/characters/prequeltrilogy/obi_wankenobi__1.jpg',
    user: 'benkenobi',
    mensagem: 'Unknown to the Jedi at the time, the Sith survived and—governed by the Rule of Two—conspired to gain absolute power over the galaxy by overthrowing both the Jedi and the Republic.'
  },
  {
    urlImagem: 'https://topicimages.mrowl.com/large/jack_attack/the_force_is_strong/characters/prequeltrilogy/obi_wankenobi__1.jpg',
    user: 'benkenobi',
    mensagem: 'Upon entering the system, the fleet of Jedi starfighters were fired upon by Anti-orbital cannons, taking several casualties. Mace Windu and Luminara Unduli slipped past the firing range of the cannons and piloted TX-130S fighter tanks, and employed communications jamming to stop any CIS forces from calling for reinforcements.'
  },
  {
    urlImagem: 'https://topicimages.mrowl.com/large/jack_attack/the_force_is_strong/characters/prequeltrilogy/obi_wankenobi__1.jpg',
    user: 'benkenobi',
    mensagem: 'The training of Jedi was one of the most important traditions in the history of the Order, with Padawans learning the ways of the Force and the Jedi Code from the more experienced Jedi who held the rank of Knight or Master.'
  },
];
