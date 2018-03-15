import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-white">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item brand-text" to="/">
              CryptoDashboard
            </Link>
          </div>
          {/* <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="admin.html">
                Home
              </a>
              <a class="navbar-item" href="admin.html">
                Orders
              </a>
              <a class="navbar-item" href="admin.html">
                Payments
              </a>
              <a class="navbar-item" href="admin.html">
                Exceptions
              </a>
            </div>
          </div> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
