import React, { Component } from 'react';
import './App.css';
import config from './config';
import Contact from './components/contact';
import Later from './components/later';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This domain is owned.</h1>
          <p>It is {config["in-use"] ? 'in use and ': ''}{ config["for-sale"] ? 'for sale' : 'not for sale' }.</p>
        </header>
        <p className="App-intro">
             { config["for-sale"] ? <Contact/> : <Later/>} 
        </p>
      </div>
    );
  }
}

export default App;
