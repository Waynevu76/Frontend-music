import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs";
export default class ProFileScreen extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          
          <AboutUs/>
      </div>
    )
  }
}
