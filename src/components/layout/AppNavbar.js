import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import { Link } from 'react-router-dom'

const AppNavbar = () => {

  return (
    <Navbar
      id='app-navbar'
      style={{backgroundColor:'#222'}} 
      className='' 
      variant='dark' 
      expand='lg'
    >
      <Navbar.Brand href='#home'>LoGoHeRe</Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        {/* <Nav className='mr-auto'> */}
        <Nav >
          <Link className='nav-link active' to='/'>Market</Link>
          <Link className='nav-link' to='/funds'>Funds</Link>
          <Link className='nav-link' to='/news'>News</Link>
          <Link className='nav-link' to='/accounts'>Accounts</Link>
          <Link className='nav-link' to='/help'>Help?</Link>
          {/* <NavDropdown title='Language' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.2'>English</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Turkish</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export  default AppNavbar
