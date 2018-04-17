// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Post.css';

// Components
// import ButtonLight from 'components/Button/ButtonLight';

class Post extends Component {
  render() {
    return (
      <article className="post">
        {/* Header */}
        <header className="post__header">
          <p className="caption-2 dark-primary">{ this.props.classe.materia }</p>
          <p className="caption-3 dark-disabled">{ this.props.classe.turma }</p>
          <p className="caption-3 dark-disabled">{ this.props.momento.toString() }</p>
        </header>

        {/* Body */}
        <main className="post__body">
          <img
            className="post__body__imagem"
            src={this.props.usuario.imagem}
            alt="Perfil do Usuário"
          />
          <div className="post__body__info">
            <div>
              <p className="footnote-1 dark-primary">
                { this.props.usuario.nome }
              </p>
              <p className="footnote-2 dark-disabled">
                { this.props.usuario.id }
              </p>
            </div>
            <p className="post__body__info__text footnote-2 dark-primary">
              { this.props.texto }
            </p>
          </div>
          <div className="post__body__footer">
            <p className="caption-2 dark-disabled">❤️ { this.props.curtidas }</p>
            <p className="caption-2 dark-disabled">📝 { this.props.comentarios }</p>
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
  text: '',
  likes: 0,
  comments: 0
};

export default Post;
