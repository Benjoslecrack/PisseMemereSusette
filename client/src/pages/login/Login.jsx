// Imports
import axios from "axios";
import React, { useState } from "react";
import ControllInput from "../../components/FormInput/ControllInput";

import Copyright from "../../components/Copyright/Copyright";
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from "../../context/AuthContext";

//IMPORT CSS
import './login.css';


import Card from 'react-bootstrap/Card';





function Login() {
  const [{ user }, dispatch] = useStateValue();


  //REDIRECTION VERS LOGIN APRES VALIDATION


  const navigate = useNavigate();

  function handleClickLogin() {
    console.log("testlogin")
    let values = {}
    inputs.map((input) => {
      values[input.name] = input.value
    })
    console.log("values", values)
    axios.post("api/auth/login", values)
      .then((data) => {
        dispatch({
          type: "SET_USER",
          user: data.data
        })
        console.log("data", data)
        navigate("/");
      }).catch((err) => {
        console.error(err);

      })
  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //CREATION DES INPUTS
  const inputs = [

    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email *",
      value: email,
      setValue: setEmail,
      required: true,
      nametype: "input",
      validation: ["required", "email"],
      className: "inputLogin",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Mot de passe *",
      value: password,
      setValue: setPassword,
      required: true,
      nametype: "input",
      validation: ["required"],
      className: "inputLogin",
    },

  ];


  return (

    <>
      <div style={{ display: "flex", flexDirection: "column" }} className="app">
        {/* <Card.Img variant="top" src={Logo} style={{ width: "20%", objectFit: "contain", alignSelf: "center", marginTop:"5%" }} /> */}
        <Card style={{ margin: "50px", padding: "40px" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center", marginBottom: "20px", fontSize: "30px", fontWeight: "700", color: "#FDB833" }}>Se connecter</Card.Title>
            <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ControllInput allInput={inputs} sendData={handleClickLogin} />
            </Card.Text>
            <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link to="/resetpwd" variant="body2" className="linklogin">
                Forgot password?
              </Link>
            </Card.Text>
            <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Copyright sx={{ mt: 0, mb: 2 }} className="copyright" />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Login;