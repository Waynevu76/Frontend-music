import React, { Component } from 'react';
import Video from '../components/Video';
import NavBar from '../components/NavBar';
import FeelingQuestion from '../components/FeelingQuestion';
import ListMusic from '../components/ListMusic';
import WhyReact from '../components/WhyReact';
import AboutUs from '../components/AboutUs';
import Bottom from '../components/Bottom';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <div>
        <Video/>
        <NavBar/>
        <FeelingQuestion/>
        <ListMusic/>
        <WhyReact/>
        <AboutUs/>
        <Bottom/>
      </div>
    )
  }
}
