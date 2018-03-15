import React from 'react';
import { Link } from 'react-router-dom';

import './CoinTile.css';
import CoinIcons from '../coin-icons/CoinIcons';

class CoinTile extends React.Component {
  render() {
    const { details } = this.props;
    // console.log('details:');
    // console.log(details);
    const symbolLower = details.symbol.toLowerCase();
    const percent_change = Number(details.percent_change_24h);

    return (
      <div className="column is-one-fifth">
        <Link to={`/coin/${details.id}`}>
          <div className="coin-tile card">
            <div className="coin-wrapper">
              <div className="card-image">
                <figure className="image is-64x64">
                  <img src={CoinIcons[symbolLower + '.svg'] || CoinIcons['unknown.svg']} alt={details.name} />
                </figure>
              </div>
              <div className="card-content">
                <header className="card-header">
                  <p className="coin-tile-header card-header-title is-centered has-text-centered">
                    {details.name} ({details.symbol})
                  </p>
                </header>
                <div className="has-text-centered">
                  <span>{`$${Number(details.price_usd).toFixed(2)} `}</span>
                  <span className={`${percent_change > 0 ? 'has-text-success' : 'has-text-danger'}`}>
                    {`${percent_change > 0 ? '+' : ''}${percent_change.toFixed(2)}%`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CoinTile;
