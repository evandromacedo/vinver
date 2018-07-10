// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Profile.css';

class Profile extends Component {
  render() {
    const { title, subtitle, usuarioImagem, coverImagem, nivel, ranking } = this.props;

    return (
      <div className="profile perfil-area">
        <div className="profile__cover-photo" style={{ '--url': `url(${coverImagem})` }}>
          <img className="profile__image profile__image--mobile cursor-pointer" src={usuarioImagem} alt="Profile" />
        </div>
        <div className="profile__info">
          <div className="profile__info__left">
            <div className="profile__image-wrapper">
              <img className="profile__image cursor-pointer" src={usuarioImagem} alt="Profile" />
            </div>
            <div className="profile__info__line-height">
              <h1 className="title-2 light-primary">{title}</h1>
              <h2 className="headline light-disabled">{subtitle}</h2>
            </div>
          </div>
          <div className="profile__info__line-height profile__info__title-mobile">
            <h1 className="title-2 light-primary">{title}</h1>
            <h2 className="headline light-disabled">{subtitle}</h2>
          </div>
          <div className="profile__info__line-height">
            <p className="headline light-primary">Nível</p>
            <p className="title-2 light-disabled profile__info__numbers">{nivel}</p>
          </div>
          <div className="profile__info__line-height">
            <p className="headline light-primary">Ranking</p>
            <p className="title-2 light-disabled profile__info__numbers">#{ranking}</p>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  nivel: PropTypes.number,
  ranking: PropTypes.number,
  projetos: PropTypes.number,
  usuarioImagem: PropTypes.string,
  coverImagem: PropTypes.string
};

Profile.defaultProps = {
  title: '',
  subtitle: '',
  nivel: 0,
  ranking: 0,
  projetos: 0,
  usuarioImagem: '',
  coverImagem: ''
};

export default Profile;
