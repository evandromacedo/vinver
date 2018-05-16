// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './AsideCanais.css';

// Components
import Comment from 'common/Icon/Comment';

const AsideCanais = ({ canais = [] }) => (
  <div className="aside-canais">
    <p className="headline light-primary">Canais</p>
    <div className="aside-canais__list">
      {canais.map((canal, index) => (
        <div
          key={index}
          style={{ '--fill': `var(--${canal.fill || 'grey-6'})` }}
          className="aside-canais__canal"
        >
          <div className="aside-canais__canal__fill" />
          <div className="aside-canais__canal__descricao">
            <p className="footnote-1 light-primary truncate">
              #{ canal.title }
            </p>
            <p className={`footnote-2 truncate
              ${canal.hasMessage ? 'light-secondary' : 'light-disabled'}
            `}>
              { canal.lastMessage }
            </p>
          </div>
          {canal.hasMessage && <Comment fill="orange-fill" />}
        </div>
      ))}
    </div>
  </div>
);

AsideCanais.propTypes = {
  habilidades: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    lastMessage: PropTypes.string,
    fill: PropTypes.string,
    shape: PropTypes.any,
    hasMessage: PropTypes.boolean
  }))
};

export default AsideCanais;
