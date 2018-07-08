// React
import React, { Component } from 'react';

// Styles
import './FormuAluno.css';

// Components
import InputLabel from 'common/Input/InputLabel';
import SelectLabel from 'common/Input/SelectLabel';

class FormAluno extends Component {
  renderDadosPessoais = () => {
    let { urlImagem } = this.props;
    urlImagem = 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg';

    return (
      <div className="form-aluno__dados-pessoais">
        <h1 className="form-aluno__title dark-primary footnote-1">Dados pessoais</h1>
        <div className="form-aluno__fieldset form-aluno__dados-pessoais__inputs">
          <div style={{ '--image-url': `url(${urlImagem})` }} className="form-aluno__dados-pessoais__imagem" />
          <InputLabel label="ID" disabled />
          <InputLabel label="Nome do aluno" />
          <InputLabel label="Usuário" />
          <InputLabel label="Email" />
          <InputLabel label="Telefone celular" />
          <div className="form-aluno__dados-pessoais__inputs-split">
            <InputLabel type="date" label="Data de nascimento" style={{ lineHeight: '2.8rem' }} />
            <SelectLabel
              label="Série"
              options={[
                {
                  value: 'm',
                  label: 'Masculino'
                },
                {
                  value: 'f',
                  label: 'Feminino'
                }
              ]}
            />
          </div>
        </div>
      </div>
    );
  }

  renderDadosEscolares = () => {
    return (
      <div className="form-aluno__dados-escolares">
        <h1 className="form-aluno__title dark-primary footnote-1">Dados escolares</h1>
        <div className="form-aluno__fieldset form-aluno__dados-escolares__inputs">
          <SelectLabel
            label="Série"
            options={[
              {
                value: '1',
                label: '1º ano'
              },
              {
                value: '2',
                label: '2º ano'
              },
              {
                value: '3',
                label: '3º ano'
              }
            ]}
          />
          <SelectLabel
            label="Turma"
            options={[
              {
                value: 'a',
                label: 'A'
              },
              {
                value: 'b',
                label: 'B'
              },
              {
                value: 'c',
                label: 'C'
              }
            ]}
          />
        </div>
      </div>
    );
  }

  renderClasses = () => {

  }

  render() {
    return (
      <div className="form-aluno-wrapper">
        <form className="form-aluno">
          {this.renderDadosPessoais()}
          {this.renderDadosEscolares()}
          <div className="form-aluno__footer">
            <p>footer</p>
          </div>
        </form>
      </div>
    );
  }
}

export default FormAluno;
