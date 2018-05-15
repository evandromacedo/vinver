// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Perfil.css';

class PerfilMetas extends Component {
  render() {
    const { metas } = this.props;

    return (
      <div className="perfil-metas">
        <p className="perfil-metas__title headline light-primary">Metas</p>

        <div className="perfil-metas__list">
          {metas.map((meta, index) => (
            <div
              key={index}
              style={{ '--fill': `var(--${meta.fill})` }}
              className="perfil-metas__meta headline light-active"
            >
              #{ meta.numero }
            </div>
          ))}
        </div>
      </div>
    );
  }
}

PerfilMetas.propTypes = {
  metas: PropTypes.arrayOf(PropTypes.shape({
    fill: PropTypes.string,
    numero: PropTypes.any
  })),
};

PerfilMetas.defaultProps = {
  metas: [],
  linkTo: '#'
};

export default PerfilMetas;
