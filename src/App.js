import React, { Component } from 'react'
import './App.css';
import Navbar from './component/Navbar'
import News from './component/News'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
    <Router>
      <div>
        
        <Navbar />
        
        <Switch>

          <Route exact path="/" ><News key="general" catagory="general"/></Route>
          <Route exact path="/general"><News key="general2" catagory="general"/></Route>
          <Route exact path="/health"><News key="health" catagory="health"/></Route>
          <Route exact path="/sports"><News key="sports" catagory="sports"/></Route>
          <Route exact  path="/technology"><News key="technology" catagory="technology"/></Route>
        </Switch>
         
        
      </div>
    </Router>
    )
  }
}
