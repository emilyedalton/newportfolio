import React, { Component } from 'react';
import { Button, Container, Card, Grid, Header,Image, Popup, Reveal } from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';
import Footer from "../Footer"


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
                      <Button  as='a'
                      href='https://github.com/emilyedalton/book-class'
                      target='_blank' content="Github"/>
                      <Button  as='a'
                      href='https://dry-cove-87436.herokuapp.com/'
                      target='_blank' content="Link"/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src={require('../../assets/images/Memory_Game.jpg')}
                      as='a'
                      href='https://emilyedalton.github.io/clicky_memory_game_react/'
                      target='_blank' />

                    <Card.Content>
                      <Card.Header>React Memory Game</Card.Header>
                      <Card.Meta>React • Bootstrap </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button  as='a'
                      href='https://github.com/emilyedalton/clicky_game/tree/master'
                      target='_blank' content="Github"/>
                      <Button  as='a'
                      href='https://emilyedalton.github.io/clicky_memory_game_react/'
                      target='_blank' content="Link"/>
                    </Card.Content>
                  </Card>

                  <Card>
                    <Image src={require('../../assets/images/CitySearch.jpg')}
                      as='a'
                      href='https://emilyedalton.github.io/GifTastic/'
                      target='_blank' />

                    <Card.Content>
                      <Card.Header>City Search</Card.Header>
                      <Card.Meta>Giphy API • JQuery </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button as='a'
                      href='https://emilyedalton.github.io/GifTastic/'
                      target='_blank' content="Github"/>
                      <Button  as='a'
                      href='https://emilyedalton.github.io/GifTastic/'
                      target='_blank' content="Link"/>
                    </Card.Content>
                  </Card>
                </Card.Group>


            
                <Card.Group itemsPerRow={3} stackable columns={1}>

                  <Card>
                    <Image src={require('../../assets/images/project_1.jpg')}
                      as='a'
                      href='https://emilyedalton.github.io/Project_1/'
                      target='_blank' />
                       <Card.Content>
                      <Card.Header>Food Finder</Card.Header>
                      <Card.Meta>Edamam API • JQuery • CSS FlexBox </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button  as='a'
                      href='https://github.com/emilyedalton/Project_1'
                      target='_blank' content="Github"/>
                      <Button  as='a'
                      href='https://emilyedalton.github.io/Project_1/'
                      target='_blank' content="Link"/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src={require('../../assets/images/Train_Shedule.jpg')}  as='a'
                      href='https://emilyedalton.github.io/Train_Scheduler/'
                      target='_blank' />
                    <Card.Content>
                      <Card.Header>Train Scheduler</Card.Header>
                      <Card.Meta>Bootstrap • JQuery • Firebase • Moment.js </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button  as='a'
                      href='https://github.com/emilyedalton/Train_Scheduler'
                      target='_blank' content="Github"/>
                      <Button  as='a'
                      href='https://emilyedalton.github.io/Train_Scheduler/'
                      target='_blank' content="Link"/>
                    </Card.Content>

                  </Card>

                  <Card>
                    <Image src={require('../../assets/images/burgers.jpg')}
                      as='a'
                      href='https://powerful-coast-80195.herokuapp.com/'
                      target='_blank' />
                       <Card.Content>
                      <Card.Header>Burgers!</Card.Header>
                      <Card.Meta> Sequelize • HandlebarsJS • CSS FlexBox </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button  as='a'
                      href='https://github.com/emilyedalton/sequelizedBurger'
                      target='_blank' content="Github"/>
                      <Button  as='a'
                      href='https://powerful-coast-80195.herokuapp.com/'
                      target='_blank' content="Link"/>
                    </Card.Content>
                  </Card>
                </Card.Group>
            
                
              <Card.Group itemsPerRow={3} stackable columns={1}>
                  
                   <Card>
                    <Image src={require('../../assets/images/friend_findr.jpg')}  as='a'
                      href=' https://sleepy-cliffs-62107.herokuapp.com/'
                      target='_blank' />
                    <Card.Content>
                      <Card.Header>Man's Best Friend Finder</Card.Header>
                      <Card.Meta>Express • Bootstrap </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button  as='a'
                      href='https://github.com/emilyedalton/friend_finder'
                      target='_blank' content="Github"/>
                      <Button  as='a'
                      href=' https://sleepy-cliffs-62107.herokuapp.com/'
                      target='_blank' content="Link"/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src={require('../../assets/images/LetterGuessGame.jpg')}  as='a'
                      href='https://emilyedalton.github.io/Letter_Guess_Game/'
                      target='_blank' />
                    <Card.Content>
                      <Card.Header>Letter Guess Game</Card.Header>
                      <Card.Meta>JavaScript • CSS FlexBox  </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button  as='a'
                      href='https://github.com/emilyedalton/Letter_Guess_Game'
                      target='_blank' content="Github"/>
                      <Button as='a'
                      href='https://emilyedalton.github.io/Letter_Guess_Game/'
                      target='_blank' content="Link"/>
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
                      <Button as='a'
                      href='https://github.com/emilyedalton/TrivaGame'
                      target='_blank' content="Github"/> 
                      <Button as='a'
                      href='https://emilyedalton.github.io/TrivaGame/'
                      target='_blank' content="Link"/>
                    </Card.Content>
                  </Card>
                </Card.Group>
               
                <Card.Group itemsPerRow={3} stackable columns={1}>
      
                  <Card>
                  <Image src={require('../../assets/images/Obect_Collector.jpg')}  as='a'
                      href='https://emilyedalton.github.io/unit_4_game/'
                      target='_blank' />
                  <Card.Content>
                      <Card.Header>Object Collector</Card.Header>
                      <Card.Meta>JavaScript • CSS FlexBox </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button as='a'
                      href='https://github.com/emilyedalton/unit_4_game'
                      target='_blank' content="Github"/>
                      <Button as='a'
                      href='https://emilyedalton.github.io/unit_4_game/'
                      target='_blank' content="Link"/>
                    </Card.Content>
                </Card>
                <Card>
                  <Image src={require('../../assets/images/liri.jpg')} as='a'
                      href='https://github.com/emilyedalton/liri-node-app/blob/master/README.md'
                      target='_blank' />
                  <Card.Content>
                      <Card.Header>Liri Bot</Card.Header>
                      <Card.Meta>Bands in Town API • Spotify API • OMDB API • NodeJs </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button as='a'
                      href='https://github.com/emilyedalton/liri-node-app/blob/master/README.md'
                      target='_blank' content="Github"/>
                      <Button as='a'
                      href='https://github.com/emilyedalton/liri-node-app/blob/master/README.md'
                      target='_blank' content="Link"/> 
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
                      <Button as='a'
                      href='https://github.com/emilyedalton/bamazon/blob/master/README.md'
                      target='_blank' content="Github"/>
                      <Button as='a'
                      href='https://github.com/emilyedalton/bamazon/blob/master/README.md'
                      target='_blank' content="Link"/>
                    </Card.Content>
                </Card>
              </Card.Group>
           <Grid.Row/>
             </Grid>
            
          </Container>
        </Parallax>
<Footer/>

      </div>
    )
  }
}
export default Portfolio; 