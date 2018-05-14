// React
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Styles
import './Main.css';

// Components
import Feed from 'app_professor/containers/Feed/Feed';
import Aside from 'app_professor/containers/Aside/Aside';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <Route path="/perfil" render={() => <div className="perfil-area">asdasdas</div>} />
        <div className="feed-area">
          <Route path="/:type?" component={Feed} />
        </div>
        <div className="aside-area">
          <Route path="/:page?" component={Aside} />
        </div>
      </main>
    );
  }
}

export default Main;
