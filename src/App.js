import React, {Component} from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import {Button} from "semantic-ui-react"
import Main from "./components/Main/Main"
import Portfolio from './components/Portfolio/'

class App extends Component {
  render (){
  return (
    <div>
   <Main/>
   <Portfolio/>


    </div>
  )}}

export default App;
