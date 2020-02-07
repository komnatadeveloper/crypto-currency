import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
// import { Link } from 'react-router-dom'

const AppNavbar = () => {

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='#home'>LoGoHeRe</Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        {/* <Nav className='mr-auto'> */}
        <Nav >
          <Nav.Link className='active' href='/'>Market</Nav.Link>
          {/* <Link to='/'>Market</Link> */}
          <Nav.Link href='/funds'>Funds</Nav.Link>
          <Nav.Link href='/news'>News</Nav.Link>
          <Nav.Link className='nav-right' href='/accounts'>
            Accounts
          </Nav.Link>
          <NavDropdown title='Language' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.2'>English</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Turkish</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='/help'>Help ?</Nav.Link>
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
