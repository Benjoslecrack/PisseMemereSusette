//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { IoPersonOutline, IoIosMenu } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';


import "./Navbar.css";

import React from 'react';

import { useStateValue } from '../../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Logo from "../../assets/Logo3.svg";



export default function NavBar() {

  const [{ user }, dispatch] = useStateValue();

  const navigate = useNavigate()

  const toLogout = () => {
    dispatch({
      type: "SET_USER",
      user: null
    })
    axios
      .post(
        "api/auth/logout",
        { id: null },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch({
          type: "SET_USER",
          user: null
        })
        navigate("/")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (

    <Navbar style={{marginBottom:25}}className="navbar" expand="lg" variant="tabs" defaultActiveKey="/">
      <Container fluid >
        <Navbar.Toggle className="burgermenu" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Container className=" justify-content-center">
            <Nav
              className="me-auto my-4 my-lg-0 no-decoration"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink style={{fontWeight:600,fontSize:20}} className={({ isActive }) => (isActive ? "active" : "navLink")} to="/">
                <Nav.Link className="navbar-link" style={{fontWeight:600,fontSize:20}}href="/">Accueil</Nav.Link>
              </NavLink>
              <NavLink style={{fontWeight:600,fontSize:20}} className={({ isActive }) => (isActive ? "active" : "navLink")} to="/recherche" >
                <Nav.Link className="navbar-link" style={{fontWeight:600,fontSize:20}} href="/recherche">Recherche</Nav.Link>
              </NavLink>
            </Nav>
          </Container>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}