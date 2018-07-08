// React
import React, { Component, Fragment } from 'react';

// Styles
import './FormuAluno.css';
import 'app_admin/components/Table/Table.css';

// Components
import InputLabel from 'common/Input/InputLabel';
import SelectLabel from 'common/Input/SelectLabel';
import ButtonGrey from 'common/Button/ButtonGrey';
import ButtonLight from 'common/Button/ButtonLight';

class FormAluno extends Component {
  renderDadosPessoais = () => {
    const { urlImagem, id, nome, usuario, email, celular, nascimento, sexo } = this.props;

    return (
      <div className="form-aluno__dados-pessoais">
        <h1 className="form-aluno__title dark-primary footnote-1">Dados pessoais</h1>
        <div className="form-aluno__fieldset form-aluno__dados-pessoais__inputs">
          <div style={{ '--image-url': `url(${urlImagem})` }} className="form-aluno__dados-pessoais__imagem" />
          <InputLabel label="ID" defaultValue={`#${id || ''}`} disabled />
          <InputLabel label="Nome do aluno" defaultValue={nome} />
          <InputLabel label="Usuário" defaultValue={usuario} />
          <InputLabel label="Email" defaultValue={email} />
          <InputLabel label="Telefone celular" type="tel" defaultValue={celular} />
          <div className="form-aluno__dados-pessoais__inputs-split">
            <InputLabel
              type="date"
              label="Data de nascimento"
              defaultValue={nascimento}
              style={{ lineHeight: '2.8rem' }}
            />
            <SelectLabel
              label="Sexo"
              defaultValue={sexo}
              options={[
                {
                  value: 'masculino',
                  label: 'Masculino'
                },
                {
                  value: 'feminino',
                  label: 'Feminino'
                }
              ]}
            />
          </div>
        </div>
      </div>
    );
  };

  renderDadosEscolares = () => {
    const { serie, turma } = this.props;

    return (
      <div className="form-aluno__dados-escolares">
        <h1 className="form-aluno__title dark-primary footnote-1">Dados escolares</h1>
        <div className="form-aluno__fieldset form-aluno__dados-escolares__inputs">
          <SelectLabel
            label="Série"
            defaultValue={serie}
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
            defaultValue={turma}
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
  };

  renderClasses = () => {
    return (
      <div className="form-aluno__classes">
        <div className="form-aluno__classes__header">
          <h1 className="dark-primary footnote-1">Classes</h1>
          <ButtonGrey title="Adicionar classe" type="1" />
        </div>
        <div className="form-aluno__classes__table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Classe</th>
                <th>Professor</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {classesSample.map((classe, index) => (
                <tr key={index}>
                  <td>{classe.id}</td>
                  <td>{classe.nome}</td>
                  <td>{classe.professor}</td>
                  <td>
                    <div className="table__options__ellipsis">
                      <span />
                      <span />
                      <span />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  renderFooter = () => {
    const { id } = this.props;

    return (
      <div className="form-aluno__footer">
        {id ? (
          <Fragment>
            <ButtonGrey title="Desativar conta" type="4" />
            <ButtonLight title="Atualizar informações" color="cyan" />
          </Fragment>
        ) : (
          <ButtonLight title="Cadastrar aluno" color="cyan" />
        )}
      </div>
    );
  };

  render() {
    return (
      <div className="form-aluno-wrapper">
        <form className="form-aluno" onSubmit={e => e.preventDefault()}>
          {this.renderDadosPessoais()}
          <div className="form-aluno__right">
            {this.renderDadosEscolares()}
            {this.renderClasses()}
          </div>
          {this.renderFooter()}
        </form>
      </div>
    );
  }
}

export default FormAluno;

const classesSample = [
  {
    id: '#0119873',
    nome: 'Física',
    professor: 'Anakin Skywalker'
  },
  {
    id: '#0119874',
    nome: 'Matemática',
    professor: 'Mace Windu'
  },
  {
    id: '#0119875',
    nome: 'Química',
    professor: 'Aayla Secura'
  },
  {
    id: '#0119876',
    nome: 'Biologia',
    professor: 'Yoda'
  }
];
