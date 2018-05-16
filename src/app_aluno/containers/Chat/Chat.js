// React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

// Styles
import './Chat.css';

// Components
import ChatMensagem from 'app_aluno/components/ChatMensagem/ChatMensagem';
import Person from 'common/Icon/Person';
import QuestionAnswer from 'common/Icon/QuestionAnswer';
import Input from 'common/Input/Input';
import { Mensagens } from './SampleMessages';

class Chat extends Component {
  state = {
    text: '',
    mensagens: []
  };

  updateText = (e) => {
    this.setState({ text: e.target.value });
  }

  sendMessage = () => {
    const { text } = this.state;

    if (text) {
      const mensagens = [
        ...this.state.mensagens,
        {
          id: shortid.generate(),
          user: 'benkenobi',
          urlImagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
          mensagem: text,
          momento: new Date()
        }
      ];

      this.setState({
        text: '',
        mensagens
      });

      this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }
  }

  render() {
    let { fill, title, description } = this.props;

    // Mocks
    title = 'jedihighcouncil';
    description = 'The ruling body of the Jedi Order';

    return (
      <section className="chat">
        <header className="chat__header">
          <div
            className="chat__header__fill"
            style={{ '--fill': `var(--${fill || 'grey-6'})` }}
          />
          <div className="chat__header__center">
            <p className="headline light-primary">#{ title }</p>
            <p className="footnote-1 light-disabled">{ description }</p>
          </div>
          <div className="chat__header__right">
            <Link to="#">
              <Person fill="grey-6" />
            </Link>
            <Link to="#">
              <QuestionAnswer fill="grey-6" />
            </Link>
          </div>
        </header>
        <div ref={(node) => this.chatBody = node} className="chat__body">
          <Mensagens />
          {this.state.mensagens.map(mensagem => (
            <ChatMensagem
              key={mensagem.id}
              urlImagem={mensagem.urlImagem}
              user={mensagem.user}
              mensagem={mensagem.mensagem}
            />
          ))}
        </div>
        <footer className="chat__footer">
          <Input
            light
            placeholder={`Enviar mensagem para #${title}`}
            value={this.state.text}
            onChange={this.updateText}
          />
          <p
            onClick={this.sendMessage}
            className="title-3 light-active cursor-pointer"
          >
            →
          </p>
        </footer>
      </section>
    );
  }
}

export default Chat;
