// React
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles
import './Main.css';

// Components
import Profile from 'app_aluno/components/Profile/Profile';
import Perfil from 'app_aluno/containers/Perfil/Perfil';
import Feed from 'app_aluno/containers/Feed/Feed';
import Aside from 'app_aluno/containers/Aside/Aside';
import Chat from 'app_aluno/containers/Chat/Chat';

class Main extends Component {
  render() {
    const profileProps = {
      title: 'Luke Skywalker',
      subtitle: 'Padawan · @luke.skywalker',
      usuarioImagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
      coverImagem: 'http://truthorial.com/media/k2/items/cache/319a6b58175c8348e5b537a311344d30_XL.jpg',
      nivel: 12,
      ranking: 64
    };

    return (
      <main className="main">
        <Route path="/perfil" render={() => <Profile {...profileProps} />} />
        <div className="feed-area">
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/mensagens" component={Chat} />
          </Switch>
        </div>
        <div className="aside-area">
          <Route path="/:page?" component={Aside} />
        </div>
      </main>
    );
  }
}

export default Main;
