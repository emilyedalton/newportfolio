import React, { Component } from 'react';
import { Button, Container, Card, Grid, Header, Icon, Image, Popup, Reveal } from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';


class Portfolio extends Component {

  render() {
    return (
      <div>

        <Parallax>
          <Container>
            <Grid.Row />
            <Grid stackable columns={1}>
              <Grid.Row />
              <Grid.Row />
              <Grid.Row />

             
                <Card.Group itemsPerRow={3} stackable columns={1}>

                  <Card>
                    <Image src={require('../../assets/images/Book.jpg')}
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
                    <Image src={require('../../assets/images/Memory_Game.jpg')}
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
                    <Image src={require('../../assets/images/CitySearch.jpg')}
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


            
                <Card.Group itemsPerRow={3} stackable columns={1}>

                  <Card>
                    <Image src={require('../../assets/images/project_1.jpg')}
                      as='a'
                      href='http://google.com'
                      target='_blank' />
                       <Card.Content>
                      <Card.Header>Food Finder</Card.Header>
                      <Card.Meta>Edamam API • JQuery • CSS FlexBox </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button>Github</Button>
                      <Button>Link</Button>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src={require('../../assets/images/Train_Shedule.jpg')}  as='a'
                      href='http://google.com'
                      target='_blank' />
                    <Card.Content>
                      <Card.Header>Train Scheduler</Card.Header>
                      <Card.Meta>Bootstrap • JQuery • Firebase • Moment.js </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button>Github</Button>
                      <Button>Link</Button>
                    </Card.Content>

                  </Card>

                  <Card>
                    <Image src={require('../../assets/images/burgers.jpg')}
                      as='a'
                      href='http://google.com'
                      target='_blank' />
                       <Card.Content>
                      <Card.Header>Burgers!</Card.Header>
                      <Card.Meta> Mongoose • HandlebarsJS • CSS FlexBox </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button>Github</Button>
                      <Button>Link</Button>
                    </Card.Content>
                  </Card>
                </Card.Group>
            
                
              <Card.Group itemsPerRow={3} stackable columns={1}>
                  
                   <Card>
                    <Image src={require('../../assets/images/friend_findr.jpg')}  as='a'
                      href='http://google.com'
                      target='_blank' />
                    <Card.Content>
                      <Card.Header>Man's Best Friend Finder</Card.Header>
                      <Card.Meta>Express • Bootstrap </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button>Github</Button>
                      <Button>Link</Button>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src={require('../../assets/images/LetterGuessGame.jpg')}  as='a'
                      href='http://google.com'
                      target='_blank' />
                    <Card.Content>
                      <Card.Header>Letter Guess Game</Card.Header>
                      <Card.Meta>JavaScript • CSS FlexBox  </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button>Github</Button>
                      <Button>Link</Button>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src={require('../../assets/images/TriviaGame.jpg')}  as='a'
                      href='http://google.com'
                      target='_blank' />
                    <Card.Content>
                      <Card.Header>Chicago Style Trivia</Card.Header>
                      <Card.Meta>JavaScript • CSS FlexBox </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button>Github</Button>
                      <Button>Link</Button>
                    </Card.Content>
                  </Card>
                </Card.Group>
               
                <Card.Group itemsPerRow={3} stackable columns={1}>
      
                  <Card>
                  <Image src={require('../../assets/images/Obect_Collector.jpg')}  as='a'
                      href='http://google.com'
                      target='_blank' />
                  <Card.Content>
                      <Card.Header>Object Collector</Card.Header>
                      <Card.Meta>JavaScript • CSS FlexBox </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button>Github</Button>
                      <Button>Link</Button>
                    </Card.Content>
                </Card>
                <Card>
                  <Image src={require('../../assets/images/liri.jpg')} as='a'
                      href='http://google.com'
                      target='_blank' />
                  <Card.Content>
                      <Card.Header>Liri Bot</Card.Header>
                      <Card.Meta>Bands in Town API • Spotify API • OMDB API • NodeJs </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button>Github</Button>
                      <Button>Link</Button>
                    </Card.Content>
                </Card>
                <Card>
                <Image src={require('../../assets/images/Bamazon.jpg')}  as='a'
                      href='https://github.com/emilyedalton/bamazon/blob/master/README.md'
                      target='_blank' />
                <Card.Content>
                <Card.Header>Bamazon</Card.Header>
                      <Card.Meta>MySQL • NodeJs </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button>Github</Button>
                      <Button>Link</Button>
                    </Card.Content>
                </Card>
              </Card.Group>
           
             </Grid>
            
          </Container>
        </Parallax>



      </div>
    )
  }
}
export default Portfolio; 