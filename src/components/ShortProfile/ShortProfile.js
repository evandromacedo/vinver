// React
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Styles
import './ShortProfile.css';

// Components
// import Favorite from 'components/Icon/Favorite';
// import Comment from 'components/Icon/Comment';

class ShortProfile extends Component {
  render() {
    const {
      usuario,
      dados
    } = this.props;

    const dadosList = dados.map((dado, index) => (
      <Fragment key={index}>


      </Fragment>
    ));

    return (
      <section className="short-profile">
        <div className="short-profile__usuario">
          <img
            className="short-profile__usuario__imagem"
            src={usuario.imagem}
            alt="Perfil do Usuário"
          />
          <div className="short-profile__usuario__info">
            <p className="headline dark-primary">
              { usuario.nome }
            </p>
            <p className="footnote-1 dark-disabled">
              { usuario.titulo }
            </p>
          </div>
        </div>
        {!!dados.length &&
          dados.map((dado, index) => (
            <div className="short-profile__dados" key={index}>
              <p className="footnote-1 dark-primary">
                { dado.label }
              </p>
              <p className="short-profile__dados__value headline dark-disabled">
                { dado.value }
              </p>
            </div>
          ))
        }
      </section>
    );
  }
}

ShortProfile.propTypes = {
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

ShortProfile.defaultProps = {
  dados: []
};

export default ShortProfile;
