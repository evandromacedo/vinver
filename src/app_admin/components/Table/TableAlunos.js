// React
import React, { Component } from 'react';

// Styles
import './Table.css';

class TableAlunos extends Component {
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
          <tr>
            <td>#0000119873</td>
            <td>Francisco Munoz</td>
            <td>Column #3</td>
            <td>Column #4</td>
            <td>Column #5</td>
            <td>Column #6</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#0000119873</td>
            <td>Francisco Munoz</td>
            <td>Column #3</td>
            <td>Column #4</td>
            <td>Column #5</td>
            <td>Column #6</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#0000119873</td>
            <td>Francisco Munoz</td>
            <td>Column #3</td>
            <td>Column #4</td>
            <td>Column #5</td>
            <td>Column #6</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableAlunos;
