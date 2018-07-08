// React
import React, { Component } from 'react';

// Styles
import './Alunos.css';

// Components
import FormAluno from 'app_admin/components/FormAluno/FormAluno';

class AlunosDetails extends Component {
  render() {
    const { id } = this.props.match.params;

    // OBS: isso é apenas um mock da edição do aluno
    if (id) {
      return (
        <FormAluno
          id={'0000119875'}
          nome={'William Jacobs'}
          usuario={'will.jacobs'}
          email={'will.jacobs@vinver.com'}
          celular={'(11) 98888-7777'}
          nascimento={'2001-11-01'}
          sexo={'masculino'}
          serie={'2'}
          turma={'b'}
          urlImagem={'https://static.publicocdn.com/files/starwars/img/luke/02.jpg'}
        />
      );
    }

    return <FormAluno />;
  }
}

export default AlunosDetails;
