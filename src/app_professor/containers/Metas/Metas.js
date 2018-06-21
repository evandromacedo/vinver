// React
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './Metas.css';

// Components
import MetasDetail from './MetasDetail';
import { MetasSampleComponent } from './MetasSample';

class Metas extends Component {
  render() {
    return (
      <div className="metas">
        <Switch>
          <Route exact path="/metas" component={MetasSampleComponent} />
          <Route path="/metas/:id" component={MetasDetail} />
        </Switch>
      </div>
    );
  }
}

export default Metas;
