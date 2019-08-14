import React from 'react'
import './header.scss'
import { Navbar } from 'react-bootstrap'
import Navigation from './nav'

function Header () {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Navigation />
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
