// React
import React, { Component } from 'react';

// Styles
import './Alunos.css';

// Components
import FormAluno from 'app_admin/components/FormAluno/FormAluno';
// import { alunosSample } from './SampleItens';

class AlunosDetails extends Component {
  render() {
    const idAluno = this.props.match.params.id;

    return <div className="full-area">{idAluno ? <FormAluno /> : <p>:D</p>}</div>;
  }
}

export default AlunosDetails;
