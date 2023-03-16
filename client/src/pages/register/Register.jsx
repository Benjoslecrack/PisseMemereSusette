// Imports
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


//IMPORT CSS
import './register.css';

import ControllInput from "../../components/FormInput/ControllInput";

/////////////////////////////////////////////////

function Register() {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [showNotification, setShowNotification] = useState(false); // état pour contrôler l'affichage de la notification
  const [passwordError, setPasswordError] = useState("");


  // Validation de l'e-mail
 
  //REDIRECTION VERS LOGIN APRES VALIDATION

  const handleClick = () => {

    if (password !== confirmPassword){
      setPasswordError("Les mots de passes ne sont pas identiques")
      return;
    }
    axios.post("api/auth/register", {
      email,
      password,
      firstname,
      lastname
    })
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000); // masquer la notification après 5 secondes
        setTimeout(() => navigate("/connexion"), 5001);
        setPasswordError("")
      }).catch((err) => {
        console.error(err)
        navigate("*")
      })
    }
  

  //CREATION DES INPUTS
  const inputs = [

    {
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
      required: true,
      value: email,
      setValue: setEmail,
      nametype: "input",
      validation : ["required", "email"]
    },
    {
      name: "password",
      type: "password",
      errorMessage: "We need a password",
      placeholder: "Password",
      label: "Mot de passe",
      required: true,
      value: password,
      setValue: setPassword,
      nametype: "input"
    },
    {
      name: "confirmPassword",
      type: "password",
      errorMessage: "Incorrect Password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      pattern: password,
      required: true,
      value: confirmPassword,
      setValue: setConfirmPassword,
      nametype: "input"
    },
    {
      name: "firstname",
      type: "text",
      placeholder: "Nom",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Nom",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      value: firstname,
      setValue: setFirstname,
      nametype: "input",
      validation:["required"]
    },
    {
      name: "lastname",
      type: "text",
      placeholder: "Prénom",
      label: "Prénom",
      value: lastname,
      setValue: setLastname,
      nametype: "input",
      validation:["required"]
    },
  ];



  return (

    <>

      <div className="app">
        <div className="formregister">
          <h1>Inscription</h1>
          <div className="formsItemRegister">
            <ControllInput allInput={inputs} sendData={handleClick} />
            {passwordError && <p className="passworderror">{passwordError}</p>}
          
          </div>
          {showNotification &&
            <div className="notification" onClick={() => { navigate("/connexion") }}>
              <p>Votre inscription a été enregistrée avec succès, un email vous a été envoyé afin de valider votre compte.</p>
            </div>
          }
        </div>
      </div>
    </>
  );
};
export default Register;