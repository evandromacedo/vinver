// React
import React, { Component, Fragment } from 'react';

// Styles
import './Metas.css';

// Components
import Meta from 'app_professor/components/Meta/Meta';
import { metasSample } from './MetasSample';

class MetasDetail extends Component {
  constructor(props) {
    super(props);
    this.meta = metasSample.find(meta => meta.numero === this.props.match.params.id);
    if (!this.meta) {
      this.props.history.push('/metas');
    }
  }

  render() {
    return (
      <div className="metas-detail">
        <Meta type="large" {...this.meta} />
      </div>
    );
  }
}

export default MetasDetail;
