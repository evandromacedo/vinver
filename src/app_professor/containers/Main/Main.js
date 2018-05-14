// React
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/perfil" component={Feed} />
          </Switch>
        </div>

        <div className="aside-area">
          <Aside />
        </div>
      </main>
    );
  }
}

export default Main;

// class Perfil extends Component {
//   render() {
//     return (
//       <Router basename="/vinver/professor/perfil">
//         <Route path="/" component={Perfilzao} />
//       </Router>
//     );
//   }
// }

// class Perfilzao extends Component {
//   render() {
//     return (
//       <p>{ this.props.match.url }</p>
//     );
//   }
// }