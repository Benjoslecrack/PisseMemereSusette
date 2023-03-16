// Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from "../../context/AuthContext";
import ControllInput from "../../components/FormInput/ControllInput";

// IMPORT CSS
import './profile.css';


import Card from 'react-bootstrap/Card';


///////////////////////////////////////////////

function Copyright(props) {
  return (
    <div variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        La Centrale
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}

function Profile() {


  //   REDIRECTION VERS LOGIN APRES VALIDATION
  const [{ user }, dispatch] = useStateValue();



  useEffect(() => {
    axios.get(`api/users/${user.idusers}`, { withCredentials: true })
      .then((res) => {
        if (res.data) {
          dispatch({
            type: "SET_USER",
            user: res.data,
          })
        }
      })
  }, [user]);
 
  const navigate = useNavigate();


  const handleClick = () => {
    let data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("firstname", firstname);
    data.append("lastname", lastname);
    if (myFile !== "") {
      data.append("cv", myFile, myFile.name)
    }
    if (myFile2 !== "") {
      data.append("pp", myFile2, myFile2.name)
    }
    if (password.trim() === '') {
      // afficher un message d'erreur à l'utilisateur
      setPasswordError("Le champ du mot de passe ne peut pas être vide !");
      return;
    }
    axios.post(`api/users/update/${user.idusers}`, data,
      { withCredentials: true })
      .then(() => {
        setPasswordError(null);
        navigate("/profile");
      }).catch((err) => {
        console.error(err)
        setPasswordError("Le mot de passe est incorrect !");
      })
  }

  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState(user ? user.firstname : "");
  const [lastname, setLastname] = useState(user ? user.lastname : "");
  const [myFile, setMyFile] = useState("");
  const [myFile2, setMyFile2] = useState("");
  const [passwordError, setPasswordError] = useState("");


  //   CREATION DES INPUTS
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email *",
      required: true,
      value: email,
      setValue: setEmail,
      nametype: "input",
      className:"inputProfile",
    },
    {
      id: 3,
      name: "myFile",
      type: "file",
      placeholder: "Selection image",
      label: "CV",
      accept: 'image',
      value: myFile,
      setValue: setMyFile,
      nametype: "file",
      existingFile: user.cv,
      className:"inputProfileFile",
    },
    {
      id: 4,
      name: "myFile",
      type: "file",
      placeholder: "Selection image",
      label: "PP",
      accept: 'image',
      value: myFile2,
      setValue: setMyFile2,
      nametype: "file",
      existingFile: user.pp,
      className:"inputProfileFile",
    },
    {
      id: 6,
      type: "text",
      placeholder: "firstName",
      label: "firstName",
      value: firstname,
      setValue: setFirstname,
      nametype: "input",
      className:"inputProfile",
    },
    {
      id: 5,
      type: "text",
      placeholder: "lastName",
      label: "lastName",
      value: lastname,
      setValue: setLastname,
      nametype: "input",
      className:"inputProfile",
    },
    {
      nametype: "custom",
      component:<div style={{ height: "50px" }}> {"  "} </div>
    },{
      id: 2,
      name: "password",
      type: "password",
      errorMessage: "We need a password",
      placeholder: "Password",
      label: "Confirmez vos informations à l'aide de votre mot de passe *",
      required: true,
      value: password,
      setValue: setPassword,
      nametype: "input",
      validation : ["required"],
      className:"inputProfile",
    },


  ];

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", minHeight:"110vh" }} className="app">
        {/* <Card.Img variant="top" src={Logo} style={{ width: "20%", objectFit: "contain", alignSelf: "center", marginTop:"5%" }} /> */}
        <Card style={{ margin: "50px", padding:"10px" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center", marginBottom:"20px", fontSize:"30px", fontWeight:"600" }}>Mon profil</Card.Title>
            <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ControllInput allInput={inputs} sendData={handleClick} />
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            </Card.Text>
          </Card.Body>
       </Card>
       </div>
    </>
  );
};
export default Profile;
