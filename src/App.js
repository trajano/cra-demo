import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} alt="My React App" text="Welcome to My React App"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.  This is something that has changed.
        </p>
      </div>
    );
  }
}

export default App;
