// React
import React, { Component } from 'react';

// Styles
import './Alunos.css';

// Components
import TableAlunos from 'app_admin/components/Table/TableAlunos';

class Alunos extends Component {
  render() {
    return (
      <div className="full-area">
        <TableAlunos />
      </div>
    );
  }
}

export default Alunos;
