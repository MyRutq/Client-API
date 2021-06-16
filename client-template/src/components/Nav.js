import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

function Navigation() {

    return (
    <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/manage-posts">Manage posts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/create-post">Create post</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default Navigation

