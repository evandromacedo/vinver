// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './AsideList.css';

class AsideList extends Component {
  render() {
    const { titulo, itens } = this.props;

    return (
      <section className="aside-list">
        <p className="headline light-primary">{ titulo }</p>
        {itens.map((item, index) => (
          <AsideItem
            key={index}
            materia={item.materia}
            turma={item.turma}
            icon={item.icon}
          />
        ))}
      </section>
    );
  }
}

AsideList.propTypes = {
  titulo: PropTypes.string.isRequired,
  itens: PropTypes.arrayOf(PropTypes.shape({
    materia: PropTypes.string.isRequired,
    turma: PropTypes.string.isRequired,
    icon: PropTypes.element
  })),
  buttonBottom: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    onClick: PropTypes.func
  })
};

AsideList.defaultProps = {
  itens: [],
  buttonBottom: null
};

const AsideItem = ({ materia, turma, icon }) => (
  <div className="aside-list__item">
    <div>
      <p className="footnote-1 light-primary">{ materia }</p>
      <p className="footnote-2 light-disabled">{ turma }</p>
    </div>
    { icon }
  </div>
);

export default AsideList;
