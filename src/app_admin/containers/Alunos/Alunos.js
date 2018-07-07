// React
import React, { Component } from 'react';

// Styles
import './Alunos.css';

// Components
import TableAlunos from 'app_admin/components/Table/TableAlunos';
import { alunosSample } from './SampleItens';

class Alunos extends Component {
  render() {
    return (
      <div className="full-area">
        <div className="table-alunos-wrapper">
          <TableAlunos alunos={alunosSample} />
        </div>
      </div>
    );
  }
}

export default Alunos;
