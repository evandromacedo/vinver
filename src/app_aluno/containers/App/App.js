// React
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Moment
import moment from 'moment';
import 'moment/locale/pt-br';

// Styles
import 'static/resets.css';
import 'static/variables.css';
import 'static/font.css';
import './App.css';

// Containers
import Header from 'app_aluno/containers/Header/Header';
import SideNav from 'app_aluno/containers/SideNav/SideNav';
import Main from 'app_aluno/containers/Main/Main';

moment.locale('pt-BR');

class App extends Component {
  render() {
    return (
      <Router basename="/vinver/aluno">
        <Fragment>
          <Header />
          <div className="app-container">
            <div className="side-nav-area">
              <Route path="/:active?" component={SideNav} />
            </div>
            <div className="main-area">
              <Main />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
