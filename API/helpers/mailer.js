// Imports
import dotenv from "dotenv";
import { createError } from "./errors.js";
import {registrationWelcome} from "./myTemplates/emails/register.js";

// Configs
import { Transport } from './configs/mailer.config.js';
dotenv.config();

// Middlewares

/** SendMailWithConfirmationLink
 * Fonction qui envoie un lien de validation pour l'adresse mail
 */
export const SendMailWithConfirmationLink = async (req, res) => {
  console.log("process", process.env)
  console.log("req", req.body)
 /* Configure les options de l'email */
  const mailOptions = {
    to: `${req.body.email}`,
    bcc: `${process.env.EMAIL_ADDRESS}`,
    from: `${process.env.EMAIL_ADDRESS}`,
    subject: "Confirmation de création de compte",
    text: "",
    html: registrationWelcome(req.headers.host, req.body.email_token),
    
  };
  /* Envoie le mail via le protocole smtp */
  try{
    Transport.sendMail(mailOptions);
    res.status(200).json({ message : `Un email vient de vous être envoyé a l'adresse mail suivante : ${req.body.email}`});
  } catch (err) {
    createError(404, "L'email n'a pas pu être envoyé, veuillez vérifier que vous avez rentré une adresse valide");
  }
};

/** SendMailWithResetPasswordLink
 * Fonction qui envoie avec un lien vers le renouvellement de mdp
 * @param {*} req 
 * @param {*} res 
 */
export const SendMailWithResetPasswordLink = async (req, res) => {
/* Configure les options de l'email */
  const mailOptions = {
    to: `${req.body.email}`,
    bcc: `${process.env.EMAIL_ADDRESS}`,
    from: `${process.env.EMAIL_ADDRESS}`,
    subject: "Lien de changement de mot de passe pour Mon Cursus",
    text: "",
    html: `Voici votre lien de changement de mot de passe : <br>
    <a href="http://${req.headers.host}/api/auth/resetPassword/${req.body.email_token}"> Cliquez ici pour changer votre mot de passe</a> <br>`,
  };
  /* Envoie le mail via le protocole smtp */
  try{
    Transport.sendMail(mailOptions);
    res.status(201).json({ message : `Un email vient de vous être envoyé a l'adresse mail suivante : ${req.body.email}`});
  } catch (err) {
    createError(404, "L'email n'a pas pu être envoyé, veuillez vérifier votre adresse mail");
  }
};


// réception d'une demande de contact à partir du formulaire de contact
export const contactSendMsgToAdmin = async (req, res, next) => {
  await console.log(msgSendToAdmin(req.body.name, req.body.message, req.body.email, req.body.subject));
   const mailOptions = {
     //to: `${req.body.email}`,
     bcc: "info@mayak-conseil.com",
     //from: "info@mayak-conseil.com",
     subject: "Message du site XXXXX",
     text: "",
     html: ` ${msgSendToAdmin(req.body.name, req.body.email, req.body.message, req.body.phone, req.body.subject)} `,
  // html: `${req.body.name} vous a envoyé un message : <br> <br>
   // ${req.body.message} <br> <button style="background-color:red"> <a href="mailto:${req.body.email}"> Répondre à ${req.body.name} </a> </button> <br> <br>`,
   };
    /* Envoie le mail via le protocole smtp */
  try{
    Transport.sendMail(mailOptions);
    res.status(201).json({ message : `Un email vient de vous être envoyé a l'adresse mail suivante : ${req.body.email}`});
  } catch (err) {
    createError(404, "L'email n'a pas pu être envoyé, veuillez vérifier votre adresse mail");
  }
  };

  
export const confirmationClientEmail = async (req, res) => {
  const user = await getUserByEmail(req.body.email);
  const mailOptions = {
    to: `${req.body.email}`,
    bcc: `${process.env.EMAIL_USER}`,
    from: `${process.env.EMAIL_USER}`,
    subject: "Mail de confirmation",
    text: "",
    html: `Bonjour ${req.body.name} ${req.body.email}, <br>
    Nous avons bien reçu votre demande de devis. <br>
    Nous vous recontacterons dans les plus brefs délais. <br>
    Cordialement, <br>
    L'équipe Mayak Conseil`,
  };
   /* Envoie le mail via le protocole smtp */
   try{
    Transport.sendMail(mailOptions);
    res.status(201).json({ message : `Un email vient de vous être envoyé a l'adresse mail suivante : ${req.body.email}`});
  } catch (err) {
    createError(404, "L'email n'a pas pu être envoyé, veuillez vérifier votre adresse mail");
  }
};