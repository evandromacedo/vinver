// React
import React, { Component, Fragment } from 'react';

// Moment
import moment from 'moment';
import 'moment/locale/pt-br';

// Styles
import 'static/resets.css';
import 'static/variables.css';
import 'static/font.css';
import './App.css';

// Containers
import Header from 'containers/Header/Header';
import SideNav from 'containers/SideNav/SideNav';
import Main from 'containers/Main/Main';
import Aside from 'containers/Aside/Aside';

moment.locale('pt-BR');

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="app-container">
          <div className="app-side-nav">
            <SideNav />
          </div>
          <div className="app-main">
            <Main />
          </div>
          <div className="app-aside">
            <Aside />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
