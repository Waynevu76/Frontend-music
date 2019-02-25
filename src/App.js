import React, { Component } from 'react';
import './App.css';
import Video from './components/Video';
import NavBar from './components/NavBar';
import FeelingQuestion from './components/FeelingQuestion';
import ListMusic from './components/ListMusic';
import WhyReact from './components/WhyReact';
import AboutUs from './components/AboutUs';
import Bottom from './components/Bottom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Video/>
        <NavBar/>
        <FeelingQuestion/>
        <ListMusic/>
        <WhyReact/>
        <AboutUs/>
        <Bottom/>
      </div>
    );
  }
}

export default App;
