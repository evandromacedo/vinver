// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Aside.css';

const Habilidades = ({ habilidades = [] }) => (
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

Habilidades.propTypes = {
  habilidades: PropTypes.arrayOf(PropTypes.shape({
    fill: PropTypes.string,
    shape: PropTypes.any
  }))
};

export default Habilidades;
