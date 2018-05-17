// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './AsideHabilidades.css';

// Components
import ButtonGrey from 'common/Button/ButtonGrey';

const AsideHabilidades = ({ habilidades = [], buttonBottom }) => (
  <section className="aside-habilidades">
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
    {buttonBottom &&
      <ButtonGrey
        type="6"
        title={`${buttonBottom.titulo} →`}
        onClick={buttonBottom.onClick}
      />
    }
  </section>
);

AsideHabilidades.propTypes = {
  habilidades: PropTypes.arrayOf(PropTypes.shape({
    fill: PropTypes.string,
    shape: PropTypes.any
  })),
  buttonBottom: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    onClick: PropTypes.func
  })
};

AsideHabilidades.defaultProps = {
  buttonBottom: null
};

export default AsideHabilidades;
