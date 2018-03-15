import React from 'react';
import './CoinDetails.css';
import CoinIcons from '../coin-icons/CoinIcons';

const API = 'https://api.coinmarketcap.com/v1/ticker/';

class CoinDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coin: null };
  }

  getCoin = async coin => {
    console.log(`trying to get coin ${coin}`);
    // fetch(`${API}${coin}/`)
    //   .then(response => response.json())
    //   .then(data => {
    //     let tempState = this.state;
    //     tempState['coin'] = data[0];
    //     this.setState(tempState);
    //   });
    const coinData = await fetch(`${API}${coin}/`);
    const coinJson = await coinData.json();
    let tempState = this.state;
    tempState['coin'] = coinJson[0];
    this.setState(tempState);
    document.title = `CryptoDashboard - ${this.state.coin.name}`;
  };

  componentDidMount() {
    this.getCoin(this.props.match.params.cryptocoin.toLowerCase());
  }

  render() {
    const details = this.state.coin;
    if (details !== null) {
      // console.log(`coin ${details.name}:`);
      // console.log(details);
      const symbolLower = details.symbol.toLowerCase();
      const percent_change = Number(details.percent_change_24h);
      // console.log(symbolLower);
      return (
        <section id="coin-details">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <div className="columns box is-centered">
                <div className="column is-one-third has-text-centered">
                  <p>
                    <span className="title is-4">{details.name}</span>
                    <span className="has-text-weight-bold">{` (${details.symbol})`}</span>
                  </p>
                  <p className="subtitle is-size-6">{`Rank ${details.rank}`}</p>
                  <div>
                    <figure className="image is-128x128">
                      <img src={CoinIcons[symbolLower + '.svg'] || CoinIcons['unknown.svg']} alt={``} />
                    </figure>
                  </div>
                </div>
                <div className="column">
                  <p className="title">
                    <span className="title is-4">{`$${Number(details.price_usd).toFixed(2)}`}</span>
                    <span className="is-size-6"> USD</span>
                    <span
                      className={`is-size-5 ${percent_change > 0 ? 'has-text-success' : 'has-text-danger'}`}
                    >
                      {` ${percent_change > 0 ? '+' : ''}${percent_change.toFixed(2)}%`}
                    </span>
                  </p>
                  <p className="subtitle is-size-6">{`${details.price_btc} BTC`}</p>
                  <div className="columns">
                    <div className="column">
                      <p className="has-text-weight-bold">Market Cap</p>
                      <p>{`${Number(details.market_cap_usd).toLocaleString()} USD`}</p>
                    </div>
                    <div className="column">
                      <p className="has-text-weight-bold">Volume 24h</p>
                      <p>{`${Number(details['24h_volume_usd']).toLocaleString()} USD`}</p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <p className="has-text-weight-bold">Circulating Supply</p>
                      <p>{`${Number(details.available_supply).toLocaleString()} ${details.symbol}`}</p>
                    </div>
                    <div className="column">
                      <p className="has-text-weight-bold">Total Supply</p>
                      <p>{`${Number(details.total_supply).toLocaleString()} ${details.symbol}`}</p>
                      {details.max_supply != null ? (
                        <p>{`${Number(details.max_supply).toLocaleString()} ${details.symbol} Max`}</p>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    return `Loading...`;
  }
}

export default CoinDetails;
