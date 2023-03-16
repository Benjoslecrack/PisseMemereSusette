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

    <Navbar className="navbar" expand="lg" variant="tabs" defaultActiveKey="/">
      <Container fluid >
        <Navbar.Brand href="/"><img className="logoimg" src={Logo} alt="" style={{ margin: "10px" }} /></Navbar.Brand>
        <Navbar.Toggle className="burgermenu" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Container className=" justify-content-center">
            <Nav
              className="me-auto my-4 my-lg-0 no-decoration"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className={({ isActive }) => (isActive ? "active" : "navLink")} to="/">
                <Nav.Link className="navbar-link" href="/">Accueil</Nav.Link>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active" : "navLink")} to="/tarificateurs" >
                <Nav.Link className="navbar-link" href="/tarificateurs">Tarificateurs</Nav.Link>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active" : "navLink")}>
                <NavDropdown title="Article"  >
                  <NavLink className={({ isActive }) => (isActive ? "active" : "navLink")} to="/articles/particuliers">
                    <NavDropdown.Item href="/articles/particuliers" to="/articles">Particuliers</NavDropdown.Item>
                  </NavLink>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "navLink")} to="/articles/professionnels">
                    <NavDropdown.Item href="/articles/professionnels" to="/articles">Professionnels</NavDropdown.Item>
                  </NavLink>
                  <NavLink className={({ isActive }) => (isActive ? "active" : "navLink")} to="/articles/entreprises">
                    <NavDropdown.Item href="/articles/entreprises" to="/articles">Entreprises</NavDropdown.Item>
                  </NavLink>
                </NavDropdown>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active" : "navLink")} to="/outils" >
                <Nav.Link className="navbar-link" href="/outils" to="/outils">Outils</Nav.Link>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active" : "navLink")} to="/lexique" >
                <Nav.Link className="navbar-link" href="/lexique" to="/outils">Lexique</Nav.Link>
              </NavLink>
            </Nav>
          </Container>

          {user ?
            <>
             <Nav className="me-auto my-4 my-lg-0 no-decoration" style={{ display:"flex", alignItems:"center", justifyContent:"center", paddingRight:"3%", gap:"3%" }}>
              <p style={{ fontSize: "15px", textAlign:"center", marginBottom:"0"}} >Bonjour,</p>
              <p style={{ fontSize: "15px", textAlign:"center", marginBottom:"0", color:"#ffa41d"}}>{user.lastname}</p>
              </Nav>
              <Nav className="me-auto my-4 my-lg-0 no-decoration">
                <NavDropdown title={<IoPersonOutline />} className='profileicon' style={{textAlign:"center"}}>
                  <NavDropdown.Item href="/profile"style={{textAlign:"center"}} >Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/dashboard" style={{textAlign:"center"}} className="dividerDrodDown">Dashboard</NavDropdown.Item>
                  <NavDropdown.Item style={{ color: "#780808", textAlign:"center" }} onClick={toLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </>
            :
            <div className='loginIcon'>
              <Nav.Link className="navbar-link" href="/connexion">< IoPersonOutline className='iconProfile' values={{ size: 100 }} /></Nav.Link>
            </div>
          }


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}