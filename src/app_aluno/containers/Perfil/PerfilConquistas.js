// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import './Perfil.css';

class PerfilConquistas extends Component {
  render() {
    const { conquistas, linkTo } = this.props;

    return (
      <div className="perfil-conquistas">
        <p className="perfil-conquistas__title headline light-primary">Conquistas</p>
        <div className="perfil-conquistas__wrap">
          <div className="perfil-conquistas__list">
            {conquistas.map((conquista, index) => (
              <div
                key={index}
                style={{ '--fill': `var(--${conquista.fill})` }}
                className="perfil-conquistas__conquista"
              >
                { conquista.shape }
              </div>
            ))}
          </div>
          <Link to={linkTo} className="title-3 light-secondary">→</Link>
        </div>
      </div>
    );
  }
}

PerfilConquistas.propTypes = {
  conquistas: PropTypes.arrayOf(PropTypes.shape({
    fill: PropTypes.string,
    shape: PropTypes.any
  })),
  linkTo: PropTypes.string
};

PerfilConquistas.defaultProps = {
  conquistas: [],
  linkTo: '#'
};

export default PerfilConquistas;
