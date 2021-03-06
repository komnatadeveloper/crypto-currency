import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export const AppNavbar2 = () => {
  const [openNavCollapse, setOpenNavCollapse] = useState(false);

  return (
    <Navbar 
      bg='dark'
      variant='dark' 
      expand='lg'
    >
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Nav.Link 
        href='#home'
        // className='text-secondary'
        style={{
          color: 'rgba(255,255,255,.5)'          
        }}
      >
        Market
      </Nav.Link>
      <Nav.Link href='#link'>Funds</Nav.Link>
      <Nav.Link href='#link'>News</Nav.Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          {/* <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link> */}
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
