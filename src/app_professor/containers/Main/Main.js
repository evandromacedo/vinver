// React
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './Main.css';

// Components
import Profile from 'app_professor/components/Profile/Profile';
import Metas from 'app_professor/containers/Metas/Metas';
import Feed from 'app_professor/containers/Feed/Feed';
import Aside from 'app_professor/containers/Aside/Aside';

class Main extends Component {
  render() {
    const profileProps = {
      title: 'Luke Skywalker',
      subtitle: 'Jedi Master · @luke.skywalker',
      usuarioImagem: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
      coverImagem: 'http://truthorial.com/media/k2/items/cache/319a6b58175c8348e5b537a311344d30_XL.jpg',
      classes: 8,
      alunos: 32,
      projetos: 20
    };

    return (
      <main className="main">
        <Route path="/perfil" render={() => <Profile {...profileProps} />} />
        <div className="feed-area">
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route
              path="/perfil"
              render={({ match }) => {
                match.params.type = 'perfil';
                return <Feed match={match} />;
              }}
            />
            <Route path="/metas" component={Metas} />
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
