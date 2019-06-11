import React, {Component} from 'react';
import {  Button, Container, Grid,  Header, Icon, Image, Popup, Reveal} from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';
import './style.css'


class Portfolio extends Component {

    render (){
        return (
          <div>

    <Parallax>
        <Container>
        <Grid.Row/>

        <Grid stackable columns={1}>
        <Grid.Row/>

    <Grid.Row columns={3}>
   

      <Grid.Column className="styleButton">
 
      <Popup trigger={<Image src= {require('../../assets/images/Book.jpg')}
        as='a'
        href='https://dry-cove-87436.herokuapp.com/'
        target='_blank'
        />} floating hoverable><Grid centered divided columns={2}> <Grid.Column textAlign='center'>
        {/* <Header as='h4'>Basic Plan</Header> */}
        <Icon name='github' size='large' style={{margin: "1em"}}/>
        <Button>Github</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
<Icon name ='linkify'size='large' style={{margin: "1em"}}/>
        <Button>View Site</Button>
      </Grid.Column>
   
     </Grid></Popup>
    
        {/* <Popup trigger={<Button>Show flowing popup</Button>} flowing hoverable>
    </Popup> */}
      </Grid.Column>
      
      <Grid.Column>
        <Image src={require('../../assets/images/Memory_Game.jpg')}
        as='a'
        href='http://google.com'
        target='_blank'/>
      </Grid.Column>
      <Grid.Column>
        <Image src={require('../../assets/images/CitySearch.jpg')}
        as='a'
        href='http://google.com'
        target='_blank'/>
      </Grid.Column>
    </Grid.Row>
    
    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src={require('../../assets/images/project_1.jpg')}
        as='a'
        href='http://google.com'
        target='_blank'/>
      </Grid.Column>
      <Grid.Column>
        <Image src={require('../../assets/images/Train_Shedule.jpg')}/>
      </Grid.Column>
      <Grid.Column>
        <Image src={require('../../assets/images/burgers.jpg')}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
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