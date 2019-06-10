import React, {Component} from 'react';
import { Button, Container, Grid, Header, Row, Image} from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';


class About extends Component {

    render (){
        return (
            
            <div style={{ height: '100vh' }} >
             <Parallax>

            <Container>
            <Grid verticalAlign='middle' centered stackable columns={1} style = {{margin:"3em"}}>    
            <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={12}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Grid.Column>
    </Grid>
    </Container>

    </Parallax>



</div>
    )
}}
export default About; 