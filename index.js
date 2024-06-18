const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const homePage = require('./src/Routes/homeRoutes');
const endpoints = require('./src/Routes/router'); //importation des endpoints en passant par un router
const authRoutes = require('./src/Routes/authRoutes'); //importation des routes d'authentification
const sequelize = require('./src/Config/connexion'); //importation de sequilize dans le fichier connexion.js
require('dotenv').config(); // Charger les variables d'environnement
const helmet = require('helmet');



/**********INITIALISATION APP **************/

const app = express();
const port = process.env.PORT || 5000;

//sécuriser le header
app.use(helmet());


// Configurer HTTP Strict Transport Security (HSTS) pour forcer l'utilisation de HTTPS
app.use(helmet.hsts({
  maxAge: 63072000, // Durée de validité en secondes (2 ans)
  includeSubDomains: true, // Appliquer HSTS à tous les sous-domaines
  preload: true // Inclure ce domaine dans la liste de préchargement HSTS
}));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
    origin: /http:\/\/localhost/
}));

app.toString('*', cors());

app.listen(port, ()=> {
    console.log('Bienvenue sur Node JS.');
    authenticateDB(); // Appeler la fonction authenticateDB pour vérifier la connexion à la base de données
});


async function authenticateDB() {

    try{
        await sequelize.authenticate();
        console.log('connection successful !');

    }catch(error) {
       console.log('connection failed!', error);
    }
};

//page d'accueil
app.use('/', homePage);

//route pour les points d'API
const apiRoot = '/api';
app.use(apiRoot, endpoints);

//route pour l'authentification
const authRoot = '/auth';
app.use(authRoot, authRoutes);

const swaggerRoutes = require('./swagger/swaggerRoutes');
// Utiliser les routes Swagger
app.use('/', swaggerRoutes);











