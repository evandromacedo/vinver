// React
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Meta.css';

class Meta extends Component {
  render() {
    const { type, cor, numero, periodo, materia, turma, dias, descricao } = this.props;

    const style = {
      '--cor-fill': `var(--${cor}-fill)`,
      '--cor-shadow': `var(--${cor}-shadow)`
    };

    return (
      <div className={`meta meta--${type}`} style={style}>
        <div className="meta__header">
          {type === 'small' ? (
            <Fragment>
              <p className="caption-2 light-active">Meta #{numero}</p>
              <p className="caption-3 light-primary">{periodo}</p>
              <p className="caption-3 light-primary">
                {dias.inicio} · {dias.fim}
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <p className="caption-2 light-active">{materia}</p>
              <p className="caption-3 light-primary">{turma}</p>
              <p className="caption-3 light-primary">
                Meta #{numero} · {periodo}
              </p>
            </Fragment>
          )}
        </div>
        <div className="meta__body">
          <p className="headline light-active">{descricao}</p>
        </div>
      </div>
    );
  }
}

Meta.PropTypes = {
  type: PropTypes.oneOf(['small', 'large']),
  numero: PropTypes.string,
  periodo: PropTypes.string,
  materia: PropTypes.string,
  turma: PropTypes.string,
  dias: PropTypes.shape({ inicio: PropTypes.string, fim: PropTypes.string }),
  descricao: PropTypes.string,
  cor: PropTypes.oneOf(['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink'])
};

Meta.defaultProps = {
  type: 'small',
  numero: '',
  periodo: '',
  materia: '',
  turma: '',
  dias: { inicio: '0', fim: '0' },
  descricao: '',
  cor: 'red'
};

export default Meta;
