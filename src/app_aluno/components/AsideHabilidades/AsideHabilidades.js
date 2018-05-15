// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './AsideHabilidades.css';

const AsideHabilidades = ({ habilidades = [] }) => (
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

AsideHabilidades.propTypes = {
  habilidades: PropTypes.arrayOf(PropTypes.shape({
    fill: PropTypes.string,
    shape: PropTypes.any
  }))
};

export default AsideHabilidades;
