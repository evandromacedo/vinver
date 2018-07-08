// React
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles
import './Alunos.css';

// Components
import AlunosDetails from './AlunosDetails';
import TableAlunos from 'app_admin/components/Table/TableAlunos';
import { alunosSample } from './SampleItens';

class Alunos extends Component {
  render() {
    return (
      <div className="full-area">
        <Switch>
          <Route exact path="/alunos" render={() => <TableAlunos alunos={alunosSample} />} />
          <Route path="/alunos/cadastrar" component={AlunosDetails} />
          <Route path="/alunos/:id" component={AlunosDetails} />
        </Switch>
      </div>
    );
  }
}

export default Alunos;
