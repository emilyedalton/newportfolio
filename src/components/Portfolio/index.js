import React, {Component} from 'react';
import {  Button, Container, Card,Grid,  Header, Icon, Image, Popup, Reveal} from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';


class Portfolio extends Component {

    render (){
        return (
          <div>

        <Parallax>
        <Container>
        <Grid.Row/>
        <Grid stackable columns={1}>
        <Grid.Row/>

    <Grid.Row style ={{border: "solid 2px blue"}}columns={3}>
    <Header as='h1' content="React"
                                    style={{
                                        fontSize: '2em',
                                        color: 'black',
                                    }} />
    <Card.Group itemsPerRow={3} stackable columns={1}>

<Card>
<Image src= {require('../../assets/images/Book.jpg')}
        as='a'
        href='https://dry-cove-87436.herokuapp.com/'
        target='_blank' />

<Card.Content>
      <Card.Header>React Book Finder</Card.Header>
      <Card.Meta>React • Google Books API • Bootstrap  </Card.Meta>
      <Card.Description>
      </Card.Description>
    <Button>Github</Button>
    <Button>Link</Button>
    </Card.Content>
    </Card>

<Card>
<Image src= {require('../../assets/images/Memory_Game.jpg')}
        as='a'
        href='https://dry-cove-87436.herokuapp.com/'
        target='_blank' />

<Card.Content>
      <Card.Header>React Memory Game</Card.Header>
      <Card.Meta>React • Bootstrap </Card.Meta>
      <Card.Description>
      </Card.Description>
    <Button>Github</Button>
    <Button>Link</Button>
    </Card.Content>
    </Card>

    <Card>
<Image src= {require('../../assets/images/CitySearch.jpg')}
        as='a'
        href='https://dry-cove-87436.herokuapp.com/'
        target='_blank' />

<Card.Content>
      <Card.Header>City Search</Card.Header>
      <Card.Meta>Giphy API • JQuery </Card.Meta>
      <Card.Description>
      </Card.Description>
    <Button>Github</Button>
    <Button>Link</Button>
    </Card.Content>
    </Card>
    
</Card.Group>

    </Grid.Row>
  
    <Grid.Row style = {{border:"solid 2px red"}}columns={3}>
    <Header as='h1' content="Some other Tech"
                                    style={{
                                        fontSize: '2em',
                                        color: 'black',
                                    }} />
<Card>
        <Image src={require('../../assets/images/project_1.jpg')}
        as='a'
        href='http://google.com'
        target='_blank'/>
</Card>
      <Grid.Column>
        <Image src={require('../../assets/images/Train_Shedule.jpg')}/>
      </Grid.Column>
     
      <Grid.Column>
        <Image src={require('../../assets/images/burgers.jpg')}
         as='a'
         href='http://google.com'
         target='_blank'/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row style ={{border:"solid 2px brown"}}columns={3}>
      <Grid.Column>
        <Image src={require('../../assets/images/friend_findr.jpg')}/>
      </Grid.Column>

      <Grid.Column>
        <Image src={require('../../assets/images/LetterGuessGame.jpg')}/>
      </Grid.Column>
      <Grid.Column>
        <Image src={require('../../assets/images/TriviaGame.jpg')}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src={require('../../assets/images/Obect_Collector.jpg')}/>
      </Grid.Column>
      <Grid.Column>
        <Image src={require('../../assets/images/liri.jpg')}/>
      </Grid.Column>
      <Grid.Column>
        <Image src={require('../../assets/images/Bamazon.jpg')}/>
      </Grid.Column>
    </Grid.Row>
    </Grid>
      </Container>
    </Parallax>



</div>
    )
}}
export default Portfolio; 