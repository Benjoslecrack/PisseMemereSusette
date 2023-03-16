// Imports
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//IMPORT CSS
import './contactForm.css';

import ControllInput from "../../components/FormInput/ControllInput";

/////////////////////////////////////////////////

function Contact() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    const [image, setImage] = useState("");
    // const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");

    //REDIRECTION VERS LOGIN APRES VALIDATION

  const handleClick = () => {
    console.log("hello");
    axios.post("api/contact/message", {
      email,
    //   phone,
     image,
    //   subject,
      message,
    //   firstname,
    //   lastname
    })
      .then(() => {
        console.log(message);
        navigate("/connexion");
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
      nametype: "input"
    },
    // {
    //     name: "phone",
    //     type: "text",
    //     placeholder: "Phone",
    //     label: "Phone",
    //     required: true,
    //     value: phone,
    //     setValue: setPhone,
    //     nametype: "input"
    // },
    {
        name: "image",
        type: "file",
        placeholder: "Image",
        label: "Image",
        required: true,
        value: image,
        setValue: setImage,
        nametype: "file"
    },
    // {
    //     name: "subject",
    //     type: "text",
    //     placeholder: "subject",
    //     label: "Nom",
    //     required: true,
    //     value: subject,
    //     setValue: setSubject,
    //     nametype: "input"
    // },
    {
        name: "message",
        type: "text",
        placeholder: "Message",
        label: "Message",
        required: true,
        value: message,
        setValue: setMessage,
        nametype: "input"
    },
    // {
    //   name: "firstname",
    //   type: "text",
    //   placeholder: "Nom",
    //   errorMessage:
    //     "Username should be 3-16 characters and shouldn't include any special character!",
    //   label: "Nom",
    //   pattern: "^[A-Za-z0-9]{3,16}$",
    //   required: true,
    //   value: firstname,
    //   setValue: setFirstname,
    //   nametype: "input"
    // },
    // {
    //   name: "lastname",
    //   type: "text",
    //   placeholder: "Prénom",
    //   label: "Prénom",
    //   value: lastname,
    //   setValue: setLastname,
    //   nametype: "input"
    // },
  ];

  return (

    <>

      <div className="app">
        <div className="formcontact">
          <h1>Contact</h1>
          <div className="formsItemContact">
            <ControllInput allInput={inputs} />
            <button onClick={handleClick} className="buttontoreg">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

