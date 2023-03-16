// Imports
import { createTransport } from "nodemailer";
import dotenv from "dotenv";

// Configs
dotenv.config();

// Transporter
export const Transport = createTransport(
    {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PWD,
      },
    }
  );