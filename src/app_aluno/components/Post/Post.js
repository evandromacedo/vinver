// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Libs
import moment from 'moment';

// Styles
import './Post.css';

// Components
import Favorite from 'common/Icon/Favorite';
import Comment from 'common/Icon/Comment';

class Post extends Component {
  render() {
    const {
      classe,
      usuario,
      momento,
      texto,
      curtidas,
      comentarios
    } = this.props;

    return (
      <article className="post">
        {/* Header */}
        <header className="post__header">
          <p className="caption-2 light-primary">{ classe.materia }</p>
          <p className="caption-3 light-disabled">{ classe.turma }</p>
          <p className="caption-3 light-disabled">{ moment(momento).format('DD/MM · HH[h]mm') }</p>
        </header>

        {/* Body */}
        <main className="post__body">
          <img
            className="post__body__imagem"
            src={usuario.imagem}
            alt="Perfil do Usuário"
          />
          <div className="post__body__info">
            <div>
              <p className="footnote-1 light-primary">
                { usuario.nome }
              </p>
              <p className="footnote-2 light-disabled">
                { usuario.id }
              </p>
            </div>
            <p className="post__body__info__text footnote-2 light-primary">
              { texto }
            </p>
          </div>
          <div className="post__body__footer">
            <p className="post__body__footer__item caption-2 light-disabled">
              <Favorite fill="grey-5" />{ curtidas }
            </p>
            <p className="post__body__footer__item caption-2 light-disabled">
              <Comment fill="grey-5" /> { comentarios }
            </p>
          </div>
        </main>
      </article>
    );
  }
}

Post.propTypes = {
  classe: PropTypes.shape({
    materia: PropTypes.string.isRequired,
    turma: PropTypes.string.isRequired
  }).isRequired,
  usuario: PropTypes.shape({
    imagem: PropTypes.string,
    nome: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  momento: PropTypes.instanceOf(Date),
  texto: PropTypes.string,
  curtidas: PropTypes.number,
  comentarios: PropTypes.number
};

Post.defaultProps = {
  momento: new Date(),
  texto: '',
  curtidas: 0,
  comentarios: 0
};

export default Post;
