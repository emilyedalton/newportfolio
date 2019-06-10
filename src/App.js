import React, {Component} from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import {Button} from "semantic-ui-react"
import Main from "./components/Main/Main"
import Portfolio from './components/Portfolio/'
import About from './components/About/'


class App extends Component {
  render (){
  return (
    <div>
   <Main/>
   <About/>
   <Portfolio/>


    </div>
  )}}

export default App;
