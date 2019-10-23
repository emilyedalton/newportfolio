import React, { Component } from 'react';
import { Button, Container, Grid, Header} from 'semantic-ui-react'
import { Parallax,  } from 'react-parallax';
import { Link} from 'react-router-dom'
import About from '../About'




class Main extends Component {

    render() {
        return (
            <div>

                <Parallax
                    bgImage={require('../../assets/images/kitty.jpg')}
                    bgImageAlt="myBackground"
                    strength={100}
                >

                    <Container style={{ height: '100vh' }} >

                        <Grid  stackable columns ={1}>
                            <Grid.Column width={4} textAlign="center" />

                            <Grid.Column  width={8} textAlign="center">
                                <div style={{ height: "4em" }} />
                            </Grid.Column>
                            <Grid.Column  width={4} textAlign="center" />
                            <Grid.Row />
                            <Grid.Column width={4} textAlign="center"/>

                            <Grid.Column width={8} textAlign="center">
                             <div style={{ height: "4em" }} />
                            </Grid.Column>
                            <Grid.Column width={4} textAlign="center"/>
                            <Grid.Row  />

                            <Grid.Column  width={4} textAlign="center"/>
                            <Grid.Column  width={8} textAlign="center" style={{background:"rgba(0, 0, 0, 0.8)"}}>
                                <Header as='h1' content="Emily Dalton | Web Developer"
                                    style={{
                                        fontSize: '2em',
                                        color: 'white',
                                    }} />

                                <Button as={Link} to='/portfolio' inverted>View Portfolio</Button>

                            </Grid.Column>

                            <Grid.Column  width={4} textAlign="center"/>
                            <Grid.Row />
                            <Grid.Column  width={4} textAlign="center"/>
                            <Grid.Column  width={8} textAlign="center">
                             <div style={{ height: "4em" }}/>
                            </Grid.Column>
                            <Grid.Column  width={4} textAlign="center" />
                            <Grid.Row />

                            <Grid.Column  width={4} textAlign="center"/>
                            <Grid.Column  width={8} textAlign="center">
                                <div style={{ height: "4em" }}/>
                            </Grid.Column>
                            <Grid.Column  width={4} textAlign="center"/>
                            <Grid.Row />

                        </Grid>
                    </Container>
                </Parallax>


<About/>
</div>

        )
    }
}
export default Main; 