import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
// import { AuthContext } from "../../context/AuthContext";
// import { Navigate } from "react-router-dom";
// import { getAccordionDetailsUtilityClass } from "@mui/material";
//import fetch from 'react-fetch'
//import { Formik, Form, Field } from "formik";

//  const { contact } = useContext(AuthContext);


export default function GetContact() {

    const [data, setData] = useState([])

    
    // let res = "";

    // GET request for remote image in node.js //IL NE LE FAIT QUE UNE FOIS
    useEffect(() => {
        document.title = `MS MESSAGERIE`;

        //axios.get(`/contact/allContactMessageReveived`)    
        axios({
            method: 'get',
            url: "api/contact/allContactMessageReveived",
        }).then((res) => {
            console.log(res,"TEST")
            setData(res.data[0])
        }).catch((err) => {
            console.log(err)
        })

    }, [])


    return (

        <>
            
            {data.map((contact) => {                
                return  contact ? ( <div> Bonjour Mme/Mr {contact.name}, {contact.message} 🤓  </div> ) : ( <div>toto 🙂</div> ) 
            })
            }


            {/* <p>Bonjour Monsieur/Madame:{contact ? (<div>  {contact.name} 🤓  </div>) : (<div>toto 🙂</div>)} </p>
            <p>Votre email: {contact ? (<div>  {contact.email} 🤓  </div>) : (<div>toto 🙂</div>)}</p>
            <p>Votre commentaire: {contact ? (<div>  {contact.message} 🤓  </div>) : (<div>toto 🙂</div>)}</p>
            <p>Tel: {contact ? (<div>  {contact.phone} 🤓  </div>) : (<div>toto 🙂</div>)}</p> */}


        </>
    )
}


        // <>
        //     <p>Bonjour Monsieur/Madame:{ contact ? ( <div> Bienvenue {contact.name} 🤓  </div> ) : ( <div>Hey YO 🙂</div> )} </p>
        //     <p>Votre email: { contact ? ( <div> Bienvenue {contact.email} 🤓  </div> ) : ( <div>Hey YO 🙂</div> )}</p>
        //     <p>Votre commentaire: { contact ? ( <div> Bienvenue {contact.message} 🤓  </div> ) : ( <div>Hey YO 🙂</div> )}</p>
        //     <p>Tel: { contact ? ( <div> Bienvenue {contact.phone} 🤓  </div> ) : ( <div>Hey YO 🙂</div> )}</p>
        // </>


// export default function ContactGet() {
//     async function recupInfo() {

//         try {

//             //console.log(result)
//             //console.log(recupInfo())
//         } catch (error) {
//             //console.log(error);
//         }
//     };

    // if(isLoggedIn){
    //     fecthHandler();
    // }


