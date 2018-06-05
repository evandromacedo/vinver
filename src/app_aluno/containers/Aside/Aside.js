// React
import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// Styles
import './Aside.css';

// Components
import {
  ShortProfile,
  Classes,
  Destaque,
  RedesSociais,
  Habilidades,
  Canais,
  Mensagens,
  Participantes,
} from './SampleItems';

class Aside extends Component {
  render() {
    return (
      <aside className="aside">
        <Switch>
          <Route exact path="/" render={() => (
            <Fragment>
              <ShortProfile />
              <Classes />
              <Destaque />
            </Fragment>
          )} />
          <Route path="/perfil" render={() => (
            <Fragment>
              <Habilidades />
              <RedesSociais />
            </Fragment>
          )} />
          <Route path="/mensagens" render={() => (
            <Fragment>
              <Participantes />
              <Canais />
              <Mensagens />
            </Fragment>
          )} />
        </Switch>
      </aside>
    );
  }
}

export default withRouter(Aside);
