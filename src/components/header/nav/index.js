import React from 'react'
import './nav.scss'
import { Nav } from 'react-bootstrap'

function Navigation () {
  return (
    <Nav className='ml-auto'>
      <Nav.Link href='#home'>Home</Nav.Link>
      <Nav.Link href='#features'>Post</Nav.Link>
      <Nav.Link href='#pricing'>About</Nav.Link>
    </Nav>
  )
}

export default Navigation
