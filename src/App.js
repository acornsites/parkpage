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
          <h1>{ config.domain } is owned.</h1>
          <p>It is {config.in_use ? 'in use and ': ''}{ config.for_sale ? 'for sale' : 'not for sale' }.</p>
        </header>
        <p className="App-intro">
             { config.for_sale ? <Contact/> : <Later/>} 
        </p>
      </div>
    );
  }
}

export default App;
