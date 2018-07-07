// React
import React, { Component } from 'react';

// Styles
import './Table.css';

class TableAlunos extends Component {
  constructor(props) {
    super(props);

    const { alunos } = props;

    this.state = {
      alunosList: alunos,
      alunosVisiveisList: alunos.filter((e, i) => i >= 0 && i < 10),
      alunosMaxIndex: alunos.length - (alunos.length % 10),
      alunosIndex: 0
    };
  }

  filterAlunos = type => {
    switch (type) {
      case 'next': {
        const state = { ...this.state };

        if (state.alunosIndex + 10 > state.alunosMaxIndex) {
          return;
        }

        state.alunosIndex += 10;
        state.alunosVisiveisList = state.alunosList.filter(
          (e, i) => i >= state.alunosIndex && i < state.alunosIndex + 10
        );

        this.setState({ ...state });

        break;
      }

      case 'previous': {
        const state = { ...this.state };

        if (state.alunosIndex - 1 < 0) {
          return;
        }

        state.alunosIndex -= 10;
        state.alunosVisiveisList = state.alunosList.filter(
          (e, i) => i >= state.alunosIndex && i < state.alunosIndex + 10
        );

        this.setState({ ...state });

        break;
      }

      default:
        break;
    }
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do aluno</th>
            <th>Column #3</th>
            <th>Column #4</th>
            <th>Column #5</th>
            <th>Column #6</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.state.alunosVisiveisList.map((aluno, index) => (
            <tr key={index}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.column3}</td>
              <td>{aluno.column4}</td>
              <td>{aluno.column5}</td>
              <td>{aluno.column6}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="7">
              <div className="table__footer">
                <p className="footnote-1 dark-primary">1-10 de 500</p>
                <p className="footnote-1 dark-primary">
                  <span onClick={() => this.filterAlunos('previous')}>{'<'}</span>
                </p>
                <p className="footnote-1 dark-primary">
                  <span onClick={() => this.filterAlunos('next')}>{'>'}</span>
                </p>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default TableAlunos;
