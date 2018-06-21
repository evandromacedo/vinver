// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './AsideMeta.css';

// Components
import ButtonGrey from 'common/Button/ButtonGrey';

const AsideMeta = ({ title, children, buttonBottom }) => (
  <section className="aside-meta">
    <p className="headline dark-primary">{title}</p>
    <div className="aside-meta__content">{children}</div>
    {buttonBottom && <ButtonGrey type="6" title={`${buttonBottom.titulo} →`} onClick={buttonBottom.onClick} />}
  </section>
);

AsideMeta.propTypes = {
  title: PropTypes.string.isRequired,
  buttonBottom: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    onClick: PropTypes.func
  })
};

AsideMeta.defaultProps = {
  buttonBottom: null
};

export default AsideMeta;
