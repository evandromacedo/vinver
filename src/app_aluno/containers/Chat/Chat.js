// React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Chat.css';

// Components
import ChatMensagem from 'app_aluno/components/ChatMensagem/ChatMensagem';
import Person from 'common/Icon/Person';
import QuestionAnswer from 'common/Icon/QuestionAnswer';
import Input from 'common/Input/Input';

class Chat extends Component {
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
        <div className="chat__body">
          <ChatMensagem
            urlImagem="https://static.publicocdn.com/files/starwars/img/luke/02.jpg"
            user="luke.skywalker"
            mensagem="The training of Jedi was one of the most important traditions in the history of the Order, with Padawans learning the ways of the Force and the Jedi Code from the more experienced Jedi who held the rank of Knight or Master."
          />
        </div>
        <footer className="chat__footer">
          <Input
            light
            placeholder={`Enviar mensagem para #${title}`}
          />
          <p className="title-3 light-active cursor-pointer">→</p>
        </footer>
      </section>
    );
  }
}

export default Chat;
