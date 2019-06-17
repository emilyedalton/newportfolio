import React, {Component} from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Button} from "semantic-ui-react"

import Main from "./components/Main/Main"
import Portfolio from './components/Portfolio/'
import About from './components/About/'


class App extends Component {
  render (){
  return (
<div>
   {/* <Main/>
   <About/>
   <Portfolio/> */}
     <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route  path="/about" component={About} />
          <Route  path="/portfolio" component={Portfolio} />
        </Switch>

    </Router>
      </div>
      )}}

export default App;
