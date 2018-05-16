// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './AsideCanais.css';

const AsideCanais = ({ habilidades = [] }) => (
  <div className="aside-habilidades">
    <p className="headline light-primary">Habilidades</p>
    <div className="aside-habilidades__list">
      {habilidades.map((habilidade, index) => (
        <div
          key={index}
          style={{ '--fill': `var(--${habilidade.fill})` }}
          className="aside-habilidades__habilidade"
        >
          { habilidade.shape }
        </div>
      ))}
    </div>
  </div>
);

AsideCanais.propTypes = {
  habilidades: PropTypes.arrayOf(PropTypes.shape({
    fill: PropTypes.string,
    shape: PropTypes.any
  }))
};

export default AsideCanais;
