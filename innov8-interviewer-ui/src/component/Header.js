import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../img/ibm-logo.jpg';
import '../css/Header.css'

const Header = () => {
  return (
    <Navbar variant="dark" className="nav-bar" expand="lg" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand>
            <img
                alt=""
                src={logo}
                className="header-logo"
            />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer exact to='/'><Nav.Link className='navbar-link'>Interviewers</Nav.Link></LinkContainer>
                <LinkContainer to='/booking'><Nav.Link className='navbar-link'>Booking</Nav.Link></LinkContainer>
                <LinkContainer to='/staffing'><Nav.Link className='navbar-link'>Staffing</Nav.Link></LinkContainer>
                <LinkContainer to='/requirements'><Nav.Link className='navbar-link'>Requirements</Nav.Link></LinkContainer>
                <LinkContainer to='/contacts'><Nav.Link className='navbar-link'>Contact Us</Nav.Link></LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    
  );
}

export default Header;