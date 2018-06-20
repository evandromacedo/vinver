// React
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Metas.css';

// Components
import Meta from 'app_professor/components/Meta/Meta';

class Metas extends Component {
  render() {
    const { type, cor, numero, periodo, dias } = this.props;

    return (
      <div className={`metas metas--${type}`}>
        <Meta
          type="small"
          numero="3"
          periodo="Semanal"
          materia="Física"
          turma="Ensino Médio"
          dias={{ inicio: '1', fim: '30' }}
          descricao="Descriçaaaaaaaaaaaaao"
          cor="green"
        />
      </div>
    );
  }
}

// Metas.PropTypes = {
//   type: PropTypes.oneOf(['small', 'large']),
//   numero: PropTypes.string,
//   periodo: PropTypes.string,
//   dias: PropTypes.shape({ inicio: PropTypes.string, fim: PropTypes.string }),
//   descricao: PropTypes.string,
//   cor: PropTypes.oneOf(['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink'])
// };

// Metas.defaultProps = {
//   type: 'small',
//   numero: '',
//   periodo: '',
//   dias: { inicio: '0', fim: '0' },
//   descricao: '',
//   cor: 'red'
// };

export default Metas;
