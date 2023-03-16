// Imports
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser'
import dotenv from "dotenv";
import path from "path";

import * as url from 'url';
    const filename = url.fileURLToPath(import.meta.url);
    const dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Import routers
import usersRoute from "./routes/users.js";
 import authRoute from "./routes/auth.js";
// import mailingRoute from "./routes/mailing.js";
import contactRoute from "./routes/contact.js";

// Configs
dotenv.config();
 const corsOptions = {
     origin : process.env.CORS_ORIGIN,
     optionsSuccessStatus : 200,
 }

// Initiallisation de l'app
const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port d'écoute
app.listen(process.env.APP_BACK_PORT, () => console.log(`Connected to Backend on port ${process.env.APP_BACK_PORT}`));

app.use("/public", express.static(path.join(dirname, "./public/uploads")));

// Routes
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
// app.use("/api/mailing", mailingRoute);
app.use("/api/contact", contactRoute);


// Gestion de l'erreur
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`${err.message}`)
})
