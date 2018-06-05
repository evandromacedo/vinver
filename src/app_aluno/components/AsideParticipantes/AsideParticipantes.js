// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './AsideParticipantes.css';

// Components
import ButtonGrey from 'common/Button/ButtonGrey';

const AsideParticipantes = ({ participantes = [], buttonBottom }) => (
  <section className="aside-participantes">
    <p className="headline light-primary">Participantes</p>
    <div className="aside-participantes__list">
    {participantes.map((participante, index) => (
        <div
          key={index}
          style={{
            '--fill': `var(--${participante.fill || 'grey-6'})`,
            '--image-url': `url(${participante.urlImagem})`
          }}
          className="aside-participantes__item"
        >
          <div className="aside-participantes__item__image" />
          <div className="aside-participantes__item__descricao">
            <p className="footnote-1 light-primary truncate">
              @{ participante.user }
            </p>
            <p className="footnote-2 light-secondary truncate">
              { participante.name }
            </p>
          </div>
          <StatusBall status={participante.status}/>
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

const StatusBall = ({ status }) => (
  <div
    title={status.charAt(0).toUpperCase() + status.substr(1)}
    className={`cursor-pointer aside-participantes__status aside-participantes__status--${status}`}
  />
);

AsideParticipantes.propTypes = {
  participantes: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.oneOf(['online', 'offline', 'ausente', 'ocupado']),
    urlImagem: PropTypes.string
  })),
  buttonBottom: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    onClick: PropTypes.func
  })
};

AsideParticipantes.defaultProps = {
  buttonBottom: null
};

export default AsideParticipantes;
