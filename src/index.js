import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const app = window.location.href.includes('aluno') ? 'aluno' : 'professor';

import(`./app_${app}/containers/App/App`).then((AppImport) => {
  const App = AppImport.default;

  const Routes = () => (
    <Router basename="/vinver">
      <Route path={`/${app}`} component={App} />
    </Router>
  );

  ReactDOM.render(<Routes />, document.getElementById('root'));
});

registerServiceWorker();
