import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {

    return (
    <Navbar bg="dark" variant="dark" className="justify-content-center">
      <Nav>
        <Nav.Link className="mr-5 active" href="/">Home</Nav.Link>
        <Nav.Link className="mr-5" href="/manage-posts">Manage posts</Nav.Link>
        <Nav.Link href="/create-post">Create post</Nav.Link>
      </Nav>
    </Navbar>
    )
}

export default Navigation
