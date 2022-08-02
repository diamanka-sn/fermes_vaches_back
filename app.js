const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const path = require('path');
const cors = require('cors')

const routesBovins = require('./routes/routeBovin')
const routesUtilisateur = require('./routes/routeUtilisateur')
const routesRaces = require('./routes/routeRace')
const routesCommande = require('./routes/routeCommande')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParse.json())
app.use(express.urlencoded({ extended: true }))
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/bovin', routesBovins)
app.use('/utilisateur', routesUtilisateur)
app.use('/races', routesRaces)
app.use('/commandes', routesCommande)

module.exports = app;
