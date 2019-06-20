import React, {Component} from 'react';
import { Button, Container, Grid, Header, Row, Image} from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';
import Portfolio from '../Portfolio/'

class About extends Component {

    render (){
        return (
            
            <div style={{ height: '100vh' }} >
             <Parallax>

            <Container>
            <Grid verticalAlign='middle' centered stackable columns={1} style = {{margin:"3em"}}>    
            <Grid.Column width={4}>
      <Image src={require('../../assets/images/Emily.jpg')}/>
    </Grid.Column>
    <Grid.Column width={12}>
      <p>Hi, I'm Emily Dalton. I'm a Chicago based front-end web developer and recent graduate of Northwestern's Coding Bootcamp.</p>
      <p>Check out some of my work below!</p>
    </Grid.Column>
    </Grid>
    </Container>

    </Parallax>



<Portfolio/>
</div>    )
}
}
export default About; 