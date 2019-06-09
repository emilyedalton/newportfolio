import React, {Component} from 'react';
// import Image from '../assets/images/Bridge'
import {ParallaxBanner} from 'react-scroll-parallax'
import {Button} from 'semantic-ui-react'
import Text from "./Text"
import { Parallax, Background } from 'react-parallax';



class Main extends Component {

    render (){
        return (
          <div>

    <Parallax
            bgImage={require('../assets/images/Bridge.jpg')}
            bgImageAlt="myBackground"
            strength={200}
        >
            <Button>Button</Button>
            <div style={{ height: '100vh' }} />
        </Parallax>

 


</div>
    )
}}
export default Main; 