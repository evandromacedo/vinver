// React
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Styles
import './Main.css';

// Components
import Alunos from 'app_admin/containers/Alunos/Alunos';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <Route path="/alunos" component={Alunos} />
        <div className="feed-area">
          <Switch>
            {/* Enquanto não houver conteúdo no Home */}
            {/* <Route exact path="/" component={} /> */}
            <Redirect exact from="/" to="/alunos" />
          </Switch>
        </div>
        <div className="aside-area">{/* <Route path="/:page?" component={Aside} /> */}</div>
      </main>
    );
  }
}

export default Main;
