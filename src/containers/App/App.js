// React
import React, { Component, Fragment } from 'react';

// Styles
import 'static/resets.css';
import 'static/variables.css';
import 'static/font.css';
import './App.css';

// Containers
import Header from 'containers/Header/Header';
import SideNav from 'containers/SideNav/SideNav';
import MakePost from 'components/MakePost/MakePost'; // TODO: importar no container Main

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
            {/* TODO: importar no container Main  */}
            <MakePost />
          </div>
          <div className="app-aside">
            <div style={{ height: '500px', backgroundColor: 'gray' }}>Aside</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
