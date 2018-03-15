import React from 'react';

import CoinTile from './CoinTile';

const API = 'https://api.coinmarketcap.com/v1/ticker/';

class CoinGrid extends React.Component {
  constructor() {
    super();
    this.state = { coins: [] };
  }

  getPrices = () => {
    // fetch top 100 by default
    fetch(API)
      .then(response => response.json())
      .then(data => {
        let tempState = this.state;
        tempState['coins'] = data;
        this.setState(tempState);
      });
  };

  componentDidMount() {
    document.title = 'CryptoDashboard - Home';
    console.log('attempting to get prices');
    this.getPrices();
  }

  render() {
    return (
      <div className="columns">{this.state.coins.map(coin => <CoinTile key={coin.id} details={coin} />)}</div>
    );
  }
}

export default CoinGrid;
