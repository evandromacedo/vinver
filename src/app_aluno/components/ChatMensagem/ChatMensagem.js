// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Libs
import moment from 'moment';

// Styles
import './ChatMensagem.css';

class ChatMensagem extends Component {
  render() {
    const { user, urlImagem, mensagem, momento } = this.props;

    return (
      <div className="chat-mensagem">
        <img
          src={urlImagem}
          alt="User"
          className="chat-mensagem__imagem cursor-pointer"
        />
        <div className="chat-mensagem__mensagem">
          <p className="callout light-primary">{ mensagem }</p>
          <p className="caption-2 light-secondary">
            @{ user } &nbsp; &nbsp;
            <span className="caption-3 light-disabled">
              { moment(momento).format('DD/MM · HH[h]mm') }
            </span>
          </p>
        </div>
      </div>
    );
  }
}

ChatMensagem.propTypes = {
  user: PropTypes.string,
  urlImagem: PropTypes.string,
  mensagem: PropTypes.string,
  momento: PropTypes.instanceOf(Date)
};

ChatMensagem.defaultProps = {
  user: '',
  urlImagem: '',
  mensagem: '',
  momento: new Date()
};

export default ChatMensagem;
