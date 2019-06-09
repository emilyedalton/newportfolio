import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
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
            <div style={{ height: '100vh' }} />
            <Button style ={{margin:"auto"
}} inverted>Standard</Button>
        />
        </Parallax>

 


</div>
    )
}}
export default Main; 