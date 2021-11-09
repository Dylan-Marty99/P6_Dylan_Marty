const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

const path = require("path");

const app = express();

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

//------------ Connection à la base de données MongoDB ----------------
mongoose
  .connect(
    "mongodb+srv://DyMty:mongodbusermarty@cluster0.bhvbh.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(bodyParser.json());

//------- Gestion des images et des routes de l'API -------
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
