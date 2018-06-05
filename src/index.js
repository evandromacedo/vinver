// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Styles
import 'static/resets.css';
import 'static/variables.css';
import 'static/font.css';

// Se tiver no path '/vinver/' ou root
if (
  window.location.pathname === '/' ||
  window.location.pathname === '/vinver' ||
  window.location.pathname === '/vinver/'
) {
  const styles = {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    height: '100vh'
  };

  const WhichApp = () => (
    <div style={styles}>
      <a href="/vinver/aluno">
        <h1 className="title-3 dark-primary"> {/* // eslint-disable-line */}
          🎓 Módulo do Aluno →
        </h1>
      </a>
      <a href="/vinver/professor">
        <h1 className="title-3 dark-primary"> {/* // eslint-disable-line */}
          👨🏻‍🏫 Módulo do Professor →
        </h1>
      </a>
    </div>
  );

  ReactDOM.render(<WhichApp />, document.getElementById('root'));
}
// Se tiver em '/aluno/' ou '/professor/'
else {
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
}
