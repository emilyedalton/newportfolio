import React, {Component} from 'react';
import { Button, Container, Grid, Header, Row, Image} from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';


class Portfolio extends Component {

    render (){
        return (
          <div>

    <Parallax>
        <Container>
        <Grid.Row/>

        <Grid stackable columns={1}>
    <Grid.Row columns={3}>
   
      <Grid.Column>
        <Image src= {require('../../assets/images/Book.jpg')}/>
      </Grid.Column>
      <Grid.Column>
        <Image src={require('../../assets/images/Memory_Game.jpg')}/>
      </Grid.Column>
      <Grid.Column>
        <Image src={require('../../assets/images/CitySearch.jpg')}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    </Grid>
      </Container>
    </Parallax>



</div>
    )
}}
export default Portfolio; 