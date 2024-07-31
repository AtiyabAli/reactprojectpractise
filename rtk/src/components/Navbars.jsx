import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {  NavLink } from "react-router-dom";

import { useSelector } from "react-redux";


const Navbars = () => {
  const cartProducts = useSelector((state)=> state.cart)
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Redux toolkit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><NavLink to='/'>Dashboard</NavLink></Nav.Link>
              <Nav.Link ><NavLink to='/cart'>Cart {cartProducts.length}</NavLink></Nav.Link>    
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
