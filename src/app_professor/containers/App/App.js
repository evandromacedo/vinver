// React
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Moment
import moment from 'moment';
import 'moment/locale/pt-br';

// Styles
import 'static/resets.css';
import 'static/variables.css';
import 'static/font.css';
import './App.css';

// Containers
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';

moment.locale('pt-BR');

class App extends Component {
  render() {
    return (
      <Router basename="/vinver/">
        <Fragment>
          <Header />
          <div className="app-container">
            <div className="app-side-nav">
              <Route path="/:active?" component={SideNav} />
              {/* <SideNav /> */}
            </div>
            <div className="app-main">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/perfil" component={Perfil} />
              </Switch>
            </div>
            <div className="app-aside">
              <Aside />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;

class Perfil extends Component {
  render() {
    return (
      <Router basename="/vinver/perfil">
        <Route path="/" component={Perfilzao} />
      </Router>
    );
  }
}

class Perfilzao extends Component {
  render() {
    return (
      <p>{ this.props.match.url }</p>
    );
  }
}