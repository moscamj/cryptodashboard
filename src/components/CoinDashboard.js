import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './CoinDashboard.css';

import CoinGrid from './CoinGrid';
import CoinDetails from './CoinDetails';

class CoinDashboard extends React.Component {
  render() {
    return (
      <div id="coin-dashboard" className="container">
        <Switch>
          <Route exact path="/" render={() => <CoinGrid />} />
          <Route exact path="/coin/:cryptocoin" render={({ match }) => <CoinDetails match={match} />} />
        </Switch>
      </div>
    );
  }
}

export default CoinDashboard;
