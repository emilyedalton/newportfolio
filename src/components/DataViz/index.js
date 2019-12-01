import React, { Component } from 'react';
import { Button, Container, Card, Grid, Header,Image  } from 'semantic-ui-react'
import { Parallax,  } from 'react-parallax';
import Footer from "../Footer"


class DataViz extends Component {

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

              <Header>Data Visualizations</Header>

                <Card.Group itemsPerRow={3} stackable columns={1}>

                  <Card>
                    <Image src={require('../../assets/images/leebey.png')}
                      as='a'
                      href='https://dry-cove-87436.herokuapp.com/'
                      target='_blank' />

                    <Card.Content>
                      <Card.Header>Mapping Southern Exposure</Card.Header>
                      <Card.Meta>React • Google Maps API • Semantic UI React  </Card.Meta>
                      <Card.Description>
                      </Card.Description>
                      <Button  as='a'
                      href='https://github.com/emilyedalton/book-class'
                      target='_blank' content="Github"/>
                      <Button  as='a'
                      href='https://southernexposuremap.herokuapp.com/'
                      target='_blank' content="Link"/>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src={require('../../assets/images/walkadog.png')}
                      as='a'
                      href='https://emilyedalton.github.io/clicky_memory_game_react/'
                      target='_blank' />

                    <Card.Content>
                      <Card.Header>Walk-a-Dog</Card.Header>
                      <Card.Meta>React</Card.Meta>
                      <Card.Description>
                          Bar graph made with react and CSS
                      </Card.Description>
                      <Button  as='a'
                      href='https://github.com/emilyedalton/clicky_game/tree/master'
                      target='_blank' content="Github"/>
                      <Button  as='a'
                      href='https://warm-sands-37687.herokuapp.com/'
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
export default DataViz; 