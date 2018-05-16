// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './AsideProfile.css';

class AsideProfile extends Component {
  render() {
    const {
      usuario,
      dados
    } = this.props;

    return (
      <section className="aside-profile">
        <div className="aside-profile__usuario">
          <img
            className="aside-profile__usuario__imagem"
            src={usuario.imagem}
            alt="Perfil do Usuário"
          />
          <div className="aside-profile__usuario__info">
            <p className="headline light-primary">
              { usuario.nome }
            </p>
            <p className="footnote-1 light-disabled">
              { usuario.titulo }
            </p>
          </div>
        </div>
        {!!dados.length &&
          dados.map((dado, index) => (
            <div className="aside-profile__dados" key={index}>
              <p className="footnote-1 light-primary">
                { dado.label }
              </p>
              <p className="aside-profile__dados__value headline light-disabled">
                { dado.value }
              </p>
            </div>
          ))
        }
      </section>
    );
  }
}

AsideProfile.propTypes = {
  usuario: PropTypes.shape({
    imagem: PropTypes.string,
    nome: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
  }).isRequired,
  dados: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }))
};

AsideProfile.defaultProps = {
  dados: []
};

export default AsideProfile;
