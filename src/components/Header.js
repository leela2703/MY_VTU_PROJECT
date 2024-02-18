import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

    return(
        <header>
        <Navbar className='navbar-style' expand="lg">
        <Container>
            <LinkContainer to='/'>
            <Navbar.Brand href="/">
            <Image className='logo-img-style'src='Images/logo.jpg' alt="VTU" roundedCircle />
            <h5 className='logo-text-style'>Vishweraya Technological University, Belagavi</h5>
            </Navbar.Brand>
        </LinkContainer> 
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

            <LinkContainer to = '/'>
            <Nav.Link href="#">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/about'>
            <Nav.Link href="#link">AboutUs</Nav.Link>
            </LinkContainer>       
        
        <NavDropdown title="Academy" id="basic-nav-dropdown">
            <LinkContainer to='/admission'><NavDropdown.Item href="#">Admission</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/circular/notification'>
            <NavDropdown.Item href="#">Circular & Notification</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/certificate issue'><NavDropdown.Item href="#">Certificate Issue</NavDropdown.Item></LinkContainer>
            
        </NavDropdown>

        <NavDropdown title="Examination" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Examination guidelines</NavDropdown.Item>
        <LinkContainer to = '/examapplications'>
        <NavDropdown.Item href="#">Examination Applications</NavDropdown.Item>
        </LinkContainer>        
        <LinkContainer to='/result/loginPage'>
        <NavDropdown.Item href="#">Results</NavDropdown.Item>
        </LinkContainer>
        
        </NavDropdown>

        <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Civil Eng</NavDropdown.Item>
        <NavDropdown.Item href="#">Mech Eng</NavDropdown.Item>
        <NavDropdown.Item href="#">Computer science Eng</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Staff Login" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
        </NavDropdown>
    </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>   
        </header>
    )
}
export default Header