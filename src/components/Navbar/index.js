import React, { Component } from 'react';
import { Container,Icon, Menu } from 'semantic-ui-react'
import {NavLink, Link, } from 'react-router-dom'


class Navbar extends Component {

  
    render() {

        return (
            <Menu icon inverted fixed="top" style={{
                background: "rgba(0, 0, 0, 0.8)",

             }}>
               <Container>
               
                 <Menu.Item as={NavLink} to='/' name="Home"/>
                 <Menu.Item as={NavLink} to='/portfolio' name="Projects"/>
                
                 <Menu.Item as={NavLink} to='/about' name="About"/>
                 <Menu.Menu position='right'>

                 <Menu.Item position="right" href='https://github.com/emilyedalton'target='_blank'> 
                 <Icon name= "github"/>   
                 </Menu.Item>              
                 <Menu.Item  position="right"href='https://www.linkedin.com/in/emilyedalton/'target='_blank' > 
                 <Icon name= "linkedin"/>   
                 </Menu.Item>                  
                 <Menu.Item position="right"href='mailto:emilyedalton@gmail.com' target='_blank'> 
                 <Icon name= "envelope outline"/>   
                 </Menu.Item>                  
                </Menu.Menu>

                 
                 
                
               </Container>
             </Menu>

)}  }
        export default Navbar