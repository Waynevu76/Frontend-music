import React, { Component } from 'react';
import './App.css';
import WelcomeScreen from "./containers/WelcomeScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeScreen/>
      </div>
    );
  }
}

export default App;
