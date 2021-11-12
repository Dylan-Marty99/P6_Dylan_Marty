require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();

//------- Importation des routes ---------
const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limite chaque IP à 50 requêtes
  message: "Trop de requêtes éffectuées depuis cette IP",
});

// Helmet protége l'application de certaines des vulnérabilités bien connues du Web en configurant de manière appropriée des en-têtes HTTP.
app.use(helmet());

app.use(limiter);

//----------- Gestion des CORS ----------------
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//------------ Connection à la base de données MongoDB et masquage de l'ID, du MDP et de l'ADDRESS ----------------
const ID = process.env.ID;
const MDP = process.env.MDP;
const ADDRESS = process.env.ADDRESS;

mongoose
  .connect(`mongodb+srv://${ID}:${MDP}@${ADDRESS}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(bodyParser.json());

//------- Gestion des images et des routes de l'API -------
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
