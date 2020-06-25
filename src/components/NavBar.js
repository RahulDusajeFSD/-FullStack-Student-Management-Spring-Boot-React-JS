import React from  'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
class NavigationBar extends React.Component
{
    render()
    {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
               </Link> 
                <Navbar.Brand href="/">Student</Navbar.Brand> 
               
                
                <Nav className="mr-auto">
      
      <Link to={"add"} className="navbar-brand" >Add Student   </Link> 
      <Link to={"list"} className="navbar-brand">List Students</Link>
    </Nav>
                </Navbar>  
        );
    }
}

export default NavigationBar