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
            <Grid>
        <Grid.Column style={{border: "solid 2px red"}}width={8} textAlign="center">

            <div style={{ height: '100vh' }} />

                   </Grid.Column>

                     <Grid.Column style = {{border: "solid 2px blue"}} width={8} textAlign="center">
                     <Header as='h1' content="Emily Dalton | Web Developer" 
         style={{
             fontSize: '2em',
             color:'white'}}/>
            <Button style ={{}} inverted>View Portfolio</Button>
      </Grid.Column>
     
      </Grid>
      </Container>
    </Parallax>

 


</div>
    )
}}
export default Main; 