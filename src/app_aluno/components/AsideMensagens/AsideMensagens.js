// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './AsideMensagens.css';

// Components
import Comment from 'common/Icon/Comment';

const AsideMensagens = ({ mensagens = [] }) => (
  <div className="aside-mensagens">
    <p className="headline light-primary">Mensagens</p>
    <div className="aside-mensagens__list">
      {mensagens.map((mensagem, index) => (
        <div
          key={index}
          style={{
            '--fill': `var(--${mensagem.fill || 'grey-6'})`,
            '--image-url': `url(${mensagem.urlImagem})`
          }}
          className="aside-mensagens__canal"
        >
          <div className="aside-mensagens__canal__image" />
          <div className="aside-mensagens__canal__descricao">
            <p className="footnote-1 light-primary truncate">
              @{ mensagem.user }
            </p>
            <p className={`footnote-2 truncate
              ${mensagem.hasMessage ? 'light-secondary' : 'light-disabled'}
            `}>
              { mensagem.lastMessage }
            </p>
          </div>
          {mensagem.hasMessage && <Comment fill="orange-fill" />}
        </div>
      ))}
    </div>
  </div>
);

AsideMensagens.propTypes = {
  habilidades: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string,
    lastMessage: PropTypes.string,
    fill: PropTypes.string,
    hasMessage: PropTypes.boolean,
    urlImagem: PropTypes.string
  }))
};

export default AsideMensagens;
