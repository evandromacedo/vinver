// React
// import AppEstudante from 'app_professor/containers/App/App';
import AppProfessor from 'app_professor/containers/App/App';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import School from 'common/Icon/School';
import Assignment from 'common/Icon/Assignment';


const Routes = () => (
  <Router basename="/vinver">
    <Switch>
      <Route path="/aluno" render={() => <p>Aluno.</p>} />
      <Route path="/professor" component={AppProfessor} />
      <Route component={Modulos} />
    </Switch>
  </Router>
);

const Modulos = () => (
  <div style={{ display: 'grid', alignItems: 'center', justifyItems: 'center', height: '100vh' }}>
    <Link to="/aluno">
      <h1 className="title-4 dark-primary">
        <School fill="orange-fill" /> Módulo do Aluno →
      </h1>
    </Link>
    <Link to="/professor">
      <h1 className="title-4 dark-primary">
        <Assignment fill="blue-fill" /> Módulo do Professor →
      </h1>
    </Link>
  </div>
);

export default Routes;
