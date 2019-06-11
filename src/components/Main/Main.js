import React, { Component } from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';



class Main extends Component {

    render() {
        return (
            <div>

                <Parallax
                    bgImage={require('../../assets/images/Bridge.jpg')}
                    bgImageAlt="myBackground"
                    strength={200}
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
                                <Button style={{}} inverted>View Portfolio</Button>
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




            </div>
        )
    }
}
export default Main; 