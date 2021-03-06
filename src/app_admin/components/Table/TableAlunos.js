// React
import React, { Component } from 'react';

// Styles
import './Table.css';

// Components
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import ChevronLeft from 'common/Icon/ChevronLeft';
import ChevronRight from 'common/Icon/ChevronRight';
import Create from 'common/Icon/Create';
import Delete from 'common/Icon/Delete';

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
      <div className="table-alunos-wrapper">
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
                <td>#{aluno.id}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.column3}</td>
                <td>{aluno.column4}</td>
                <td>{aluno.column5}</td>
                <td>{aluno.column6}</td>
                <td>
                  <TableOptions id={aluno.id} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="7">
                <div className="table__footer">
                  <p className="footnote-1 dark-primary">
                    {this.state.alunosIndex + 1}-{this.state.alunosIndex + 10} de {this.state.alunosList.length}
                  </p>
                  <p className="footnote-1 dark-primary">
                    <span className="cursor-pointer" onClick={() => this.filterAlunos('previous')}>
                      <ChevronLeft fill="grey-5" />
                    </span>
                  </p>
                  <p className="footnote-1 dark-primary">
                    <span className="cursor-pointer" onClick={() => this.filterAlunos('next')}>
                      <ChevronRight fill="grey-5" />
                    </span>
                  </p>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default TableAlunos;

const TableOptions = onClickOutside(
  class TableOptions extends Component {
    state = {
      showOptions: false
    };

    toggleOptions = () => {
      this.setState({ showOptions: !this.state.showOptions });
    };

    handleClickOutside = () => {
      this.setState({ showOptions: false });
    };

    render() {
      const { showOptions } = this.state;
      const { id } = this.props;

      return (
        <div className="table__options">
          {showOptions && (
            <div className="table__options__list">
              <Link to={`/alunos/${id}`} className="table__options__list__item">
                <Create fill="grey-7" />
                <p className="footnote-1 dark-secondary">Editar entrada</p>
              </Link>
              <div className="table__options__list__item">
                <Delete fill="grey-7" />
                <p className="footnote-1 dark-secondary">Excluir</p>
              </div>
            </div>
          )}
          <div onClick={this.toggleOptions} className="table__options__ellipsis">
            <span />
            <span />
            <span />
          </div>
        </div>
      );
    }
  }
);
