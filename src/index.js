import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app_professor/containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
