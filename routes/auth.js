// Imports
import express from "express";
import { generateAccessToken } from "../helpers/jwt.js";
import { SendMailWithConfirmationLink, SendMailWithResetPasswordLink } from "../helpers/mailer.js"

// Imports controller functions
import {
    registerController,
    confirmEmailController,
    loginController,
    forgotPasswordController,
    ResetPasswordController,
    logoutController
} from "../controllers/authController.js";

// Initialisation du Router
const router = express.Router();

// Routes

/** Route de 
 * D'inscription
 */
router.post("/register",  generateAccessToken, registerController, SendMailWithConfirmationLink);

/**
 * Route de
 * Confirmation de l'email
 */
router.get("/confirmation/:email_token", confirmEmailController);

/**
 * Route de
 * Connexion
 */
router.post("/login", loginController);

/** 
 * Route de 
 * Demande d'un nouveau mdp
*/
router.post("/forgotPassword", generateAccessToken, forgotPasswordController, SendMailWithResetPasswordLink);

/**
 * Route de 
 * Changement de mot de passe
 */
router.post("/resetPassword/:email_token", ResetPasswordController);

/**
 * Route de
 * Déconnexion
 */
router.post("/logout", logoutController);

export default router;