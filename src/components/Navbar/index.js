import React, { Component } from 'react';
import { Button,Container, Menu } from 'semantic-ui-react'
import {NavLink, Link, withRouter} from 'react-router-dom'


class Navbar extends Component {

  
    render() {

        return (
            <Menu inverted fixed="top" style={{
                background: "rgba(0, 0, 0, 0.8)",

             }}>
               <Container>
                 <Menu.Item header>
                 </Menu.Item>
                 <Menu.Item  as={NavLink} to='/' name="Home"/>
                 <Menu.Item  as={NavLink} to='/people' name="Projects"/>
                
                 <Menu.Item as={Link} to='/createEvent' floated="right"  inverted content="About" />
                 
                 
                 
                
               </Container>
             </Menu>

)}  }
        export default Navbar