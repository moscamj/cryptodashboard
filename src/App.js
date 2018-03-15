import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import Navbar from './components/Navbar';
import CoinDashboard from './components/CoinDashboard';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <CoinDashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
