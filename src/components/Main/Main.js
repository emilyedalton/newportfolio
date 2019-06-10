import React, {Component} from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';

const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

class Main extends Component {

    render (){
        return (
          <div>

    <Parallax
            bgImage={require('../../assets/images/Bridge.jpg')}
            bgImageAlt="myBackground"
            strength={200}
        >
        <Container>
        <Grid.Column textAlign="center">

            <div style={{ height: '100vh' }} />
               <Header as='h1' content="Emily Dalton | Web Developer" 
         style={{
            transform: "translate(700px, -300px)",
             fontSize: '2em',
             color:'white'}}/>
            <Button style ={{transform: "translate(830px, -300px)"}} inverted>View Portfolio</Button>
      </Grid.Column>
      </Container>
    </Parallax>

 


</div>
    )
}}
export default Main; 